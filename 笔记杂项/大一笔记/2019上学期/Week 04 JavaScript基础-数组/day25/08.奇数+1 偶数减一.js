// 8.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容

var a=[1, 3, 5, 8, 10, 11, 16];
var a_long=a.length;
for(var i=0;i<a_long;i++)
{
    if(a[i]%2==0)
    {
        a[i]-=1;
    }
    else
    {
        a[i]+=1;
    }
}
console.log(a);