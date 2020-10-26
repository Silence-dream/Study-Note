// 1、输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）

for (var a = 2; a <= 100; a++) {//打印2-100之间的数字
    var b = true;
    for (var i = 2; i < a; i++) {//每一次把i重置为2，让i递增去mod a的数值直到mod 为0就把b改成false然后
        if (a % i == 0) {
            b = false;
            break;
        }
        else{
            b=true;
        }
    }
    if (b) {
        console.log(`${a}是素数`)
    }
}
