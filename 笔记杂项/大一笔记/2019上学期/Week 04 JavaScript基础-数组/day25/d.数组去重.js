// 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。

var arr=[2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var brr=[];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        delete arr[i];//删除等于0的元素
    }
    else
    {
        brr[i]=arr[i];
    }
}
brr = brr.filter(function(a){return a}); //删除所有空值(“”，null，undefined和0)
console.log(brr);