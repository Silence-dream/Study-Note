// 3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
var arr=[11,22,33,44,55];
var long=arr.length;
for(var i=0;i<long;i++)
{
    if(arr[i]%2==0)
    {
        console.log(arr[i]);
    }
}