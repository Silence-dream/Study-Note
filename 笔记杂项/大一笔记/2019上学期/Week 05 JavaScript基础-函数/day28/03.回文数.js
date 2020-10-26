// 3、定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）

var a=54321;

// 分别求出第一位到第五位
var g1=a%10;
var g2=parseInt(a%100/10);
var g3=parseInt(a%1000/100);
var g4=parseInt(a%10000/1000);
var g5=parseInt(a/10000);
/* //测试代码
console.log(g1);
console.log(g2);
console.log(g3);
console.log(g4);
console.log(g5);

*/

if(g1==g5&&g2==g4)
{
    console.log(a+"是回文数");
}
else{
    console.log(a+'不是回文数');
}