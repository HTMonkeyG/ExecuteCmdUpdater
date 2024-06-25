const UpdateExecute = require("./parser.js");

// 替换单个execute
function updateNoError() {
  console.log("- Update normal /execute:");
  console.log(UpdateExecute("execute @a[name=6666] ~~1~ say a"));
}
updateNoError();

// 替换execute嵌套
function updateRecursive() {
  console.log("- Update recursive /execute:");
  console.log(UpdateExecute("execute @a[name=6666] ~~~ execute @s[x=0,y=0,z=0,r=10] ~~~ say a"));
}
updateRecursive();

// 替换execute detect
function updateDetect() {
  console.log("- Update /execute detect:");
  console.log(UpdateExecute("execute @a[name=6666] ~~~ detect ~~-1~ grass -1 say a"));
}
updateDetect();

// 替换包含id的execute detect
function updateDetectWithId() {
  console.log("- Update /execute detect with id:");
  try {
    console.log(UpdateExecute("execute @a[name=6666] ~~~ detect ~~-1~ grass 10 say a"));
  } catch (e) {
    console.log(e.message)
  }
}
updateDetectWithId();

// 替换没有分隔符的execute
function updateDetectWithoutSeparator() {
  console.log("- Update /execute detect without param separator:");
  console.log(UpdateExecute("execute@a[name=6666]~~~say a"));
}
updateDetectWithoutSeparator();

// 替换开头斜杠
function updateStartWithSlash() {
  console.log("- Update /execute start with '/':");
  console.log(UpdateExecute("/execute @a[name=6666] ~~~ say a"));
}
updateStartWithSlash();

// 替换目标指令开头斜杠
function updateTargetCommandWithSlash() {
  console.log("- Update target command start with '/':");
  console.log(UpdateExecute("/execute @a[name=6666] ~~~ /say a"));
}
updateTargetCommandWithSlash();

// 替换新版execute
function updateNewExecute() {
  console.log("- Update new execute:");
  try {
    console.log(UpdateExecute("execute as @a[name=114514] ~~~ run say a"));
  } catch (e) {
    console.log(e.message)
  }
}
updateNewExecute();