// 14.写一个函数,去掉数组中重复的元素，var arr = [1,5,4,4,7,6,6]


//声明一个函数
function getArr(arr)
{
    //遍历数组寻找重复的值
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<i;j++)
        {
            //判断数组中的元素是否相等
            if(arr[i]==arr[j])
            {
                arr.splice(i,1);//相等就把i下标的元素删掉
            }
        }
    }
    //返回值arr
    return arr;
}
//用变量存储返回值
var result=getArr([1,5,4,4,7,6,6]);
console.log(result);
