// 3.找到100到200之间第一个能被7整除的数字

for (let i = 100; i <= 200; i++) {
    if (i % 7 == 0) {
        console.log(i);
        break;
    }
}