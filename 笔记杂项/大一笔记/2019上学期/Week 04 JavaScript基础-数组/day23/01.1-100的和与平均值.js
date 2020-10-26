// 需求: 1-100之间所有数的总和 与 平均值(while实现)

// 分析：1.需要一个循环来重复执行
//       2.需要一个变量来存和
//       3.需要一个变量来存平均值

var i=1;
var sum=0;//存和
var sum_ping=0;//存平均值
while (i<=100) {
    sum+=i;
    sum_ping=sum/100;
    i++;
}
console.log("1到100的和是:"+sum);
console.log("1到100的和的平均值是:"+sum_ping);