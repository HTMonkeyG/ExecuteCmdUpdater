const Tag = {
  ID: 0,
  NEQ: 1,
  EQ: 2,
  NUM: 3,
  STRING: 4,
  RELATIVE: 5,
  RANGE: 6,
  EOF: 0xFFFF
};

class Token {
  constructor(t) { this.tag = t; }
  toString() { return this.tag }
  static EOF = new Token(Tag.EOF)
}

class Numeric extends Token {
  constructor(v) { super(Tag.NUM); this.value = v }
  toString() { return this.value.toString() }
  isInteger() { return Math.isInteger(this.value) }
}

class String extends Token {
  constructor(v) { super(Tag.STRING); this.value = v }
  toString() { return '"' + this.value + '"' }
}

class Relative extends Token {
  constructor(v, t) { super(Tag.RELATIVE); this.value = v; this.sym = t }
  toString() { return this.sym + (this.value || "") }
}

class Range extends Token {
  constructor(v1, v2) { super(Tag.RANGE); this.value1 = v1; this.value2 = v2 }
  toString() { return (this.value1 || "") + ".." + (this.value2 || "") }
}

class Word extends Token {
  constructor(s, t) { super(t); this.lexeme = s }
  toString() { return this.lexeme }
  static eq = new Word("=", Tag.EQ);
  static ne = new Word("=!", Tag.NEQ);
}

// 词法分析器
var Lexer = (function () {
  function readNext() {
    if (ptr > str.length) throw new Error("String Ends");
    return str[ptr++]
  }
  function canRead() { return ptr <= str.length }
  function readch(c) {
    peek = readNext();
    if (peek != c) return !1;
    peek = " ";
    return !0
  }
  function fallback() { peek = str[--ptr - 1] }
  function isch(c) { if (peek != c) return !1; peek = " "; return !0 }
  function scan() {
    // 跳过空白
    for (; canRead(); readch()) {
      if (peek === ' ' || peek === "\t") continue;
      else if (peek === "\n") line += 1;
      else break;
    }

    if (!canRead()) return Token.EOF;

    switch (peek) {
      case '=':
        if (readch('!')) return new Token("=!");
        else return new Token("=");
      case "+": case "-": case ".":
        return tryReadNumber();
    }
    if (peek == "~" || peek == "^") return readRel();
    if (isUnquotedStringStart()) return new Word(readStringUnquoted(), Tag.ID);
    if (/\d/.test(peek)) return readNumber();
    if (peek == '"') return new String(readStringUntil('"'));
    if (!canRead()) return Token.EOF;
    var t = new Token(peek);
    peek = " ";
    return t
  }

  function tryReadNumber() {
    switch (peek) {
      case "+":
        readch();
        if (/\d/.test(peek)) return readNumber();
        else return new Token("+");
      case "-":
        readch();
        if (/\d/.test(peek)) return readNumber(!0);
        else return new Token("-");
      case ".":
        readch();
        if (/\d/.test(peek)) return readDecimal();
        if (isch(".")) return new Token("..");
        else return new Token(".");
    }
  }

  function readNumber(n) {
    var v = 0;
    do {
      v = 10 * v + Number(peek);
      readch()
    } while (/\d/.test(peek))
    if (peek != ".") return new Numeric(v * (n ? -1 : 1));
    if (readch(".")) return fallback(), new Numeric(v * (n ? -1 : 1));
    var x = v, d = 10;
    for (; canRead();) {
      if (!/\d/.test(peek)) break;
      x += Number(peek) / d;
      d *= 10;
      readch();
    }
    return new Numeric(x * (n ? -1 : 1))
  }

  function readDecimal(n) {
    var x = 0, d = 10;
    for (; canRead();) {
      if (!/\d/.test(peek)) break;
      x += Number(peek) / d;
      d *= 10;
      readch();
    }
    return new Numeric(x * (n ? -1 : 1))
  }

  function readRel() {
    var t = peek;
    readch();
    if (/\.|\+|\-/.test(peek)) return new Relative(tryReadNumber(), t);
    if (/\d/.test(peek)) return new Relative(readNumber(), t);
    return new Relative(0, t);
  }

  function readStringUntil(terminator, allowescape) {
    var result = ""
      , escaped = false;
    while (canRead()) {
      readch();
      if (escaped) {
        if (peek == "n")
          result += "\n";
        else
          result += peek;
        escaped = false;
      } else if (peek == "\\" && allowescape)
        escaped = true;
      else if (peek == terminator)
        return readch(), result;
      else
        result += peek;
    }
  }

  function isUnquotedStringStart() { return /[a-zA-Z_\u4e00-\u9fa5]/.test(peek) }

  function readStringUnquoted() {
    var result = "";
    if (!isUnquotedStringStart()) return "";
    result += peek;
    while (canRead()) {
      readch();
      if (!/[a-zA-Z0-9_\u4e00-\u9fa5]/.test(peek)) break;
      result += peek;
    }
    return result
  }

  var str = ""
    , ptr = 0
    , peek = " "
    , line = 0;

  return {
    scan: scan,
    init: function (a) { str = a, ptr = 0, peek = " ", line = 0 },
    abort: function () {
      var r = str.slice(Math.max(ptr - 1, 0));
      ptr = str.length + 1;
      peek = " ";
      return r
    },
    getPtr: function () { return ptr }
  }
})();

