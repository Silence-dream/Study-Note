// 8、利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）

//     *
//    * *
//   * * *
//  * * * *
// * * * * *


for (var i = 1; i <= 5; i++) {
    var sum = '';
    for (var j = i; j <= 5; j++) {
        sum += ' ';
    }
    for (var k = 1; k <= i; k++) {
        sum += '* '
    }
    console.log(sum);
}