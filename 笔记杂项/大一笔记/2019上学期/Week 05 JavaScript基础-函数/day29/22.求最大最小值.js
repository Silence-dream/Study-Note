// 22. 求数组中的最大值和最小值, var arr =  [11, 32,55, 47,79,23]


var arr = [11, 32, 55, 47, 79, 23];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : null;//设max是最大的值进行循环比较
    arr[i] < min ? mix = arr[i] : null;//设min是最大的值进行循环比较
}
console.log(max);
console.log(min);