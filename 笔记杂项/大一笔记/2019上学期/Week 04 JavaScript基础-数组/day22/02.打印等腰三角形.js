// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）（拔高题）
//    * 
//   *  * 
//  *  *  * 
// *  *  *  * 
//*  *  *  *  *


for (var z = 1; z <= 5; z++) {//z1到z5

    var srt = "";
    // j从4到0
    for (var j = 1; j <= 5-z; j++) {//控制空格横向打印个数
        srt += ' ';
    }
    // i从1到5
    for (var i = 1; i <= z; i++) {//控制星星横向打印个数
        srt += '* ';
    }
    console.log(srt)
}



/* //思考开始
//1.
var srt = "";
for (var j = 1; j <= 4; j++) {//控制空格横向打印个数
    srt += ' ';
}

for (var i = 1; i <= 1; i++) {//控制星星横向打印个数
    srt += '* ';
}
console.log(srt)




//2.
var srt = "";
for (var j = 1; j <= 3; j++) {//控制空格横向打印个数
    srt += ' ';
}

for (var i = 1; i <= 2; i++) {//控制星星横向打印个数
    srt += '* ';
}
console.log(srt)


//3.
var srt = "";
for (var j = 1; j <= 2; j++) {//控制空格横向打印个数
    srt += ' ';
}

for (var i = 1; i <= 3; i++) {//控制星星横向打印个数
    srt += '* ';
}
console.log(srt)

//4.
var srt = "";
for (var j = 1; j <= 1; j++) {//控制空格横向打印个数
    srt += ' ';
}

for (var i = 1; i <= 4; i++) {//控制星星横向打印个数
    srt += '* ';
}
console.log(srt)

//5.
var srt = "";
for (var j = 1; j <= 0; j++) {//控制空格横向打印个数
    srt += ' ';
}

for (var i = 1; i <= 5; i++) {//控制星星横向打印个数
    srt += '* ';
}
console.log(srt)

// 规律总结:

// 一共循环了5次所以需要一个大的外部循环五次
// j从4到0，i从1到5


//思考结束 */