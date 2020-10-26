// 需求: 利用JavaScript完成如下九九乘法表
// 1x1=1
// 1x2=2 2x2=4


// 分析: 
// 外层控制行数  内层控制列数
// 九九乘法表一共9个数  1开始 一直到9
// 另一半反着来就行

for (var i = 1; i <= 9; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        // 1x1=1  9x9=81(i*j)
        str += j + 'x' + i + '=' + j * i + ' ';
    }
    console.log(str);
}
for (var a = 9; a >= 1; a--) {
    var str2 = "";
    for (var b = 1; b <= a; b++) {
        str2 += b + 'x' + a + '=' + b * a + ' ';
    }
    console.log(str2);
}


