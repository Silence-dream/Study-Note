// 4、利用JavaScript完成如下功能：如果今天是星期五，那么1000天后是星期几

var a=5;
var b=1000%7;//求余下几天
// console.log(b)
var c=b+a-7;//余下的天数加a-7就等于星期几了
console.log("星期"+c);