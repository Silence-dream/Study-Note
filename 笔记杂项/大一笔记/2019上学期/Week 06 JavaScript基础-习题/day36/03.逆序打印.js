// 定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。

//定义一个函数实现任意4位数的翻转
function getReverse(num) {
    //分别求出各个位数的值
    let gw = num % 10;
    let sw = parseInt(num % 100 / 10);
    let bw = parseInt(num % 1000 / 100);
    let qw = parseInt(num / 1000);
    //返回逆序
    return [gw, sw, bw, qw]
}
//接收返回值并赋值给变量
let result = getReverse(1234);
//打印
console.log(result)
