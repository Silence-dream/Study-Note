// 4.下列代码控制台打印出的值是多少？写出执行过程
var foo = function () {
    console.log(2)
}
function foo() {
    console.log(1)
}
foo();   // ?


/* 拆解
    function foo() {
    console.log(1)
}
var foo
foo = function () {
    console.log(2)
}
foo();   // ? */

//过程。根据js预解析的概念，变量声明和函数声明会被提升到js页面的最上面，但是同名函数和同名变量优先执行函数
// 1、声明函数foo
// 2、声明变量foo
// 3、给变量foo赋值
// 4、调用函数foo()
// 5、进入函数foo()内部，执行以下操作
// 5.1 执行console.log(1) 
// 6、接下来执行同名变量
// 6.1 console.log(2)
// 6.2 即输出2
