var num=[1,2,3,4,5,10];
console.log(num.length)
console.log(num)
var i=num.indexOf(5)//求5的小标是多少，哎嘿
console.log(`num数组的索引是:${i}`)


//求num数组的最大索引是多少


var a=num.length;//计算数组长度，从1开始的
var b=a-1;//长度-1就是索引的最大值,索引从0开始
console.log('索引的最大长度是:'+b)


// 循环打印出每一个数组

var arr=new Array(1,2,3,4,5,6,7);
// 1.获取数组长度
var arr_length=arr.length;
// console.log(arr)
for(var i=0;i<arr_length;i++)//遍历arr中的每一个元素
{
    console.log("arr数组里面有"+arr[i]);
}

//给数组arr添加新的元素

arr[7]=8;
console.log(arr)

