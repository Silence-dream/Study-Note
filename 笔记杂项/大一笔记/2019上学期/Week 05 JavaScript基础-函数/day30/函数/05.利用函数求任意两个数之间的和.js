// 05.利用函数求任意两个数之间的和
function getSum (start,end)//声明一个函数
{
    var sum=0;//声明变量来存和
    for(var i=start;i<=end;i++)//求start
    {
        sum+=i;//累加和
    }
    console.log(`${start}到${end}的和等于:${sum}`);
}
getSum(1,50);//调用函数
