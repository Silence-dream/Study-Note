// 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。
// 定义一个函数 
function getNum() {
    // 定义一个变量储存3出现的次数
    var count = 0;
    // 循环100到200
    for (var i = 100; i <= 200; i++) {
        // 求出个位
        var gw = i % 10;
        // 求出十位
        var sw = parseInt(i / 10 % 10);
        // 求出百位
        var bw = parseInt(i / 100);
        // 判断个位是否等于三 如果等于就累加
        if (gw == 3) {
            count++;
        }
        // 判断十位是否等于三 如果等于就累加
        if (sw == 3) {
            count++;
        }
        // 判断百位是否等于三 如果等于就累加
        if (bw == 3) {
            count++;
        }
    }
    // 返回函数值
    return count;

}
console.log(getNum());