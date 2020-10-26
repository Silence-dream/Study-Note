/* for：把一段代码重复执行一定的次数
语法:
for(定义初始值 ; 定义循环的条件; 自增或者自减;)
{
    重复执行的代码块
} 
*/

//实例、循环输出50个hello world
// var hello= "hello world"
// for(var i=0;i<50;i++)
// {
//     console.log(hello)
// }


//练习1.打印出1到100之间的整数
// for (var a=100;a>0;a-- )
// {
//     console.log(a);
// }
//练习2.打印计算机1到100之间所有整数的和，最后打印出结果
// var a=0;
// for (var b=1;b<=100;b++)
// {
//     a=a+b;
// }
// console.log(a)

//练习3。打印计算机1到100之间所有奇数的和，最后打印出结果
var a=0;
for(var b=1;b<=100;b++)
{
    if(b%2 !=0)
    {
        a+=b;
    }
}
console.log(a);



