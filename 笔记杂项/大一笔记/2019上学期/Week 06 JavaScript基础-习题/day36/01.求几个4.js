// 例如101中没有4；104中有一个4；144中有两个4。你要做的是统计出101到200之间的整数一共有多少个4。


// 定义累加变量存有多少个4
let conut = 0;
//定义循环
for (let i = 101; i <= 200; i++) {
    //求出个位十位
    let ge = i % 10;
    let shi = parseInt(i % 100 / 10);
    if (ge == 4 || shi == 4) {
        conut++;
    }
}
console.log(conut);