// 21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?


var arr = [10, 5, 34, 59, 98];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {//设max是最大的值进行循环比较
        max = arr[i];
    }
}
console.log('最大值'+max);



var j=0;
while(j<arr.length)
{
    if(arr[j]<min)//设min是最大的值进行循环比较
    {
        min=arr[j];
    }
    j++;
}
console.log('最小值'+min);