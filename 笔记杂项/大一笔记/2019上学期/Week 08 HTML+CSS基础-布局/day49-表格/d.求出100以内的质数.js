// 4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）

//定义累加变量

//循环2-100之间的数字
for (let i = 2; i <= 100; i++) {
    let conut = 0;
    for (let j = 2; j < i; j++) {
        //如果这个数字%i等于0那么就累加一次,则表明这个数不是质数,
        if (i % j == 0) {
            conut++;
        }
    }
    if (conut == 0) {
        console.log(i);
    }
}