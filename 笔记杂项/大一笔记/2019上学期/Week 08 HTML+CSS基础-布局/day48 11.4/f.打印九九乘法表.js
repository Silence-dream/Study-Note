// 5.打印九九乘法表


for (let j = 1; j <= 9; j++) {//外层控制行
    // 定义空字符串
    let sum = ''
    for (let i = 1; i <= j; i++) {//内层控制列
        sum += i + "*" + j + "=" + j * i + " ";
    }
    console.log(sum)
}
