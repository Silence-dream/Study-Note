// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】

// 定义变量存和
let sum = 0;
//定义循环1-100
for (let i = 1; i <= 100; i++) {
    //判断个位数是不是3,如果是就直接进入下一次循环
    if (i % 10 == 3) {
        continue;
    }
    sum += i;
}
console.log(sum)
