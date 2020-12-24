// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方

//定义函数
function getThree(num)
//num代表整数
{
    // 初始化函数体
    let i = 0;
    while (num % 3 == 0) {
        num /= 3;
    }
    if (num == 1) {
        return `${num}是3的幂次方`;
    }
    else {
        return `${num}不是3的幂次方`;
    }
}
//定义变量保存返回值
var result = getThree(1)
console.log(result);