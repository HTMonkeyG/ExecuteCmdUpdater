// Remove all entities, chunks not in overworld, and structures in mystructure:
// namespace.

const { LevelDB } = require('leveldb-zlib');
const fs = require("fs");
const NBT = require('parsenbt-js');

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
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

function getStructureMeta(buf) {
  // The length of "structuretemplate_" prefix.
  if (buf.length < 18)
    return void 0;

  var name = buf.toString();
  if (name.substring(0, 18) !== "structuretemplate_")
    return void 0;

  var r = name.substring(18).split(":");
  if (r.length > 2)
    return void 0;

  return {
    namespace: r[0],
    name: r[1]
  }
}

function getPlayerMeta(buf) {
  // The length of "player_" prefix.
  if (buf.length < 7)
    return void 0;

  var name = buf.toString();
  if (name.substring(0, 7) !== "player_")
    return void 0;

  return {
    id: name.substring(7)
  }
}

function getActorMeta(buf) {
  // The length of "actorprefix" prefix.
  if (buf.length < 11)
    return void 0;

  var name = buf.toString();
  if (name.substring(0, 11) !== "actorprefix")
    return void 0;

  return {
    id: buf.subarray(11)
  }
}

async function test() {
  var pathToDb = "C:\\Users\\32543\\AppData\\Roaming\\MinecraftPC_Netease_PB\\minecraftWorlds\\-taF1DCAB+4=_Dec\\db";
  const db = new LevelDB(pathToDb, { createIfMissing: false });
  db.open();

  for (let a of db) {
    console.log(a[0], a[1].byteLength);
  }

  db.close();
}

test();