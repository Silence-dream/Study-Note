// 求数组[5,2,99,101,67,77]的最大值
//求任意数组最大值的函数
function getArrMax(arr) {//让arr接收一个数组，形参获得实参给的值之后就会声明实参传递的值
    var max = arr[0]//假设它是最大值进行比较
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)//如果arr[i]大于就进行赋值
        {
            max = arr[i]
        }
    }
    return `最大值是${max}`;
}
// console.log(getArrMax([5, 2, 99, 101, 67, 77]));
var getArrMax=getArrMax([5, 2, 99, 101, 67, 77]);
console.log(getArrMax);
