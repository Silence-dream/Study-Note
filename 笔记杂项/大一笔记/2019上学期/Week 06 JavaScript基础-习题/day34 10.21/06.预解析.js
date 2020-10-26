// 6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来

// (function (num) {
//     console.log(num); // ？  
//     var num = 10;
//     console.log(num);  // ? 
// }(100))

//过程
(function (num) {//num=100
    var num;//定义了num，又因为num=100所以
    console.log(num); // 输出100  
    num = 10;
    console.log(num);  // 10
}(100))//把实参给形参num
