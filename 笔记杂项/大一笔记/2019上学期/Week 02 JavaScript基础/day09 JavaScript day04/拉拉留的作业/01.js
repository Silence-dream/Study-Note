// 1.在控制台打印输出目前所学的所有数据类型的类型
// 2.数据类型的相互转换:
 Number(true)  // ?
 Number(false) // ?
 Number(" ") // ?
 Number( [] ) //?
 Number(['1','2']) //?
 Number([1]) // ?
 Number({})   //?
 Number({a:1}) // ?
 Number("3.14") //?
 Number(null) // ?
 Number(undefined) //?
 Number("12456aaaa") //?
 String({}) // ?
 String([]) // ?
 String(123) //?
 String(false) //?
 String(null) //?
 String(undefined) //?
 undefined.toString() //?
 null.toString()  //?
 Boolean(0) // ?
 Boolean("") //?
 Boolean(undefined) //?
 Boolean(null) //?
 Boolean(NaN) //?
 Boolean({}) // ?
 Boolean([])  // ?
3. 将下列结果打印出来下面的题的结果
var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // ?
console.log(num1 + +num2)  // ?
console.log(num1 + !! num2)  // ?
console.log(num1+Number(num2))  // ?
4. 求值
var a = 1; var b = ++a + ++a;   console.log(b);  //  ？
var a = 1; var b = a++ + ++a;   console.log(b);  // ？
var a = 1; var b = a++ + a++;   console.log(b);  // ？
var a = 1; var b = ++a + a++;   console.log(b);  // ？
5.输出下面的结果:
console.log ( NaN == NaN );//？
console.log( NaN === NaN ); //？
console.log ( undefined == null );//？
console.log ( undefined === null );//？
console.log ( 1 + "true" ); // ？
console.log ( 1 + true );  //？
console.log ( "abc" > "b" ); //？
console.log ( "abc" > "aad" ); //？
console.log ( [] == [] ); //？
console.log ( [] === [] ); //？
console.log ( [] == ! [] ); // ？
console.log ( [] == 0 );//？
console.log ( ! [] == 0 );//？

6.输出下面的结果:
var a = (10 * 3 - 4 / 2 + 1) % 2,
　  b = 3;
b %= a + 3;
console.log(a++); // ？
console.log(--b); // ？
7.输出下面的结果:
 console.log(3+2||0&&true)  // ？
 console.log(undefined&&5) // ？
 console.log(1&&2&&3) //？
 console.log(1&&0&&3) //？
 console.log(2+3>1&&4|| 4&&5%6) // ？
 console.log(5+10/2&&4>3||7-4)  //？
8. 输出下面的结果:
var num1 = 20;
var num2 = 30
console.log(num1%num2);  // ?
num1+= num2
console.log(num1);  // ?
num1 = num1- num2;  // 将这段代码改写
console.log(num1);
9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
   利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。

