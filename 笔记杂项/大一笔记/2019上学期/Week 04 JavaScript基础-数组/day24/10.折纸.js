// 一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）


// 分析：使用while循环

// 1.定义之的厚度
var zhi=0.08;
//2.定于珠峰的高度
var height=8848.13*1000;
// 3.定义累加次数
var ci=0;

while(zhi<=height)
{
    zhi+=zhi;
    ci++
}
console.log("需要折叠"+ci+"次")