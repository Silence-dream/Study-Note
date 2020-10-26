// 06.函数形参实参个数匹配

function getSum (num1,num2)
{
    console.log(num1+num2);
}
//1.如果实参的个数和形参的个数一致则正常输出结果
getSum(1,2);
//2.如果实参的个数大于形参的个数,会去到形参的个数
getSum(1,2,3);
//3.如果实参的个数小于形参的个数,多余的形参会变成undefined
//形参可以看做是不用声明的变量 num2是一个变量但是没有接受值，结果就是undefinde
getSum(1);
