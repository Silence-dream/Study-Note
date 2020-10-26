// 将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放

var arr=['top', 'right', 'bottom', 'left', 'center'];
var brr=[];//存放反的arr
var a=0;
for(var i=arr.length-1;i>=0;i--)//倒着历遍
{
    // console.log(arr[i]);//测试是否倒着打印成功
    brr[a]=arr[i];
    a++
}
console.log(brr)

