// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

var arr1 = [1,7,9,11,8,15,10,19];
var arr2 =[2,1,6,8,10];
var arr3=[].concat(arr1,arr2)//合并数组
// console.log(arr3);

//去重
for(var i=0;i<arr3.length;i++)
{
    for(var j=0;j<i;j++)
    {
        if(arr3[j]==arr3[i])//循环判断比较
        {
            arr3.splice(i,1);//发现一样的就删除
        }
    }
}
// console.log('去重后的结果是'+arr3);//验证是否去重


//冒泡排序
for(var g=0;g<arr3.length-1;g++)
{
    for(var h=0;h<arr3.length-1-g;h++)
    {
        if(arr3[h]>arr3[h+1])//循环判断比较
        {
            //交换数值
            var temp=arr3[h];
            arr3[h]=arr3[h+1];
            arr3[h+1]=temp;
        }
    }
}
console.log(arr3)