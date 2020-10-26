// 4.写一个函数，假设你正在爬楼梯。需要 n 阶你才能到达楼顶，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢

//本质是斐波那契数列

var climbStairs = function (n) {
    const dp = [];
    dp[0] = 1;//定义第一个
    dp[1] = 1;//定义第二个
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];//存下标为2开始存元素,元素
    }
    return dp[n];//返回数值
}
console.log(climbStairs(2))

//方法二
function getMethod(n) {
    //定义第一个数
    var a = 1;
    //定义第二个数
    var b = 1;
    //循环从2开始
    for (var i = 2; i <= n; i++) {
        //定义变量进行传递数值
        let temp = a + b;
        b = a;
        a = temp;
    }
    return a;
}
//定义变量存和
let result=getMethod(5);
//打印结果
console.log(result);