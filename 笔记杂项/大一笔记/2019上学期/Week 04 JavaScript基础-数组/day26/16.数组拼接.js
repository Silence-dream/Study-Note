// 16.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五

var arr=['张三','李四','王五'];
var sum='';//用来存拼接
for(var i=0;i<arr.length;i++)//循环历遍
{
    if(i==1){
        sum+=arr[i]+"|";
    }
    else
    {
        sum+=arr[i];
    }
    
}
console.log(sum)