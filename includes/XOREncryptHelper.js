/*
  MIT License

  Copyright (c) 2024 HTMonkeyG

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

/**
 * Check magic number
 * @param {Buffer} buf - file buffer
 * @returns {Boolean} true if file is encrypted
 */
function checkFileIsEncrypt(buf) {
  if (!buf.length || buf.length < 4) return !1;
  if (buf.readUInt32LE && (buf.readUInt32BE(0) == 0x801D3001 || buf.readUInt32BE(0) == 0x901D3001)) return !0;
  else return !1
}

/**
 * Encrypt buffer
 * @param {Buffer} buf - file buffer
 * @param {Buffer|Array} key - encrypt key, ascii '88329851' by default
 * @returns {Buffer} encrypted buffer
 */
function encryptFile(buf, key) {
  if (!key || !key.length)
    key = Buffer.from('88329851');
  else key = Buffer.from(key);

  var ret = Buffer.from(buf)
    , magicNum = Buffer.from([0x80, 0x1D, 0x30, 0x01]);

  for (var i = 0; i < ret.length; i++)
    ret[i] ^= key[i % 8];

  ret = Buffer.concat([magicNum, ret]);

  return ret;
}

/**
 * Decrypt buffer
 * @param {Buffer} buf - file buffer
 * @param {Buffer|Array} key - decrypt key, ascii '88329851' by default
 * @returns {Buffer} decrypted buffer
 */
function decryptFile(buf, key) {
  if (!key || !key.length)
    key = Buffer.from('88329851');
  else key = Buffer.from(key);

  var ret = Buffer.from(buf);

  if (!checkFileIsEncrypt(buf)) return !1;

  ret = ret.subarray(4);

  for (var i = 0; i < ret.length; i++)
    ret[i] ^= key[i % key.length];

  return ret;
}

exports.checkFileIsEncrypt = checkFileIsEncrypt;
exports.decryptFile = decryptFile;
exports.encryptFile = encryptFile;
