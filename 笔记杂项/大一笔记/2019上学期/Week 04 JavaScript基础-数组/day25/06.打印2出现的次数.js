// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。


var arr = [1,1,2,2,3,4,5,4,3,2,1];
var arr_long=arr.length;

var count_2=0;//累计2出现的次数

//循环体
var i=0;
for(i;i<arr_long;i++)
{
    if(arr[i]%10==2)
    {
        count_2++;
    }
}
console.log(count_2);