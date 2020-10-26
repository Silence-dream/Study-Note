// 1. 打印1 - 100中前三个是17的整数倍的数。

// 定义循环1-100之间
// 定义求前几个的累加和
let a = 0;
for (let i = 1; i <= 100; i++) {
    // 定义累加量
    let conut = 0;
    if (i % 17 == 0) {
        conut += 1;
    }
    if (conut == 1) {
        console.log(i)
        a++
    }
    if (a == 3) {
        break;
    }
}
