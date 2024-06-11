var StringReader = require("./StringReader.js");

// 更新execute的函数
function updateExecute(str, callback) {
  var look, ret = 'execute';
  Lexer.init(str);

  var reader = new StringReader(str);

  typeof callback != 'function' && (callback = () => { });

  function move() { look = Lexer.scan() }
  function match(t) { if (look.tag != t) errorUnexp(t); }
  function errorUnexp(e) {
    if (e) throw new Error(`Position ${Lexer.getPtr()}: Unexpected "${look}"; Expected: "${e}"`)
    else throw new Error(`Position ${Lexer.getPtr()}: Unexpected "${look}"`)
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
    if(reader.peek() != "@") return reader.readString();
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
    match(Tag.NUM);
    if (look.value != -1)
      callback(1, Lexer.getPtr(), block, look.value);
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
      callback(2, Lexer.getPtr(), s);

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

  reader.skipWhitespace();
  look = reader.peek();
  if (look == "/") reader.skip();
  look = reader.readUnquotedString();
  if (look.lexeme != "execute")
    return reader.getString();

  reader.skipWhitespace();
  ret += execute();
  return ret
}

//module.exports = updateExecute;