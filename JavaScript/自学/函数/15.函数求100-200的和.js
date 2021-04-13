// 15.写一个函数，求100 - 200 之间所有数的和

//声明一个函数求任意数之间的和

function getArr(num1, num2) {
    //声明变量存和
    var sum = 0;
    //初始化话循环值
    var i = num1;
    //循环任意两个数之间的数
    for (i; i <= num2; i++)
    {
        sum+=i;
    }
    // 返回sum值
    return sum;
}
//定义变量存储返回值
var result=getArr(1,100);
//输出
console.log(result);
