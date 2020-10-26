// 9.下列代码控制台打印出的值是多少？
(function f(num) {
    function num() { };
    console.log(num); // ？
    var num = 10
    console.log(num); // ？
}(100))

//过程
//这是一个自调用函数
// 1、把实参100赋值给形参num
// 2、声明num
// 3、声明函数num()
// 4、输出函数num  因为输出的是num， num是一个函数，所以输出函数num
// 5、把10赋值给num
// 6、输出num，因为num被赋值为10了所以输出10

