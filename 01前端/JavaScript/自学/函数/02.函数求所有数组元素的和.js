// 2. 写一个函数,求数组的所有元素的和,var arr = [18, 45, 333,5,6,1,5]

function getSum(arr)//声明一个函数,让形参arr来接收数组
{
    //定义一个变量来存储和
    var sum = 0;
    //遍历数组把每一个值都打印出来
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]//累加求和
    }
    return `${arr}中所有元素的和是：${sum}`;//返回sun的值
}
// 用变量接收函数的返回值，然后向实参传入数值
var result=getSum([18, 45, 333, 5, 6, 1, 5])
//打印
console.log(result);