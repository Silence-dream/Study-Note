
var num=0;
for (var j = 1; j <= 10; j++) {
    var sum = 1;
    for (var i = 1; i <= j; i++) {
        sum *= i
    }
    num+=sum
}
console.log(num)