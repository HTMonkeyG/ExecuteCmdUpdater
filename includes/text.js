var log = {
  confirmOp: '§3若存档中存在新版execute可能产生不正常结果.\n本操作将直接在存档源文件进行, 建议创建好备份后再操作, 是否确认[y/N]',
  exit: '\n§f已退出.§r',
  foundDetect: '§e[WARNING] 在坐标(%0, %1, %2)的命令块发现detect子命令: %3, 未转换.',
  foundEncFile: '§4找到已加密文件, 无法执行读取操作.\n请前往https://github.com/HTMonkeyG/XOR-MC-Archive-Decrypt/releases 获取解密器后操作§r',
  foundNewExe: '§e[WARNING] 在坐标(%0, %1, %2)的命令块发现疑似新版execute子命令: %3, 未转换.',
  foundSyntaxErr: '§c[ERROR] 在坐标(%0, %1, %2)的命令块发现语法错误: %3, 不予转换.',
  missing: '§4缺失: %0',
  scanning: '§2正在扫描...',
  targetInvalid: '§4目标不存在或不是文件夹.',
  test: '§2已确认目标, 正在检测完整性...',
  testFail: '§4完整性测试未通过, 请检查后再试.',
  testSucc: '§2目标文件夹完整.',
  totalCb: '§2转换完成, 共发现%0个命令块, 成功转换%1个命令块, 共%2个命令块产生错误或警告.',
  welcome: '§3请输入存档目录'
};

module.exports = log;