// 1.用函数实现任意数组从小到大的排序，不允许使用sort 

//定义函数冒泡排序

function getMinAndMax (arr)
{
    //外循环体
    for(var i=0;i<arr.length-1;i++)
    {
        //内循环体
        for(var j=0;j<arr.length-i-1;j++)
        {
            //判断前一个数是否大于后一个数
            if(arr[j]>arr[j+1])
            {
                //交换位置
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    //返回值
    return arr;
}
//定义变量存储返回值
let result=getMinAndMax([100,25,36,85,9,1]);
//打印
console.log(result);