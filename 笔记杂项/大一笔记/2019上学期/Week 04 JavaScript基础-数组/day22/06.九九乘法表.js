// 需求: 利用JavaScript完成如下九九乘法表
// 1x1=1
// 1x2=2 2x2=4


for (var b = 1; b <= 9; b++) {//定义列
    var str = "";
    for (var a = 1; a <= b; a++) {//定义行
        str += a+"X"+b+"="+a*b+" ";
    }
    console.log(str);
}