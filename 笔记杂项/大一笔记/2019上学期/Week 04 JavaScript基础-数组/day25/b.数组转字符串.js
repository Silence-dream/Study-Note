// 将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割

var arr=['red', 'green', 'blue', 'pink'];
var n=String(arr)
var l="|";
// console.log(typeof n);
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]+"|");
}
