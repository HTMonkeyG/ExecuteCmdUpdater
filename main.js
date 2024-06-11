const NBT = require("parsenbt-js")
  , fs = require("fs-extra")
  , pl = require('path')
  , { LevelDB } = require('leveldb-zlib')
  , rl = require("readline")
  , process = require("process")
  , XOR = require("./includes/XOREncryptHelper.js")
  , UpdateExecute = require("./includes/parser.js");

const text = require("./includes/text.js")
  , fmt = require("./includes/tFormat.js");

var printf = fmt.printF;

var db;

var UI = rl.promises.createInterface({
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
  printf(text);
  if ((await UI.question('')).toLocaleLowerCase() != "y") return false;
  return true
}

async function main() {
  while (1) {
    printf(text.enterPath);
    var path = await UI.question(UI.getPrompt());
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

    if (!checkEncFiles(path)) {
      printf(text.foundEncFile);
      break;
    }

    if (!await confirmOperation(text.confirmOp)) UI.close();

    printf(text.scanning);
    db = new LevelDB(pl.join(path, 'db'), { createIfMissing: false });
    await db.open();

    /** 命令块计数, 成功计数, 错误计数 */
    var ctr = [0, 0, 0];
    /** 日志保存 */
    var log = "";
    /** 当前区块无命令块 */
    var noCbInChunk = true;

    // 遍历
    for await (let kvpair of db) {
      var meta = getChunkMeta(kvpair[0]);
      // 是区块而且是方块实体区段
      if (meta && meta.type == 0x31) {
        var nbt = NBT.ReadSerial(toArrayBuffer(kvpair[1]), true);
        nbt.forEach(function (ele, ind) {
          if (ele["comp>"]["str>Command"]) {
            ctr[0]++; noCbInChunk = false;
            var cbPos = [ele["comp>"]["i32>x"], ele["comp>"]["i32>y"], ele["comp>"]["i32>z"]]
              , succ = true
              , updatedCmd = '';
            try {
              updatedCmd = UpdateExecute(ele["comp>"]["str>Command"], (a, b, c, d) => {
                if (a == 1) {
                  printf(text.foundDetect, [cbPos[0], cbPos[1], cbPos[2], `... ${c} ${d} ...`]);
                  succ = false;
                } else if (a == 2) {
                  printf(text.foundNewExe, [cbPos[0], cbPos[1], cbPos[2], `... ${c} ...`]);
                  succ = false;
                }
              })
            } catch (e) {
              printf(text.foundSyntaxErr, [cbPos[0], cbPos[1], cbPos[2], e.message]);
              ctr[2]++;
              return
            }
            if (succ) {
              ctr[1]++;
              nbt[ind]["comp>"]["str>Command"] = updatedCmd;
              // 更新版本, 1.18为19
              nbt[ind]["comp>"]["i32>Version"] = 19;
            } else ctr[2]++;
          }
        });
        if (!noCbInChunk) {
          var updatedBlocks = nbt.reduce(function (buf, ele) {
            var binData = NBT.Writer(ele, true);
            return Buffer.concat([buf, new Uint8Array(binData)])
          }, Buffer.alloc(0));
          // 回写
          db.put(kvpair[0], updatedBlocks);
        }
      }
    }
    printf(text.totalCb, ctr);
    await db.close();
    printf(text.ctrlCExit);
  }
}

main();