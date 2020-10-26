// 4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;
var num1 = 123;
var num2 = 456;
var num3;
num3 = num2;
num2=num1;
num1=num3;
console.log(`num1等于`,num1,`\nnum2等于`,num2);