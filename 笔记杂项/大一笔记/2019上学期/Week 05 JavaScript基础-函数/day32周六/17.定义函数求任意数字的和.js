// 17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21


// 定义函数
function getSum()
{
    //定义sum存和
    var sum=0;
    //定义循环求和
    for(var i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    // 返回数值
    return sum;
}
//定义变量存返回值
var result=getSum(1,2,3,20,30,50,90)
//打印输出
console.log(result);