function getSum(num1,num2)
{
    var sum=0;
    sum=num1+num2;
    return num1,num2;// return只能返回一个值
    console.log("666");//return后面的代码不会被执行
}
var result=getSum(10,20);
console.log(result)
