
// 5、用for循环求1+11+111+1111+11111+111111的和


var num = 1;
var sum = 1;
for (var i = 0; i < 4; i++) {
    num = num * 10 + 1;
    sum += num
}
console.log(sum);