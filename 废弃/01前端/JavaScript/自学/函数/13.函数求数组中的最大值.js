// 13.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]

//声明一个函数
function getMax (arr)
{
    //假设一个值是最大的
    var max=arr[0];
    //遍历数组,寻找最大的值
    for(var i=0;i<arr.length;i++)
    {
        if(max>arr[i]);//判断假设的值是否是最大的,//如果是最大的就赋值
        {
            max=arr[i];
        }
    }
    //返回值
    return max;
}
//定义变量保存返回的值
var result=getMax([18, 45, 0, 58, 32,59]);
//输出结果
console.log(result)