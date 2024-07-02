const NBT = require("parsenbt-js")
  , fs = require("fs")
  , pl = require('path')
  , { LevelDB } = require('leveldb-zlib')
  , rl = require("readline")
  , process = require("process")
  , XOR = require("./includes/XOREncryptHelper.js")
  , UpdateExecute = require("./includes/parser.js")
  , text = require("./includes/text.js")
  , fmt = require("./includes/tFormat.js");

var printf = fmt.printF;

var db, debug, params, UI;

params = Object.fromEntries(process.argv.slice(2).reduce((pre, item) => {
  if (item.startsWith("--"))
    return [...pre, item.slice(2).split("=").slice(0, 2)];
  return pre;
}, []));

debug = Object.keys(params).indexOf("debug") > -1;

UI = rl.promises.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\x1b[0m> ',
});

UI.on('close', function () {
  printf(text.exit);
  if (db && db.isOpen && db.isOpen()) {
    // 确保数据库关闭后再退出
    db.close().then(function () { process.exit(0) }, function () { process.exit(1) })
  } else process.exit(0);
});

printf(text.welcome);

/** 完整性测试 */
function integrityTest(tP, log) {
  var ls = fs.readdirSync(tP),
    pass = !0;

  if (ls.indexOf('level.dat') == -1)
    pass = !1,
      log('level.dat');

  if (ls.indexOf('db') == -1 || !fs.statSync(pl.join(tP, 'db')).isDirectory())
    pass = !1,
      log('db/');
  else {
    ls = fs.readdirSync(pl.join(tP, 'db'));
    var flag = 0x3;
    for (var i = 0; i < ls.length; i++) {
      if (/^MANIFEST-[0-9]{6}$/.test(ls[i])) flag &= 0x6;
      if (/^CURRENT$/.test(ls[i])) flag &= 0x5;
      if (!flag) break;
    }
    (flag & 0x1) ? (log('db/MANIFEST-*'), pass = !1) : 0;
    (flag & 0x2) ? (log('db/CURRENT'), pass = !1) : 0;
  }

  return pass;
}

/** 检测key是否为区块并获取区块元数据 */
function getChunkMeta(buf) {
  if (buf.length < 9) return false;
  var pos = [buf.readInt32LE(0), buf.readInt32LE(4)];
  if (Math.abs(pos[0]) > 1875000 || Math.abs(pos[1]) > 1875000) return false;
  var type, index, dimension = 0;
  if (buf.length == 9)
    type = buf.readUInt8(8);
  if (buf.length == 10)
    type = buf.readUInt8(8), index = buf.readUInt8(9);
  if (buf.length == 13)
    dimension = buf.readUInt32LE(8), type = buf.readUInt8(12);
  if (buf.length == 14)
    dimension = buf.readUInt32LE(8), type = buf.readUInt8(12), index = buf.readUInt8(13);
  return { pos: pos, type: type, index: index, dimension: dimension }
}

/** 检测key是否为结构并获取结构元数据 */
function getStructureMeta(buf) {
  // structuretemplate_ 前缀长度
  if (buf.length < 18) return false;
  var name = buf.toString();
  if (name.substring(0, 18) !== "structuretemplate_") return false;
  // 正常结构不可能有多个冒号
  var r = name.substring(18).split(":");
  if (r.length > 2) return false;
  return {
    namespace: r[0] || '',
    name: r[1] || '',
    toString: function () {
      return this.namespace + ":" + this.name
    }
  }
}

/** 将Buffer转换为ArrayBuffer */
function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

/** 查找加密文件 */
function checkEncFiles(path) {
  var dbPath = pl.join(path, 'db');
  for (var a of fs.readdirSync(dbPath)) {
    var tempBuf = fs.statSync(pl.join(dbPath, a)).isFile() && fs.readFileSync(pl.join(dbPath, a));
    if (XOR.checkFileIsEncrypt(tempBuf))
      return false
  }
  return true
}

/** 确认操作 */
async function confirmOperation(text) {
  if ((await UI.question(fmt.translateF(text))).toLocaleLowerCase() != "y") return false;
  return true
}

/** 打印日志 */
function printLog(logPath, text, replacements) {
  try { fs.appendFileSync(logPath, fmt.translateF(text, replacements)) } catch (e) { }
}

