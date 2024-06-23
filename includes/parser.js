const Tag = {
  ID: 0,
  NEQ: 1,
  EQ: 2,
  NUM: 3,
  STRING: 4,
  RELATIVE: 5,
  SEL: 6,
  EOF: 0xFFFF
};

var subCmdList = ["align", "anchored", "as", "at", "facing", "in", "on", "positioned", "rotated", "summon", "if", "unless", "block", "blocks", "entity", "score"];

class Token {
  constructor(t) { this.tag = t; }
  toString() { return this.tag }
  static EOF = new Token(Tag.EOF)
}

class Numeric extends Token {
  constructor(v, f) { super(Tag.NUM); this.value = v; this.float = !!f }
  toString() {
    if (this.float && this.isInteger())
      return this.value.toFixed(1);
    else return this.value.toString();
  }
  isInteger() { return Number.isInteger(this.value) }
}

class String extends Token {
  constructor(v) { super(Tag.STRING); this.value = v }
  toString() { return '"' + this.value + '"' }
}

class Relative extends Token {
  constructor(v, t) { super(Tag.RELATIVE); this.value = v; this.sym = t }
  toString() { return this.sym + (this.value || "") }
}

class Selector extends Token {
  constructor(v) { super(Tag.SEL); this.value = v }
  toString() { return "@" + this.value }
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
    whitespace = false;
    lineTerm = false;
    // 跳过空白
    for (; canRead(); readch()) {
      if (peek === ' ' || peek === "\t") { whitespace = true; continue; }
      else if (peek === "\n") { lineTerm = true, line += 1; }
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
    // 相对量
    if (peek == "~" || peek == "^") return readRel();
    // 选择器
    if (peek == "@") return new Selector((readch(), readStringUnquoted()));
    // 无引号字符串
    if (isUnquotedStringStart()) return new Word(readStringUnquoted(), Tag.ID);
    // 数字
    if (/\d/.test(peek)) return readNumber();
    // 字符串
    if (peek == '"') return new String(readStringUntil('"', true));
    // 到头
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
        else if (isUnquotedStringStart()) return new Word("-" + readStringUnquoted(), Tag.ID);
        else return new Token("-");
      case ".":
        readch();
        if (/\d/.test(peek)) return readDecimal();
        if (isch(".")) return new Token("..");/*{
          readch();
          if (isUnquotedStringStart()) return new Word(".." + readStringUnquoted(), Tag.ID);
          else if (peek == ".") {
            readch();
            if (isUnquotedStringStart()) return new Word("...." + readStringUnquoted(), Tag.ID);
          }
          else fallback();
          return new Token("..");
        }
        else if (isUnquotedStringStart()) return new Word("." + readStringUnquoted(), Tag.ID);*/
        else return new Token(".");
    }
  }


  function readDots() {

  }

  function readNumber(n) {
    var v = 0;
    do {
      v = 10 * v + Number(peek);
      readch()
    } while (/\d/.test(peek))
    if (peek != ".") return new Numeric(v * (n ? -1 : 1), false);
    if (readch(".")) return fallback(), new Numeric(v * (n ? -1 : 1), false);
    var x = v, d = 10;
    for (; canRead();) {
      if (!/\d/.test(peek)) break;
      x += Number(peek) / d;
      d *= 10;
      readch();
    }
    return new Numeric(x * (n ? -1 : 1), true)
  }

  function readDecimal(n) {
    var x = 0, d = 10;
    for (; canRead();) {
      if (!/\d/.test(peek)) break;
      x += Number(peek) / d;
      d *= 10;
      readch();
    }
    return new Numeric(x * (n ? -1 : 1), true)
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
        result += peek;
        escaped = false;
      } else if (peek == "\\" && allowescape)
        result += "\\", escaped = true;
      else if (peek == terminator)
        return readch(), result;
      else
        result += peek;
    }
  }

  function isUnquotedStringStart() { return !/[+=~!\[\]{}^'"|`,\\/;*&%$#@<>.\ 0-9]/.test(peek)/*/[a-zA-Z_\u4e00-\u9fa5§]/.test(peek)*/ }

  function readStringUnquoted() {
    var result = "";
    if (!isUnquotedStringStart()) return "";
    result += peek;
    while (canRead()) {
      readch();
      //if (!/[a-zA-Z0-9\u4e00-\u9fa5\.§_\-\:]/.test(peek)) break;
      if (/[+=~!\[\]{}^'"|`,\\/;*&%$#@<>\ ]/.test(peek)) break;
      else if (peek == ".") {
        readch();
        if (/\d/.test(peek)) {
          fallback(); break;
        }
        fallback();
      }
      result += peek;
    }
    return result
  }

  var str = ""
    , ptr = 0
    , peek = " "
    , line = 0
    , lineTerm = false
    , whitespace = false;

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
function updateExecute(str) {
  var look, ret = 'execute';
  Lexer.init(str);

  function move() { look = Lexer.scan() }
  function match(t) { if (look.tag != t) errorUnexp(t); }
  function errorUnexp(e) {
    if (e) throw new Error(`位置 ${Lexer.getPtr()}: 意料之外的符号 "${look}"; 期望为符号 "${e}"`);
    else throw new Error(`位置 ${Lexer.getPtr()}: 意料之外的符号 "${look}"`)
  }

  // 一个选择器参数
  function selectorParam() {
    var ret = '';
    move();
    match(Tag.ID);
    ret += look.lexeme;
    move();
    if (look.tag != "=" && look.tag != "=!")
      errorUnexp();
    ret += look.tag;
    move();
    if (look.tag == "{" || look.tag == "[") {
      var terminator = look.tag == "{" ? "}" : "]";
      ret += look.tag;
      ret += selectorParam();
      while (look.tag == ",") ret += "," + selectorParam();
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
    var ret = '';
    // 选择器变量
    if (look.tag == Tag.ID || look.tag == Tag.STRING) {
      var t = look; move(); return t;
    }
    match(Tag.SEL);
    ret += look.toString();
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
    var ret = '', x = coordinate(), block;
    ret += x;
    match(Tag.ID);
    block = look.lexeme;
    ret += " " + block;
    move();
    // **浮点数也可通过验证**
    match(Tag.NUM);
    if (look.value != -1)
      throw new Error(`位置 ${Lexer.getPtr()}: 无法转换的detect子命令 "${block} ${look.value}"`);
    move();
    return ret
  }

  // 一层execute
  function execute() {
    var s = selector(), ret = '', x;

    // 疑似新版execute
    if (subCmdList.reduce(function (a, e) {
      if (e == s) return a + 1
      return a
    }, 0))
      throw new Error(`位置 ${Lexer.getPtr()}: 疑似新版execute子命令: "${s}"`);

    ret += ' as ' + s + ' at @s';
    x = coordinate();
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