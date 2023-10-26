// 12.写一个函数, 用户输入任意3个数的大小，返回最大值

function getMax(num1,num2,num3) { //定义函数求最大值
    if(num1>num2&&num1>num3)
    {
        return `${num1}大`;
    }
    if(num2>num1&&num2>num3)
    {
        return `${num2}大`;
    }
    if(num3>num1&&num3>num2)
    {
        return `${num3}大`;
    }
 }
//  定义变量储存返回值
var result = getMax(1,66,3)
console.log(result);