// 22.写一个函数， 传入3 个正数，判断能否构成一个三角形
//定义函数判断是否为三角形
function getsanjiao(a, b, c) {
    // 定义变量存储任意两边的和
    if (a + b > c && a + c > b && b + c > a) {
        return "这个三角形存在";
    }
    else {
        return "这个三角形不存在";
    }
}
//定义变量保存返回值
var result = getsanjiao(3, 5, 4);
console.log(result);