class Coordinate3D {
  constructor(x, y, z) { this.x = x; this.y = y; this.z = z; }
  hasRel() { return this.x.tag == Tag.RELATIVE || this.z.tag == Tag.RELATIVE || this.z.tag == Tag.RELATIVE }
  hasAbs() { return this.x.tag == Tag.NUM || this.z.tag == Tag.NUM || this.z.tag == Tag.NUM }
  isOrigin() {
    if (this.hasAbs()) return !1;
    return !this.x.value && !this.y.value && !this.z.value
  }
  toString() {
    var ret = '';
    ret += this.x;
    this.y.tag == Tag.NUM ? (ret += ' ' + this.y) : (ret += this.y);
    this.z.tag == Tag.NUM ? (ret += ' ' + this.z) : (ret += this.z);
    return ret
  }
}

// 更新execute的函数
function updateExecute(str, callback) {
  var look, ret = 'execute';
  Lexer.init(str);

  typeof callback != 'function' && (callback = () => { });

  function move() { look = Lexer.scan() }
  function match(t) { if (look.tag != t) errorUnexp(); }
  function errorUnexp() { throw new Error(`Position ${Lexer.getPtr()}: Unexpected ${look}`) }

  // 一个选择器参数
  function selectorParam() {
    var ret = '';
    move();
    match(Tag.ID);
    ret += look.lexeme;
    move();
    match("=");
    ret += "="
    move();
    if (look.tag == "{" || look.tag == "[") {
      var terminator = look.tag == "{" ? "}" : "]";
      ret += look.tag;
      ret += selectorParam();
      match(terminator);
      ret += terminator;
    } else if (look.tag == Tag.NUM) {
      ret += look;
      move();
      if (look.tag == "..") {
        ret += "..";
        move();
        if (look.tag == Tag.NUM)
          ret += look, move();
        return ret
      } else return ret
    } else if (look.tag == "..") {
      ret += "..";
      move();
      if (look.tag == Tag.NUM) ret += look;
    } else ret += look;
    move();
    return ret
  }

  function selector() {
    var ret = '@';
    // 选择器变量
    if (look.tag == Tag.ID || look.tag == Tag.STRING) return look;
    match('@');
    move();
    match(Tag.ID);
    ret += look.lexeme;
    move();
    if (look.tag != "[") return ret

    // 选择器参数
    ret += "[" + selectorParam();
    while (look.tag == ",") ret += "," + selectorParam();
    match("]");
    move();
    return ret + "]"
  }

  // 三维坐标
  function coordinate() {
    var ret = [];
    if (look.tag == Tag.NUM || look.tag == Tag.RELATIVE) ret.push(look);
    else errorUnexp();
    move();
    if (look.tag == Tag.NUM || look.tag == Tag.RELATIVE) ret.push(look);
    else errorUnexp();
    move();
    if (look.tag == Tag.NUM || look.tag == Tag.RELATIVE) ret.push(look);
    else errorUnexp();
    move();
    return new Coordinate3D(ret[0], ret[1], ret[2]);
  }

  // detect子命令
  function detectSub() {
    var ret = '', x = coordinate();
    ret += x;
    match(Tag.ID);
    ret += " " + look;
    move();
    match(Tag.NUM);
    if (look.value != -1)
      callback(1, Lexer.getPtr(), look.value);
    move();
    return ret
  }

  // 一层execute
  function execute() {
    var s = selector()
      , x = coordinate()
      , ret = '';
    ret += ' at ' + s;
    if (!x.isOrigin()) ret += ' positioned ' + x;
    if (look.tag == Tag.ID && look.lexeme == "detect") {
      move();
      ret += " if block " + detectSub();
    }
    match(Tag.ID);
    if (look.lexeme == "execute") {
      move();
      ret += execute();
      return ret
    }
    else return ret + " run " + look.lexeme + Lexer.abort();
  }

  move();
  if (look.tag == "/") move();
  if (look.tag != Tag.ID || look.lexeme != "execute") return look.lexeme + Lexer.abort();

  move();
  ret += execute();
  return ret
}

module.exports = updateExecute;