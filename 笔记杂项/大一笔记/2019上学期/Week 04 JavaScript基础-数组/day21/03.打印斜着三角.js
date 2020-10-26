// 需求:
//     **********    九个
//    *******       七个
//   *****          五个
//  ***
// *

// 分析：从下往上是1、3、5、7、9
// 前面的空格是1、2、3、4、5




for (var j = 9; j > 0; j -= 2) {
    var srt1 = "";
    var srt2 = "";//空格控制
    for (var i = 0; i < j; i++) {
        srt1 += "*";
        srt2 += " ";
    }
    console.log(srt2 + srt1)
}


/*   打印空格代码
for (var h = 5; h > 0; h--) {
    var srt2 = ""
    for (var l = 0; l < h; l++) {
        srt2 += "*";
    }
    console.log(srt2)
}
*/