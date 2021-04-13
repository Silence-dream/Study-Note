// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]


// 声明一个函数实现任意数组的翻转
function getReversal (arr)
{
    //遍历数组
    for(var i=0;i<arr.length/2;i++)//为什么除以2呢，请抠手指头计算一下要交换几次
    {
        //定义临时变量交换数组中的元素
        var temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    // 返回数值
    return arr;
}
//定义变量保存返回值
var result=getReversal(["h","e","l","l","o"]);
//打印
console.log(result);