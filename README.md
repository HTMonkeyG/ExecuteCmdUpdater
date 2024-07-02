# Execute Command Updater
&emsp;&emsp;一个遍历存档内命令块并逐个更新execute指令的小工具，适用于1.18-地图升级至1.19+.
## 功能  
+ 遍历地图内所有命令块并更新替换execute.
  + 报告在execute指令部分存在的语法错误.
  + 识别并报告疑似的新版execute.
  + 由于blockStates的缘故，**不会**更新包含detect子命令的指令.
+ 遍历已保存的结构中所有命令块并且更新替换.
## 使用方式
1. 下载Releases中最新版的exe文件并打开，或者clone仓库到本地。
2. 执行```npm i```
3. 使用node执行main.js
4. 根据提示操作. 中间会有多次确认，输入y或n后回车即可.
## 注意事项
+ 输入路径时，请输入level.dat所在的文件夹的绝对路径.
+ 本软件会直接在给定地图文件夹的源文件中进行操作，建议创建备份后再操作，以免造成可能的存档损坏. 不建议连续对同一存档运行多次更新.
+ 对于网易的加密存档，请使用[解密器](https://github.com/HTMonkeyG/XOR-MC-Archive-Decrypt)解密后再使用本工具更新.
## 致谢
&emsp;&emsp;感谢@Oxygen_Lemon提供的初始想法及测试样本.
