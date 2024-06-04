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
class CommandSyntaxException extends Error {
  static CONTEXT_AMOUNT = 10;
  static BUILT_IN_EXCEPTIONS = null;

  constructor(type, message) {
    super(message.getString(), null);
    this.type = type;
    this.message = message;
    this.input = typeof input == 'undefined' ? null : input;
    this.cursor = typeof input == 'undefined' ? -1 : cursor;
  }

  getMessage() {
    var message = this.message.getString()
      , context = this.getContext();
    if (context != null) {
      message += " at position " + this.cursor + ": " + context;
    }
    return message;
  }

  getRawMessage() { return this.message }
  getType() { return this.type }
  getInput() { return this.input }
  getCursor() { return this.cursor }

  getContext() {
    if (this.input == null || this.cursor < 0) {
      return null;
    }
    var builder = ""
      , cursor = Math.min(this.input.length(), this.cursor);

    if (cursor > CONTEXT_AMOUNT) {
      builder += "...";
    }

    builder += input.substring(Math.max(0, cursor - CONTEXT_AMOUNT), cursor);
    builder += "<--[HERE]";

    return builder
  }
}

class SimpleCommandExceptionType {
  constructor(message) { this.message = message }
  create() { return new CommandSyntaxException(this, this.message) }
  createWithContext(reader) { return new CommandSyntaxException(this, this.message, reader.getString(), reader.getCursor()) }
  toString() { return message }
}

class DynamicCommandExceptionType {
  constructor(func) { this.function = func }
  create(arg) { return new CommandSyntaxException(this, this.function.apply(null, arg)) }
  createWithContext(reader, arg) {
    return new CommandSyntaxException(this, this.function.apply(null, arg), reader.getString(), reader.getCursor())
  }
}

class Dynamic2CommandExceptionType{
  constructor(func) { this.function = func }
  create(a, b) { return new CommandSyntaxException(this, this.function.apply(null, [a, b])) }
  createWithContext(reader, a, b) {
    return new CommandSyntaxException(this, this.function.apply(null, [a, b]), reader.getString(), reader.getCursor())
  }
}

class Dynamic3CommandExceptionType {
  constructor(func) { this.function = func }
  create(a, b, c) { return new CommandSyntaxException(this, this.function.apply(null, [a, b, c])) }
  createWithContext(reader, a, b, c) {
    return new CommandSyntaxException(this, this.function.apply(null, [a, b, c]), reader.getString(), reader.getCursor())
  }
}

class Dynamic4CommandExceptionType {
  constructor(func) { this.function = func }
  create(a, b, c, d) { return new CommandSyntaxException(this, this.function.apply(null, [a, b, c, d])) }
  createWithContext(reader, a, b, c, d) {
    return new CommandSyntaxException(this, this.function.apply(null, [a, b, c, d]), reader.getString(), reader.getCursor())
  }
}

class DynamicNCommandExceptionType {
  constructor(func) { this.function = func }
  create(...args) { return new CommandSyntaxException(this, this.function.apply(null, args)) }
  createWithContext(reader, ...args) {
    return new CommandSyntaxException(this, this.function.apply(null, args), reader.getString(), reader.getCursor())
  }
}

class LiteralMessage {
  constructor(message) { this.message = message }
  getString() { return this.message }
  toString() { return this.message }
}

class BuiltInExceptions {
  static DOUBLE_TOO_SMALL = new Dynamic2CommandExceptionType((found, min) => new LiteralMessage("Double must not be less than " + min + ", found " + found));
  static DOUBLE_TOO_BIG = new Dynamic2CommandExceptionType((found, max) => new LiteralMessage("Double must not be more than " + max + ", found " + found));

  static FLOAT_TOO_SMALL = new Dynamic2CommandExceptionType((found, min) => new LiteralMessage("Float must not be less than " + min + ", found " + found));
  static FLOAT_TOO_BIG = new Dynamic2CommandExceptionType((found, max) => new LiteralMessage("Float must not be more than " + max + ", found " + found));

  static INTEGER_TOO_SMALL = new Dynamic2CommandExceptionType((found, min) => new LiteralMessage("Integer must not be less than " + min + ", found " + found));
  static INTEGER_TOO_BIG = new Dynamic2CommandExceptionType((found, max) => new LiteralMessage("Integer must not be more than " + max + ", found " + found));

  static LONG_TOO_SMALL = new Dynamic2CommandExceptionType((found, min) => new LiteralMessage("Long must not be less than " + min + ", found " + found));
  static LONG_TOO_BIG = new Dynamic2CommandExceptionType((found, max) => new LiteralMessage("Long must not be more than " + max + ", found " + found));

  static LITERAL_INCORRECT = new DynamicCommandExceptionType(expected => new LiteralMessage("Expected literal " + expected));

