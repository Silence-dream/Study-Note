var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7,1,1,2,2], arr2 = [];

// 分析：先定义一个空数组[]
// 循环遍历数组
for(var i=0;i<arr.length;i++)
{
    //判断空数组中有没有遍历的那个数
    if(arr2.indexOf(arr[i])==-1)
    {
        //如果没有就把遍历的那个数添加到空数组中。
        arr2.push(arr[i]);
    }
}
console.log(arr2)