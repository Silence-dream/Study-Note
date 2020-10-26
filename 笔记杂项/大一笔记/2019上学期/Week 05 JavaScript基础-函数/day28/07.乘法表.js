// 7、利用JavaScript完成如下九九乘法表

for (var j = 1; j <=9; j++) {
    str = "";
    for (var i = 1; i <= j; i++) {
        str += i+'x'+j+'='+j*i+" ";
    }
    console.log(str)
}