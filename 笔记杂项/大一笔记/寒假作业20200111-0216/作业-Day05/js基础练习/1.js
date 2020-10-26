// 如何能够判断一个数字是小数还是整数

function getNumber(number) {
    if (number % 1 == 0) {
        return "你输入的数字是整数";
    } else {
        return "你输入的数字是小数";
    }
}
let result = getNumber(50);
console.log(result);