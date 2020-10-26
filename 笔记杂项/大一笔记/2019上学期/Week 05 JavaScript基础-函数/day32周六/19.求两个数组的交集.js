//19.给定两个数组，编写一个函数来计算它们的交集。


//定义函数求任意两个数组的交集
function getJJ() {
    // 定义数组存交集
    let arr = [];
    //遍历第一个返回的数组
    for (let i = 0; i < arguments[0].length; i++) {
        //遍历第二个返回的数组
        for (let j = 0; j < arguments[1].length; j++) {
            //判断第一个数组里面的元素和第二个数组里面元素是否相等
            if (arguments[0][i] == arguments[0][j]) {//判断arguments[0]里面的元素i是否等于arguments[1][j]里面的元素
                arr[arr.length] = arguments[0][i];
            }
        }
    }
    return arr;
}
// 定义变量存储返回值
let result = getJJ([1, 2, 3, 4], [4, 5]);
//打印
console.log(result);
