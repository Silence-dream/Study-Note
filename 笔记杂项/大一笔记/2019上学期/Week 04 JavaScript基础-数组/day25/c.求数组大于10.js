// 将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。

var arr=[2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var brr=[];//定义新数组存大于10的数
for(var i=0;i<arr.length;i++)
{
    if(arr[i]>=10)//找出大于等于10的元素
    {
        brr[i]=arr[i];//存入新的数组
    }
}
brr = brr.filter(function(e){return e}); //删除所有空值(“”，null，undefined和0)
console.log(brr);