var arr=new Array(5,19,23,6,14,8);
//method 方法 
//property 属性

// 用法1.拷贝
var brr=arr.slice()
console.log(brr)

// 用法2.切割数组

var crr=arr.slice(0,4);//切割包括0的索引不包括4索引的数组
console.log(crr);
