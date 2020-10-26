// 08.利用函数求任意两个数的最大值
function getMax(num1,num2)
{
    if(num1>num2)
    {
        return `${num1}是最大值`;
    }
    else
    {
        return `${num2}是最大值`;
    }
}
console.log(getMax(51,50));
