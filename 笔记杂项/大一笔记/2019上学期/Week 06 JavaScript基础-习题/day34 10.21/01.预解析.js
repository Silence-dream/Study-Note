// 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
// var a = 25;
// function abc() {
//     alert(a);   // undefined
//     var a = 10;
// }
// abc();
// alert(a)  //25

//过程是
var a;
function abc() {
    var a;
    console.log(a);   //因为声明了变量a没有进行赋值所以输出 undefined
    a = 10;//给a赋值
}
a = 25;
abc();//调用函数abc
console.log(a) //    25