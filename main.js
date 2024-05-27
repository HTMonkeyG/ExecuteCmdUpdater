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
      (/^MANIFEST-[0-9]{6}$/.test(a) || /^CURRENT$/.test(a) || /^[0-9]{6}.ldb$/.test(a)) && preEnc.push(a);
    }
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