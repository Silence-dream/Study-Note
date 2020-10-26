// 5.求1!+2!+3!+...+20!的和

// 定义变量存和
let sum = 0;
for (let j = 1; j <= 20; j++) {
    let q = 1;
    for (let i = 1; i <= j; i++) {
        q *= i;
    }
    sum += q;
}
console.log(sum);

