// <!-- 2.求整数1～100的累加值，但要求跳过所有个位为4的数 -->


// 定义变量存和
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 10 != 4) {
        sum += i;
    }
}
console.log(sum)


