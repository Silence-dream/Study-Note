function getZhiShu(num) {
    var flag = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
        }
    }
    return flag;
}

var result = getZhiShu(10);

if (result == true) {
    console.log("是质数");
} else {
    console.log("不是质数");
}
