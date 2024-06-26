const UpdateExecute = require("./parser.js");

// 替换单个execute
function updateSingle() {
  console.log("- Update normal /execute:");
  console.log(UpdateExecute("execute @a ~~~ say a"));
}
updateSingle();

// 替换有选择器参数的单个execute
function updateSingleWithSelectorParam() {
  console.log("- Update normal /execute with selector param:");
  console.log(UpdateExecute("execute @a[name=666] ~~~ say a"));
}
updateSingleWithSelectorParam();

// 替换有混合选择器参数的单个execute
function updateSingleWithMixedSelectorParam() {
  console.log("- Update normal /execute with mixed selector param:");
  console.log(UpdateExecute("execute @a[name=\"666\",type=tnt,r=4] ~~~ say a"));
}
updateSingleWithMixedSelectorParam();

// 替换有递归选择器参数的单个execute
function updateSingleWithMixedSelectorParam() {
  console.log("- Update normal /execute with recursive selector param:");
  console.log(UpdateExecute("execute @a[hasitem={item=tnt},scores={\"bkstage\"=0..,uid=114514}] ~~~ say a"));
  // 正常情况下不可能出现的情况
  console.log(UpdateExecute("execute @a[hasitem={item={array1=[\"direction\"=7,direction=\"x\"],array2=[\"direction\"=7,\"direction\"=7]}}] ~~~ say a"));
}
updateSingleWithMixedSelectorParam();

// 替换混合坐标execute
function updateSingleWithMixedCoord() {
  console.log("- Update normal /execute with mixed coord:");
  // 整数 小数 相对整数
  console.log(UpdateExecute("execute @a 0 0.0 ~7 say a"));
  // 相对小数 相对小数简写 负整数
  console.log(UpdateExecute("execute @a ~6.1 ~1. -7 say a"));
  // 相对负整数 负小数简写 相对负小数简写
  console.log(UpdateExecute("execute @a ~-1 -1. ~-1. say a"));
}
updateSingleWithMixedCoord();

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