// 用isNaN判断输入的是否是数字
var num=12;
var string01="1221";
var longg=isNaN(num)
if(longg==false){
    console.log("这是一个数字")
}
else if(longg==ture){
    console.log("不是数字");
    
}
console.log(isNaN(num))
console.log(isNaN(string01))
console.log(typeof(string01));