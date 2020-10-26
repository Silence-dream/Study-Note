// 9、在控制台实现下列图形:
// 55555
// 4444
// 333
// 22
// 1
// 22
// 333
// 4444
// 55555


//打印上半部分
for (var i = 5; i >= 1; i--) {
    a = i;//从5-到1
    var str = '';
    for (var v5 = 1; v5 <= i; v5++) {
        str += `${a}`;//让输出的数字变化
    }
    console.log(str)
}
//打印下半部分
for (var i = 2; i <=5 ; i++) {
    a = i;//从5-到1
    var str = '';
    for (var v5 = 1; v5 <= i; v5++) {
        str += `${a}`;//让输出的数字变化
    }
    console.log(str)
}


