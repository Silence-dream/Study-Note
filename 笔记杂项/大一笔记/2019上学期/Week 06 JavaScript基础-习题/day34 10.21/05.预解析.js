// 5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
// var a = 25;
// function f1() {
//     var a = b = c = 9;
//     console.log(a);    //?  9
//     console.log(b);    // ?  9
//     console.log(c);    // ? 9
// }
// f1();
// console.log(a);    //?    25
// console.log(b);     // ?   9
// console.log(c);     // ？9


// 过程
var a;
function f1() {
    var a;
    a = 9;
    b = c = 9;//全局变量
    console.log(a);    //?  9
    console.log(b);    // ?  9
    console.log(c);    // ? 9
}
a = 25;//赋值
f1();//调用
console.log(a);    //?    25 //为什么a不等于9因为a=9的在函数function里面算作局部变量，所以应该用a=25
console.log(b);     // ?   9
console.log(c);     // ？9