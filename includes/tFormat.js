const proc = require('process'),
  rl = require('readline');

function rgb(r, g, b) {
  return `\x1b[38;2;${r};${g};${b};m`
}

function mcFmtLog(txt) {
  console.log(mcFmtCode(txt))
}

function printF(txt, arr) {
  var ret = '';
  if (txt == void 0 || !txt.length) return '';
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] == '%')
      (txt[i + 1] != void 0 && /[0-9]+/.test(txt[i + 1])) ? (ret += (arr[txt[i + 1]] || ''), i++) : ret += '%';
    else
      ret += txt[i]
  }
  ret = mcFmtCode(ret),
    console.log(ret);
}

function hex2buf(txt) {
  if (typeof (txt) !== 'string')
    return !1;
  txt = txt.replace(/^(0x|0X)/, '');
  (txt.length & 1) && (txt = '0' + txt);
  var ret = Buffer.from(txt, 'hex');
  if (!ret.length) return !1;
  if (ret.length != (txt.length >> 1))
    return !1;
  return ret
}

function mcFmtCode(txt) {
  function code2console(a) {
    var table = {
      '0': '\x1b[30m',
      '1': '\x1b[34m',
      '2': '\x1b[32m',
      '3': '\x1b[36m',
      '4': '\x1b[31m',
      '5': '\x1b[35m',
      '6': '\x1b[33m',
      '7': '\x1b[37m',
      '8': '\x1b[90m',
      '9': '\x1b[94m',
      'a': '\x1b[92m',
      'b': '\x1b[96m',
      'c': '\x1b[91m',
      'd': '\x1b[95m',
      'e': '\x1b[93m',
      'f': '\x1b[97m',
      'g': '\x1b[38;2;221;214;5;m',
      'r': '\x1b[0m'
    };
    return table[a] || ''
  }
  var ret = '';
  if (!txt.length) return '';
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] == '§')
      (txt[i + 1] == void 0) ? ret += '§' : (ret += code2console(txt[i + 1]), i++);
    else
      ret += txt[i]
  }
  return ret
}

function fmtDate(date) {
  var d = new Date(date);
  var Y = date.getFullYear();
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return '' + Y + M + D + h + m + s;
}

function limPrgBar(title, percent) {
  var txt = '', a;
  typeof (percent) !== 'number' && (percent = 0);
  percent > 1 && (percent = 1);
  rl.moveCursor(proc.stdout, 0, -2);
  rl.clearLine(proc.stdout)
  if (title.length > proc.stdout.columns) {
    txt = '…' + title.slice(-proc.stdout.columns + 1)
  } else
    txt = title;
  printF(txt);
  txt = '§9[§b';
  for (a = 0; a < (proc.stdout.columns - 10); a++) {
    if ((a / (proc.stdout.columns - 10)) < percent) txt += '=';
    else txt += ' '
  }
  txt += '§9] §1' + (Math.ceil(percent * 1000) / 10).toFixed(1) + '%';
  printF(txt)
}

exports.rgb = rgb,
  exports.fmtDate = fmtDate,
  exports.printF = printF,
  exports.mcFmtCode = mcFmtCode,
  exports.mcFmtLog = mcFmtLog,
  exports.hex2buf = hex2buf,
  exports.limPrgBar = limPrgBar;
