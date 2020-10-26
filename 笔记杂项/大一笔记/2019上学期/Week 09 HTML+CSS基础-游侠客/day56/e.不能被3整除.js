// 5.求1到100所有不能被3整除的整数的第一个大于2000的和

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 != 0) {
        sum += i;
    }
    if (sum > 2000) {
        console.log(sum)
        break;
    }
}