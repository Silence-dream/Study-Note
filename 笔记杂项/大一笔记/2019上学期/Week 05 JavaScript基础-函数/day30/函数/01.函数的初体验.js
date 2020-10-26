//这是一个求任意数之间和的函数
function oneAnd100 (num1,num2) {//声明一个叫做oneAnd100的函数
    var sum=0
    for(var i=num1;i<=num2;i++)
    {
        sum+=i;
    }
    console.log(`${num1}到${num2}之间是和是:${sum}`)    
}
oneAnd100(1,100);//调用函数，把num1赋值为1，num2赋值为100
oneAnd100(100,900);//调用函数，把num1赋值为1，num2赋值为100
