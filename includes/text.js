var log = {
  confirmOp: '§3若存档中存在新版execute可能产生不正常结果.\n本操作将直接在存档源文件进行, 建议创建好备份后再操作, 是否确认[y/N]',
  ctrlCExit: '§3本次执行结束, 按Ctrl+C退出或按Enter继续操作.',
  debugScanStru: '§2[INFO] 扫描结构%0',
  enterPath: '§3请输入存档目录',
  exit: '\n§f已退出.§r',
  foundDetect: '§e[WARNING] 在坐标(%0, %1, %2)的命令块发现detect子命令: %3, 未转换.',
  foundEncFile: '§4找到已加密文件, 无法执行读取操作.\n请前往https://github.com/HTMonkeyG/XOR-MC-Archive-Decrypt/releases 获取解密器后操作§r',
  foundNewExe: '§e[WARNING] 在坐标(%0, %1, %2)的命令块发现疑似新版execute子命令: %3, 未转换.',
  foundErr: '§c[ERROR] 在坐标(%0, %1, %2)的命令块发生转换错误: %3.',
  foundErrStru: '§c[ERROR] 在结构%0中相对结构原点坐标(%1, %2, %3)的命令块发生转换错误: %4.',
  logDebugScanStru: '[INFO] 扫描结构%0\n',
  logFoundErr: '[ERROR] 在坐标(%0, %1, %2)的命令块发生转换错误: %3.\n',
  logFoundErrStru: '[ERROR] 在结构%0中相对结构原点坐标(%1, %2, %3)的命令块发生转换错误: %4.\n',
  logSavePath: '日志已保存至%0',
  missing: '§4缺失: %0',
  scanning: '§2正在扫描...',
  targetInvalid: '§4目标不存在或不是文件夹.',
  test: '§2已确认目标, 正在检测完整性...',
  testFail: '§4完整性测试未通过, 请检查后再试.',
  testSucc: '§2目标文件夹完整.',
  totalCb: '§2转换完成, 共发现%0个命令块, 成功转换%1个世界命令块, 失败%2个世界命令块; 成功转换%3个结构命令块, 失败%4个结构命令块.',
  updateStructure: '§3是否更新已保存的结构内命令块[y/N]',
  welcome: '§3欢迎使用ExecuteCmdUpdater v1.2.3'
};

module.exports = log;