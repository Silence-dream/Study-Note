// 10.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];


var oldArr=[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5];
var oldArr_long=oldArr.length;
var newArr=[];
for(var i=0;i<oldArr_long;i++)
{
    if(oldArr[i]!=0)//将不为0的数存入新的数组中，但是没有被存进去的占了位置变成undefined了,打印的时候变成了empty item
    {
        newArr[i]=oldArr[i];
    }
    if(newArr[i]==undefined);
    {
        delete newArr[i]
    }
}
newArr = newArr.filter(function(e){return e}); //删除所有空值(“”，null，undefined和0)
console.log(newArr);