// 2、定义方法判断直角三角形，isRightTriangle,参数为三角形的三条边，
// 返回值为布尔值，是直接三角形为true,否则是false,直角三角形判断方法:最大边的长度平方 = 剩余两条边的平方和（10分）

//  实例：
//  输入：isRightTriangle(5,3,4)
//  返回:true
//  解释：最大边长度5,5*5 = 3*3+4*4
//  实例:
//  返回：false
//  解释：最大边长度6，6*6=36 不等于 3*3+4*4

function isRightTriangle(a, b, c) {
    let flag = true;
    if (a * a + b * b == c * c) {
        return flag;
    }
    else if (a * a + c * c == b * b) {
        return flag;
    }
    else if (b * b + c * c == a * a) {
        return flag;
    }
    else {
        flag = false;
        return flag;
    }
}

let result = isRightTriangle(3, 4, 5);
console.log(result);
