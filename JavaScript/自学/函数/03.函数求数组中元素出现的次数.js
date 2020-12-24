// 3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数


function getTime(arr)//声明函数让形参接收实参的值
{
    //3.定义累计变量
    var addUp=0;
    //1.遍历数组
    for(var i=0;i<arr.length;i++)
    {
        //2.判断数组中是否有3，如果有就累计一次
        if(arr[i]==3)
        {
            addUp++
        }
    }
    return `3出现的次数是${addUp}`;
}
// 使用变量保存函数的返回值，顺便给实参赋值
var  result=getTime([3,4,3,5,7,9]);
//打印
console.log(result);
