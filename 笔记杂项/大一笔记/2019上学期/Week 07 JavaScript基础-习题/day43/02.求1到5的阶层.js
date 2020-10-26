// 2. 计算并打印5的阶乘的结果

//因为第一题已经求出来了，我就求个1到5的阶层和玩玩吧


let sum = 0;
let a = 1
for (let i = 1; i <= 5; i++) {
    a *= i;
    sum += a;
}
console.log(sum);