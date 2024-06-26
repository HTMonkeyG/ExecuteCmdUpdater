const blockStates = require('./blockState.js');

function updateBlockState(block, data) {
  var block_ = block.toString()
    , data_ = '0b' + data.toString(2)
    , state, ret = [];
  // 检测是否存在该id
  if (!blockStates[block_] && !blockStates['minecraft:' + block_]) throw new Error(`无效的方块类型: ${block}`);
  // 格式化
  blockStates[block_] || (block_ = 'minecraft:' + block_);
  // 数据值合理性
  if (!Number.isInteger(data) || data < 0 || data > 15) throw new Error(`无效的方块数据值: ${data}`);
  state = blockStates[block_][data_];

  for (var key of Object.keys(state))
    ret.push(`"${key}"=${typeof state[key] == 'string' ? '"' + state[key] + '"' : state[key]}`);

  return block + ' [' + ret.join(',') + ']'
}

module.exports = updateBlockState;