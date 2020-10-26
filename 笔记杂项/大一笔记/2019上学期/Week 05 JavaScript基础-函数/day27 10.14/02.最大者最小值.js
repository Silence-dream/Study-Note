// 2.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?

var arr = [10, 5, 34, 59, 98];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    cur > max ? max = cur : null;
    cur < min ? min = cur : null;
}
console.log(`最大值是:${max}`)
//console.log(`最小值是:${min}`)//最小值开关

var j = 0;
while (j < arr.length) {
    var a = arr[j];//定义变量来存数据用来比较大小
    a < min ? min = a : null;
    j++;
}
console.log('最小值是:'+min);


