// 8.下列代码控制台打印出的值是多少？写出执行过程
function n() {
    if (2 > 1) {
        arr = 10;
        brr = 10;
        let arr;
        var brr;
        console.log(arr); // ？
        console.log(brr); // ？
    }
}
n();

//过程

// 1、声明函数n
// 2、调用函数n()
// 3、进入if判断
// 4、给arr赋值为10
// 5、声明变量brr
// 6、给brr赋值为100
// 7、用let声明变量arr  (报错)，因为根据let的规则，只能先声明再赋值，且在js预解析的时候let不会被提升。
// 8、报错了就over了