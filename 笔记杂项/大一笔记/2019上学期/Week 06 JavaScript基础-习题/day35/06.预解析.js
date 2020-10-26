// 6.下列代码控制台打印出的值是多少？写出执行过程
function test() {
    let x = 31;
    if (true) {
        let x = 71;
        console.log(x) // ?
    }
    console.log(x) // ? 
}
test();


//过程
// 1、声明函数test
// 2、调用函数test()
// 3、进入函数test内部，执行以下步骤
// 3.1 声明变量 x
// 3.2 进入if判断true是否是true执行
// 3.2.1 声明变量 x 
// 3.2.2 给变量x赋值为71
// 3.2.3 输出变量x，即输出71
// 3.3 执行console.log(x)输出31   杠精：为什么不是输出的是71呢？(核心思想let生成了块级作用域)因为使用的let x=31是在代码块函数test里面的，let x=71是在代码块if里面的，不同代码块之中的变量无法相互调用（因为是用了let）所以第八行的console.log就输出的是71
