// 2. 用户输入一个数字，列出所有它能够整除的数字。

//定义用户输入的数字
let userName = 20;
//循环1到它本身
for (let i = 1; i <= userName; i++) {
    // 如果这个数字%i等于0那么i就可以被整除
    if (userName % i == 0) {
        console.log(i)
    }
}
