//输入任意数字求最大值
function getMax() {//arguments=[1,2,3,5,6]
    // 设max为最大值
    let max = arguments[0];
    //遍历数组
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}
//定义变量保存返回值
let result = getMax(5, 6, 98, 2, 15, 93)
//打印输出
console.log(result);