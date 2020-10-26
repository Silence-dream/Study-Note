// 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
// var n = 0;
// function a() {
//     var n = 10;  // == 10
//     function b() {
//         n++; // 11
//         console.log(n);//alert改成console.log方便一下用js调试，谢谢 // 11
//     }
//     b();// 11
//     return b; // 11
// }
// var c = a();   //? 12
// c(); //? 12
// console.log(n); // ?     alert改成console.log方便一下用js调试，谢谢 0


//过程
var n;
var c;
function a() {
    var n;
    n = 10;
    function b() {
        n++;
        console.log(n);// n=10+1         alert改成console.log方便一下用js调试，谢谢
    }

    b();//调用函数b
    return b;//返回函数b
}
n = 0;//给n赋值为0
c = a();//?  11    调用函数a，相当于调用函数a里面的return b 赋值给c
c(); //  12    因为32行调用了一次已经把n的值累加了1所以执行到33行  调用函数c等于调用函数a里面的b 就输出12   
console.log(n); // 输出n=0     alert改成console.log方便一下用js调试，谢谢