// 2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)


//声明一个函数
function getPrimeNumber(primeNumber) {
    //循环体
    let a = true;  // 定义开关判断
    for (var i = 2; i < primeNumber; i++) {
        if (num % i == 0) {
            a = false;
        }
    }
    return a;
}
//定义变量存储返回值
let result = getPrimeNumber(1)
//打印
console.log(result);