async function main() {
  while (1) {
    printf(text.enterPath);
    var path = await UI.question(UI.getPrompt()), updateStructure = false;
    path = pl.resolve('', path);

    // 存在性及完整性检测
    if (fs.existsSync(path) && fs.statSync(path).isDirectory()) {
      printf(text.test);
      if (!integrityTest(path, (a) => printf(text.missing, [a]))) {
        printf(text.testFail);
        continue;
      }
      else printf(text.testSucc);
    } else {
      printf(text.targetInvalid);
      continue;
    }

    // 加密文件检测
    if (!checkEncFiles(path)) {
      printf(text.foundEncFile);
      continue;
    }

    // 更新结构
    if (await confirmOperation(text.updateStructure)) updateStructure = true;

    // 确认操作
    if (!await confirmOperation(text.confirmOp)) UI.close();

    printf(text.scanning);
    db = new LevelDB(pl.join(path, 'db'), { createIfMissing: false });
    await db.open();

    /** 命令块计数, 成功计数, 错误计数, 结构成功计数, 结构错误计数 */
    var ctr = [0, 0, 0, 0, 0];
    /** 日志保存 */
    var logPath = pl.join(path, fmt.fmtDate(new Date()) + '.log');

    printLog(logPath, '');

    // 遍历
    for await (let kvpair of db) {
      try {
        var meta = getChunkMeta(kvpair[0])
          , noCbInChunk = true;
        // 是区块而且是方块实体区段
        if (meta && meta.type == 0x31 && kvpair[1].length) {
          var nbt = NBT.ReadSerial(toArrayBuffer(kvpair[1]), true);
          for (var ele of nbt) {
            if (ele["comp>"]["str>Command"]) {
              ctr[0]++; noCbInChunk = false;
              var cbPos = [ele["comp>"]["i32>x"], ele["comp>"]["i32>y"], ele["comp>"]["i32>z"]]
                , updatedCmd = '';
              try {
                updatedCmd = UpdateExecute(ele["comp>"]["str>Command"]);
                ctr[1]++;
                ele["comp>"]["str>Command"] = updatedCmd;
                // 更新命令块数据版本, 1.18为19
                // 此处使用从1.20.60.2获取的版本数值36
                //ele["comp>"]["i32>Version"] = 36;
                // 此处使用从1.19.50.23获取的版本数值25
                ele["comp>"]["i32>Version"] <= 20 && (ele["comp>"]["i32>Version"] = 25);
              } catch (e) {
                printf(text.foundErr, [cbPos[0], cbPos[1], cbPos[2], e.message]);
                printLog(logPath, text.logFoundErr, [cbPos[0], cbPos[1], cbPos[2], e.message]);
                ctr[2]++;
              }
            }
          }

          if (!noCbInChunk) {
            var updatedBlocks = nbt.reduce(function (buf, ele) {
              var binData = NBT.Writer(ele, true);
              return Buffer.concat([buf, new Uint8Array(binData)])
            }, Buffer.alloc(0));
            // 回写
            db.put(kvpair[0], updatedBlocks);
          }
        }
        noCbInChunk = true;

        // 结构
        meta = updateStructure ? getStructureMeta(kvpair[0]) : false;
        if (meta && kvpair[1].length) {
          debug && (
            printf(text.debugScanStru, [meta + '']),
            printLog(logPath, text.logDebugScanStru, [meta + ''])
          );

          var nbt = NBT.Reader(toArrayBuffer(kvpair[1]), true)
            , palette = nbt["comp>"]["comp>structure"]["comp>palette"]["comp>default"]["comp>block_position_data"]
            , originPos = nbt["comp>"]["list>structure_world_origin"];
          for (var ind in palette) {
            var ele = palette[ind]["comp>block_entity_data"];
            if (ele && ele["str>Command"]) {
              ctr[0]++; noCbInChunk = false;
              var cbPos = [
                ele["i32>x"] - originPos[1],
                ele["i32>y"] - originPos[2],
                ele["i32>z"] - originPos[3]
              ]
                , updatedCmd = '';

              try {
                updatedCmd = UpdateExecute(ele["str>Command"]);
                ctr[3]++;
                ele["str>Command"] = updatedCmd;
                ele["i32>Version"] <= 20 && (ele["i32>Version"] = 25);
              } catch (e) {
                printf(text.foundErrStru, [kvpair[0].toString('utf8').slice(18), cbPos[0], cbPos[1], cbPos[2], e.message]);
                printLog(
                  logPath,
                  text.logFoundErrStru,
                  [
                    kvpair[0].toString('utf8').slice(18),
                    cbPos[0], cbPos[1], cbPos[2], e.message
                  ]
                );
              }
            }
          }

          if (!noCbInChunk) {
            var binData = NBT.Writer(nbt, true);
            // 回写
            db.put(kvpair[0], Buffer.from(binData));
          }
        }
      } catch (e) {
        printLog(logPath, text.logUnknownError, [kvpair[0].toString('hex'), e]);
        printf(text.unknownError, [kvpair[0].toString('hex'), e])
      }
    }

    printf(text.totalCb, ctr);
    printf(text.logSavePath, [logPath]);
    await db.close();
    await UI.question(fmt.translateF(text.ctrlCExit));
  }
}

main();