// 2、打印图形
// 55555
// 4444
// 333
// 22
// 1
// 22
// 333
// 4444
// 5555

//for循环打印上半部分

for (let j = 5; j >= 1; j--) {
    let str = ""
    for (let i = j; i >= 1; i--) {
        str += j;
    }
    console.log(str);
}

// for循环打印下半部分


for (let j = 2; j <= 5; j++) {
    let str = ""
    for (let i = j; i >= 1; i--) {
        str += j;
    }
    console.log(str);
}