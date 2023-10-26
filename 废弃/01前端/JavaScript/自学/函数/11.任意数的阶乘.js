// 写一个函数，求任意一个数的阶乘

function getSum(num) {
    //定义一个变量存和
    var sum = 1;
    // var sum1=0//打开这个就是求1到n的阶乘和   记得把return返回值改成sum1
    //循环递增
    for (var i = 1; i <= num; i++) {
        sum *= i;
        
    }
    return sum;
}
//用变量存储返回值
var result=getSum(3);
//输出
console.log(result)