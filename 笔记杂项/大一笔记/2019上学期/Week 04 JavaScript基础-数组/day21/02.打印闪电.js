// 需求：
// *
// **
// ***
// *******
//  ***
//  **
//  *

// 分析： 依次递增
//        依次递减
var srt="";//依次递增打印
for(var i=0;i<3;i++)
{
    srt+="*";
    console.log(srt);
}

var srt2="";//一行打印*
for(var j=0;j<7;j++)
{
    srt2+="*";
}
console.log(srt2)

//递减打印
for (var n = 3; n > 0; n--) {
    var srt3 = "";
    for (var k = 0; k < n; k++) {
        srt3 += "*";
    }
    console.log(" "+srt3)
}