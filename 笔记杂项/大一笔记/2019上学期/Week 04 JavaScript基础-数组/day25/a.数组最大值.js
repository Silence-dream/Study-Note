// 求数组[5,19,23,6,14,8]中的最大值


var arr = [5,19,23,6,14,8];
var max = arr[0];

for(var i = 1; i < arr.length; i++) {
   var cur = arr[i];
   cur > max ? max = cur : null
}

console.log('最大值'+max); 


// 获取最小值：

var arr = [5,19,23,6,14,8];
var min = arr[0];

for(var i = 1; i < arr.length; i++) {
  var cur = arr[i];
  cur < min ? min = cur : null
}
console.log('最小值'+min)  // 6
