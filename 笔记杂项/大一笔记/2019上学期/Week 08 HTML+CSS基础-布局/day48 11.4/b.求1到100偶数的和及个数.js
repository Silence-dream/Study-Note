// 2.求1-100之间所有偶数的和，以及偶数的个数

//定义变量存和
let sum = 0;
//定义变量存偶数个数
let count = 0;
for (let i = 1; i < 101; i++) {
    // 判断i是不是偶数
    if (i % 2 == 0) {
        sum += i;
        count++;
    }
}
console.log(`1-100之间所有偶数的和:${sum}，个数是${count}`);