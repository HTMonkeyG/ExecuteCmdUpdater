const NBT = require("parsenbt-js")
  , fs = require("fs")
  , pl = require('path')
  , { LevelDB } = require('leveldb-zlib')
  , rl = require("readline")
  , process = require("process")
  , XOR = require("./includes/XOREncryptHelper.js");

const text = require("./includes/text.js")
  , fmt = require("./includes/tFormat.js");

var printf = fmt.printF;

var UI = rl.promises.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\x1b[0m> ',
});

UI.on('close', function () {
  printf(text.exit);
  process.exit(0);
});

async function main() {
  while (1) {
    printf(text.welcome);
    var path = await UI.question(UI.getPrompt());
    path = pl.resolve('', path);

    if (fs.existsSync(path) && fs.statSync(path).isDirectory()) {
      fmt.printF(text.test);
      if (!integrityTest(path, function (a) {
        fmt.printF(text.missing, [a])
      })) {
        fmt.printF(text.testFail);
        continue;
      }
      else
        fmt.printF(text.testSucc);
    } else {
      fmt.printF(text.targetInvalid);
      continue;
    }

    var dbPath = pl.join(path, 'db'),
      ls = fs.readdirSync(dbPath);

    for (var i = 0; i < ls.length; i++) {
      var a = ls[i],
        tempBuf = fs.readFileSync(pl.join(dbPath, a));
      if (XOR.checkFileIsEncrypt(tempBuf)) {
        fmt.printF(text.foundEncFile);
        process.exit(1);
      }
    }

    var db = new LevelDB(dbPath, { createIfMissing: false });

    await db.open();

    for await (let chunk of db) {
      var meta = getChunkMeta(chunk[0]);
      /*if(meta && meta.pos[0] > 620 && meta.type == 0x31) {
        console.log(NBT.Reader(toArrayBuffer(chunk[1]), true))
        fs.writeFileSync("a.nbt", chunk[1])
        break;
      }*/
      /*if (meta && meta.type == 0x31) {
        var blockEntity = NBT.Reader(toArrayBuffer(chunk[1]), true);
        if (blockEntity["comp>"]["str>id"] == "CommandBlock") {
          var cmd = blockEntity["comp>"]["str>Command"];
          console.log(cmd);
        }
      }*/
      if(meta && meta.pos[0] == 625 && meta.pos[1] == 625)
        console.log(meta, chunk[1])
    }

    await db.close();
  }
}

main();

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

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}