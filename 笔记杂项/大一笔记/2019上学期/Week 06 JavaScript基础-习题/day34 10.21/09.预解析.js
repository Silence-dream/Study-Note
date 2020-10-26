// 9.下列代码控制台打印出的值是多少？把执行过程写出来
// function a() {
//     console.log('a');
//     c();
// }
// function b() {
//     console.log('b');
//     a();
// }
// function c() {
//     console.log('c');
// }
// a(); // ？
// b();  // ？
// c();   // ？

//过程

function a() {
    console.log('a');//2然后第一步输出a    //8 输出a
    c();  // 3调用函数c                   //9 调用函数c
}
function b() {
    console.log('b'); //6 输出b
    a(); // 7 调用函数a 
}
function c() {
    console.log('c');//4然后就第二步输出c  //10 输出 c
}
//综上流程输出      a c
//                 b a c
//                 c 
a(); // a c    //1先调用函数a
b();  // b a c     //5 调用函数b 
c();   //c    //9 调用函数c