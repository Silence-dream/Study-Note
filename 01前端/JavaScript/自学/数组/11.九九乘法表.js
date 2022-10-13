// 需求: 利用JavaScript完成如下九九乘法表
// 1x1=1
// 1x2=2 2x2=4


for (var j = 1; j <= 9; j++) {
    var srt = "";
    for (var i = 1; i <= j; i++) {
        // 1X1=1 1X2=2
        srt += j+"X"+i+"="+j*i+" ";
    }
    console.log(srt)
}