// 找到1000到2000之间能被35整除的数字

for(var i=1000;i<=2000;i++)
{
    if(i%35==0)
    {
        break;
    }
}
console.log(i);