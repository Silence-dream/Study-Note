// 求任意两个数的加减乘除结果
function getResult(num1, num2) {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
}
var result=getResult(50,10);
console.log(result);