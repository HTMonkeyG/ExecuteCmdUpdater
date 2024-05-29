var NBT = function () {
  if (!ArrayBuffer)
    throw new Error("Missing ArrayBuffer");
  if (!DataView)
    throw new Error("Missing DataView");
  if (!Uint8Array)
    throw new Error("Missing Uint8Array");
  var typeR = { 0: "null", 1: "i8", 2: "i16", 3: "i32", 4: "i64", 5: "f32", 6: "f64", 7: "a8", 8: "str", 9: "list", 10: "comp", 11: "a32", 12: "a64" }
    , typeW = { "null": 0, "i8": 1, "i16": 2, "i32": 3, "i64": 4, "f32": 5, "f64": 6, "a8": 7, "str": 8, "list": 9, "comp": 10, "a32": 11, "a64": 12 };
  /**
   * Read NBT data in buffer
   * @param {ArrayBuffer} buf - Input buffer
   * @param {Boolean} isLE - True if read as little endian
   * @returns
   */
  function Reader(buf, isLE) {
    function g(b, c) { return a["get" + b](offset, (offset += c, isBedrock)) }
    function fromUtf8(a) {
      var b, c = [];
      for (b = 0; b < a.length; b++)
        0 === (128 & a[b]) ? c.push(127 & a[b]) : b + 1 < a.length && 192 === (224 & a[b]) && 128 === (192 & a[b + 1]) ? c.push((31 & a[b]) << 6 | 63 & a[b + 1]) : b + 2 < a.length && 224 === (240 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) ? c.push((15 & a[b]) << 12 | (63 & a[b + 1]) << 6 | 63 & a[b + 2]) : b + 3 < a.length && 240 === (248 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) && 128 === (192 & a[b + 3]) && c.push((7 & a[b]) << 18 | (63 & a[b + 1]) << 12 | (63 & a[b + 2]) << 6 | 63 & a[b + 3]);
      return String.fromCharCode.apply(null, c)
    }
    var offset = 0, a = new DataView(buf), r = new Uint8Array(buf), isBedrock = !1, func = {};
    r[1] == 0 && r[2] == 0 && r[3] == 0 && (offset = 8, isBedrock = !0);
    !!isLE && (isBedrock = isLE);
    func[1] = g.bind(func, "Int8", 1);
    func[2] = g.bind(func, "Int16", 2);
    func["Uint16"] = g.bind(func, "Uint16", 2);
    func[3] = g.bind(func, "Int32", 4);
    func[4] = function () { var a = this[3](), b = this[3](); return isBedrock ? { low: a, high: b } : { low: ab, high: a } }.bind(func);
    func[5] = g.bind(func, "Float32", 4);
    func[6] = g.bind(func, "Float64", 8);
    func[7] = function () {
      var a = this[3]()
        , b = [];
      for (; a > 0; a--)
        b.push(this[1]());
      return b
    }.bind(func);
    func[8] = function () {
      var l = this["Uint16"](), b;
      b = fromUtf8(r.slice(offset, offset += l));
      return b
    }.bind(func);
    func[9] = function () {
      var b = [], c, d;
      d = this[1](); c = this[3]();
      b.push(typeR[d]);
      if (this[d])
        for (; c > 0; c--)
          b.push(this[d]());
      else if (d == 0);
      else
        throw new Error(`Invalid tag ID at Byte${offset - 1} : ${r[offset - 1]}`);
      return b;
    }.bind(func);
    func[10] = function () {
      var b = {}, c, d;
      while ((c = r[offset]) > 0x00)
        if (this[c]) {
          offset++;
          d = this[8]();
          b[typeR[c] + ">" + d] = this[c]();
        } else
          throw new Error('Invalid tag ID at Byte' + offset + ' : ' + r[offset]);
      return offset++, b;
    }.bind(func);
    func[11] = function () {
      var a = this[3](),
        b = [];
      for (; a > 0; a--)
        b.push(this[3]());
      return b
    }.bind(func);
    func[12] = function () {
      var a = this[3](),
        b = [];
      for (; a > 0; a--)
        b.push(this[4]());
      return b
    }.bind(func);
    func["root"] = function () {
      var b = {}, c = r[offset], d;
      if (this[c]) {
        offset++;
        d = this[8]();
        b[typeR[c] + ">" + d] = this[c]();
      } else
        throw new Error('Invalid tag ID at Byte' + offset + ' : ' + r[offset]);
      return b
    }.bind(func);
    
    return func["root"]();
  }

  /**
   * Serialize object of specified structure
   * @param {*} obj - Input object
   * @param {Boolean} isLE - True if write as little endian
   * @returns {ArrayBuffer}
   */
  function Writer(obj, isLE) {
    function g(a, b, c) {
      if (offset + b > abuf.byteLength) {
        var t1 = new ArrayBuffer(offset + b), t2 = new DataView(t1), t3 = new Uint8Array(t1);
        t3.set(port);
        abuf = t1, dtv = t2, port = t3;
      }
      dtv["set" + a](offset, (offset += b, c), isBedrock);
    }
    function toUtf8(a) {
      var b, c, d = [];
      for (b = 0; b < a.length; b++)
        c = a.charCodeAt(b),
          128 > c ? d.push(c) : 2048 > c ? (d.push(192 | c >> 6),
            d.push(128 | 63 & c)) : 65536 > c ? (d.push(224 | c >> 12),
              d.push(128 | c >> 6 & 63),
              d.push(128 | 63 & c)) : (d.push(240 | c >> 18 & 7),
                d.push(128 | c >> 12 & 63),
                d.push(128 | c >> 6 & 63),
                d.push(128 | 63 & c));
      return d
    }
    var c = JSON.parse(JSON.stringify(obj))
      , isBedrock = !!isLE
      , func = {}
      , abuf = new ArrayBuffer(1)
      , dtv = new DataView(abuf)
      , port = new Uint8Array(abuf)
      , offset = 0;
    func[1] = g.bind(func, "Int8", 1);
    func[2] = g.bind(func, "Int16", 2);
    func["Uint16"] = g.bind(func, "Uint16", 2);
    func[3] = g.bind(func, "Int32", 4);
    func[4] = function (o) { isBedrock ? (func[3](0 | o.low || 0), func[3](0 | o.high || 0)) : (func[3](0 | o.high || 0), func[3](0 | o.low || 0)); }.bind(func);
    func[5] = g.bind(func, "Float32", 4);
    func[6] = g.bind(func, "Float64", 8);
    func[7] = function (o) {
      this[3](o.length);
      for (var e of o)
        this[1](e)
    }.bind(func);
    func[8] = function (s) {
      var a = toUtf8(s);
      this["Uint16"](a.length);
      for (var e of a)
        this[1](e)
    }.bind(func);
    func[9] = function (l) {
      var t = typeW[l[0]], m = l.slice(1);
      this[1](t);
      if (t) {
        this[3](m.length);
        for (var e of m)
          this[t](e)
      } else if (t == 0) {
        this[3](0)
      } else throw new Error("Invalid type name: " + t);
    }.bind(func);
    func[10] = function (o) {
      for (var e in o) {
        var f = e.indexOf(">"), g = typeW[e.substring(0, f)];
        if (!g) throw new Error("Invalid type name: " + f[0]);
        this[1](g);
        this[8](e.substring(f + 1));
        this[g](o[e]);
      }
      this[1](0)
    }.bind(func);
    func[11] = function (o) {
      this[3](o.length);
      for (var e of o)
        this[3](e)
    }.bind(func);
    func[12] = function (o) {
      this[3](o.length);
      for (var e of o)
        this[4](e)
    }.bind(func);
    func[10](c);
    return abuf
  }

  /**
   * Read a series of NBT data
   * @param {ArrayBuffer} buf - Input buffer
   * @param {Boolean} isLE - True if read as little endian
   * @returns {Array} Constains all of the NBT root tags
   */
  function ReadSerial(buf, isLE) {
    function g(b, c) { return a["get" + b](offset, (offset += c, isBedrock)) }
    function fromUtf8(a) {
      var b, c = [];
      for (b = 0; b < a.length; b++)
        0 === (128 & a[b]) ? c.push(127 & a[b]) : b + 1 < a.length && 192 === (224 & a[b]) && 128 === (192 & a[b + 1]) ? c.push((31 & a[b]) << 6 | 63 & a[b + 1]) : b + 2 < a.length && 224 === (240 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) ? c.push((15 & a[b]) << 12 | (63 & a[b + 1]) << 6 | 63 & a[b + 2]) : b + 3 < a.length && 240 === (248 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) && 128 === (192 & a[b + 3]) && c.push((7 & a[b]) << 18 | (63 & a[b + 1]) << 12 | (63 & a[b + 2]) << 6 | 63 & a[b + 3]);
      return String.fromCharCode.apply(null, c)
    }
    var offset = 0, a = new DataView(buf), r = new Uint8Array(buf), isBedrock = !1, func = {};
    r[1] == 0 && r[2] == 0 && r[3] == 0 && (offset = 8, isBedrock = !0);
    !!isLE && (isBedrock = isLE);
    func[1] = g.bind(func, "Int8", 1);
    func[2] = g.bind(func, "Int16", 2);
    func["Uint16"] = g.bind(func, "Uint16", 2);
    func[3] = g.bind(func, "Int32", 4);
    func[4] = function () { var a = this[3](), b = this[3](); return isBedrock ? { low: a, high: b } : { low: ab, high: a } }.bind(func);
    func[5] = g.bind(func, "Float32", 4);
    func[6] = g.bind(func, "Float64", 8);
    func[7] = function () {
      var a = this[3]()
        , b = [];
      for (; a > 0; a--)
        b.push(this[1]());
      return b
    }.bind(func);
    func[8] = function () {
      var l = this["Uint16"](), b;
      b = fromUtf8(r.slice(offset, offset += l));
      return b
    }.bind(func);
    func[9] = function () {
      var b = [], c, d;
      d = this[1](); c = this[3]();
      b.push(typeR[d]);
      if (this[d])
        for (; c > 0; c--)
          b.push(this[d]());
      else if (d == 0);
      else
        throw new Error(`Invalid tag ID at Byte${offset - 1} : ${r[offset - 1]}`);
      return b;
    }.bind(func);
    func[10] = function () {
      var b = {}, c, d;
      while ((c = r[offset]) > 0x00)
        if (this[c]) {
          offset++;
          d = this[8]();
          b[typeR[c] + ">" + d] = this[c]();
        } else
          throw new Error('Invalid tag ID at Byte' + offset + ' : ' + r[offset]);
      return offset++, b;
    }.bind(func);
    func[11] = function () {
      var a = this[3](),
        b = [];
      for (; a > 0; a--)
        b.push(this[3]());
      return b
    }.bind(func);
    func[12] = function () {
      var a = this[3](),
        b = [];
      for (; a > 0; a--)
        b.push(this[4]());
      return b
    }.bind(func);
    func["root"] = function () {
      var b = {}, c = r[offset], d;
      if (this[c]) {
        offset++;
        d = this[8]();
        b[typeR[c] + ">" + d] = this[c]();
      } else
        throw new Error('Invalid tag ID at Byte' + offset + ' : ' + r[offset]);
      return b
    }.bind(func);

    var result = [];
    while (func[r[offset]])
      result.push(func["root"]());
    return result
  }
  return {
    Reader: Reader,
    Writer: Writer,
    ReadSerial: ReadSerial
  }
}();

module ? (module.exports = NBT) : (window.NBT = NBT);