  static READER_EXPECTED_START_OF_QUOTE = new SimpleCommandExceptionType(new LiteralMessage("Expected quote to start a string"));
  static READER_EXPECTED_END_OF_QUOTE = new SimpleCommandExceptionType(new LiteralMessage("Unclosed quoted string"));
  static READER_INVALID_ESCAPE = new DynamicCommandExceptionType(character => new LiteralMessage("Invalid escape sequence '" + character + "' in quoted string"));
  static READER_INVALID_BOOL = new DynamicCommandExceptionType(value => new LiteralMessage("Invalid bool, expected true or false but found '" + value + "'"));
  static READER_INVALID_INT = new DynamicCommandExceptionType(value => new LiteralMessage("Invalid integer '" + value + "'"));
  static READER_EXPECTED_INT = new SimpleCommandExceptionType(new LiteralMessage("Expected integer"));
  static READER_INVALID_LONG = new DynamicCommandExceptionType(value => new LiteralMessage("Invalid long '" + value + "'"));
  static READER_EXPECTED_LONG = new SimpleCommandExceptionType((new LiteralMessage("Expected long")));
  static READER_INVALID_DOUBLE = new DynamicCommandExceptionType(value => new LiteralMessage("Invalid double '" + value + "'"));
  static READER_EXPECTED_DOUBLE = new SimpleCommandExceptionType(new LiteralMessage("Expected double"));
  static READER_INVALID_FLOAT = new DynamicCommandExceptionType(value => new LiteralMessage("Invalid float '" + value + "'"));
  static READER_EXPECTED_FLOAT = new SimpleCommandExceptionType(new LiteralMessage("Expected float"));
  static READER_EXPECTED_BOOL = new SimpleCommandExceptionType(new LiteralMessage("Expected bool"));
  static READER_EXPECTED_SYMBOL = new DynamicCommandExceptionType(symbol => new LiteralMessage("Expected '" + symbol + "'"));

  static DISPATCHER_UNKNOWN_COMMAND = new SimpleCommandExceptionType(new LiteralMessage("Unknown command"));
  static DISPATCHER_UNKNOWN_ARGUMENT = new SimpleCommandExceptionType(new LiteralMessage("Incorrect argument for command"));
  static DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR = new SimpleCommandExceptionType(new LiteralMessage("Expected whitespace to end one argument, but found trailing data"));
  static DISPATCHER_PARSE_EXCEPTION = new DynamicCommandExceptionType(message => new LiteralMessage("Could not parse command: " + message));

  doubleTooLow() { return BuiltInExceptions.DOUBLE_TOO_SMALL }
  doubleTooHigh() { return BuiltInExceptions.DOUBLE_TOO_BIG }
  floatTooLow() { return BuiltInExceptions.FLOAT_TOO_SMALL }
  floatTooHigh() { return BuiltInExceptions.FLOAT_TOO_BIG }
  integerTooLow() { return BuiltInExceptions.INTEGER_TOO_SMALL }
  integerTooHigh() { return BuiltInExceptions.INTEGER_TOO_BIG }
  longTooLow() { return BuiltInExceptions.LONG_TOO_SMALL }
  longTooHigh() { return BuiltInExceptions.LONG_TOO_BIG }
  literalIncorrect() { return BuiltInExceptions.LITERAL_INCORRECT }
  readerExpectedStartOfQuote() { return BuiltInExceptions.READER_EXPECTED_START_OF_QUOTE }
  readerExpectedEndOfQuote() { return BuiltInExceptions.READER_EXPECTED_END_OF_QUOTE }
  readerInvalidEscape() { return BuiltInExceptions.READER_INVALID_ESCAPE }
  readerInvalidBool() { return BuiltInExceptions.READER_INVALID_BOOL }
  readerInvalidInt() { return BuiltInExceptions.READER_INVALID_INT }
  readerExpectedInt() { return BuiltInExceptions.READER_EXPECTED_INT }
  readerInvalidLong() { return BuiltInExceptions.READER_INVALID_LONG }
  readerExpectedLong() { return BuiltInExceptions.READER_EXPECTED_LONG }
  readerInvalidDouble() { return BuiltInExceptions.READER_INVALID_DOUBLE }
  readerExpectedDouble() { return BuiltInExceptions.READER_EXPECTED_DOUBLE }
  readerInvalidFloat() { return BuiltInExceptions.READER_INVALID_FLOAT }
  readerExpectedFloat() { return BuiltInExceptions.READER_EXPECTED_FLOAT }
  readerExpectedBool() { return BuiltInExceptions.READER_EXPECTED_BOOL }
  readerExpectedSymbol() { return BuiltInExceptions.READER_EXPECTED_SYMBOL; }
  dispatcherUnknownCommand() { return BuiltInExceptions.DISPATCHER_UNKNOWN_COMMAND; }
  dispatcherUnknownArgument() { return BuiltInExceptions.DISPATCHER_UNKNOWN_ARGUMENT; }
  dispatcherExpectedArgumentSeparator() { return BuiltInExceptions.DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR; }
  dispatcherParseException() { return BuiltInExceptions.DISPATCHER_PARSE_EXCEPTION; }
}

CommandSyntaxException.BUILT_IN_EXCEPTIONS = new BuiltInExceptions();

exports.BuiltInExceptions = BuiltInExceptions;
exports.CommandSyntaxException = CommandSyntaxException;