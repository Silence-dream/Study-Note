// [5,19,23,6,14,8]的平均值与和


var arr=new Array(5,19,23,6,14,8);
var long=arr.length;

var sum=0;
var sum_P=0;

for(var i=0;i<long;i++)
{
    sum+=arr[i];
}
sum_P=sum/long;
console.log(`和是${sum}`);
console.log(`平均值是${sum_P}`);
// console.log(typeof arr[1])