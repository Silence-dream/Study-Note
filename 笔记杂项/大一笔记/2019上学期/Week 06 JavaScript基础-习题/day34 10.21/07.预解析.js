// 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {
    console.log(b);  //?
    var s = b();
    console.log(s)  // ?
}
a(c);
function c() { return 123 }

//过程
function a(b) {//b=c
    var s;
    console.log(b);  // 因为b=c 所以输出函数c
    s = b();//调用函数b并赋值给s,因为b=函数c所以调用的c函数,再因为c函数返回123 所以s等于123
    console.log(s)  // 123
}
a(c);
function c() { return 123 }
