/*
MIT License

Copyright (c) Microsoft Corporation. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/* Adapted from Brigadier by HTMonkeyG */

var CommandSyntaxException = require("./Exceptions.js").CommandSyntaxException;

const SYNTAX_ESCAPE = '\\'
  , SYNTAX_DOUBLE_QUOTE = '"'
  , SYNTAX_SINGLE_QUOTE = '\''
  , ARGUMENT_SEPARATOR = ' '
  , USAGE_OPTIONAL_OPEN = "["
  , USAGE_OPTIONAL_CLOSE = "]"
  , USAGE_REQUIRED_OPEN = "("
  , USAGE_REQUIRED_CLOSE = ")"
  , USAGE_OR = "|"

class StringReader {
  constructor(str) {
    this.string = str;
    this.cursor = 0;
  }

  static from(reader) {
    var result = new StringReader(reader.getString());
    result.setCursor(reader.getCursor())
    return result
  }

  getString() { return this.string }
  getCursor() { return this.cursor }
  getRemainingLength() { return string.length - cursor }
  getTotalLength() { return string.length }
  getRead() { return string.substring(0, cursor) }
  getRemaining() { return string.substring(cursor) }

  setCursor(cursor) { this.cursor = cursor }

  canRead(length) { return typeof length == 'number' ? this.cursor + length <= this.string.length : this.cursor + 1 <= this.string.length }

  peek(offset) { return typeof offset == 'number' ? this.string[this.cursor + offset] : this.string[this.cursor] }
  read() { return this.string[this.cursor++] }
  skip() { this.cursor++ }

  isAllowedNumber(c) { return /[0-9.\-]/.test(c) }
  isAllowedInUnquotedString(c) { return /[0-9A-Za-z_\-.+]/.test(c) }
  isWhitespace(c) { return /[\t\n\u000B\f\r\u001C-\u0020\u1680\u180E\u2000-\u2006\u2008-\u200B\u205F\u3000\uFEFF]/.test(c) }
  isQuotedStringStart(c) { return c == SYNTAX_DOUBLE_QUOTE /*|| c == SYNTAX_SINGLE_QUOTE*/ }
  skipWhitespace() { while (this.canRead() && this.isWhitespace(this.peek())) this.skip() }

  readInt() {
    var start = this.cursor;
    while (this.canRead() && this.isAllowedNumber(this.peek()))
      this.skip();
    var number = this.string.substring(start, this.cursor);
    if (!number.length) {
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedInt().createWithContext(this);
    } else {
      var number = Number(number);
      if (Number.isNaN(number) || !Number.isFinite(number) || !Number.isInteger(number)) {
        this.cursor = start;
        throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerInvalidInt().createWithContext(this, number);
      } else return number
    }
  }

  readFloat() {
    var start = this.cursor;
    while (this.canRead() && this.isAllowedNumber(this.peek()))
      this.skip();
    var number = this.string.substring(start, this.cursor);
    if (!number.length) {
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedFloat().createWithContext(this);
    } else {
      var number = Number(number);
      if (Number.isNaN(number) || !Number.isFinite(number)) {
        this.cursor = start;
        throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerInvalidFloat().createWithContext(this, number);
      } else return number
    }
  }

  readUnquotedString() {
    var start = this.cursor;
    while (this.canRead() && this.isAllowedInUnquotedString(this.peek()))
      this.skip();
    return this.string.substring(start, this.cursor);
  }

  readQuotedString() {
    if (!this.canRead())
      return "";

    var next = this.peek();
    if (!this.isQuotedStringStart(next)) {
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedStartOfQuote().createWithContext(this);
    }
    this.skip();
    return readStringUntil(next);
  }

  readStringUntil(terminator) {
    var result = ""
      , escaped = false;
    while (this.canRead()) {
      var c = this.read();
      if (escaped) {
        if (c == terminator || c == SYNTAX_ESCAPE) {
          result += c;
          escaped = false;
        } else {
          this.setCursor(this.getCursor() - 1);
          throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerInvalidEscape().createWithContext(this, c);
        }
      } else if (c == SYNTAX_ESCAPE) {
        escaped = true;
      } else if (c == terminator) {
        return result
      } else {
        result += c;
      }
    }
    throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedEndOfQuote().createWithContext(this);
  }

  readString() {
    if (!this.canRead())
      return "";
    var next = this.peek();
    if (this.isQuotedStringStart(next)) {
      this.skip();
      return this.readStringUntil(next);
    }
    return this.readUnquotedString();
  }

  readBoolean() {
    var start = this.cursor
      , value = readString();
    if (!value.length) {
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedBool().createWithContext(this);
    }

    if (value == "true") {
      return true;
    } else if (value == "false") {
      return false;
    } else {
      this.cursor = start;
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerInvalidBool().createWithContext(this, value);
    }
  }

  expect(c) {
    if (!this.canRead() || this.peek() != c) {
      throw CommandSyntaxException.BUILT_IN_EXCEPTIONS.readerExpectedSymbol().createWithContext(this, c);
    }
    this.skip();
  }
}

module.exports = StringReader;