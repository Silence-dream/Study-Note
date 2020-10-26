// 封装函数，实现数组去重，var arr = [9,10,6,6,1,9,3,5,6,4]

//定义函数
function getQuChong(arr) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            //判断前后数组是否相等
            if (arr[i] == arr[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
//调用函数并赋值
let result = getQuChong([9, 10, 6, 6, 1, 9, 3, 5, 6, 4])
//输出
console.log(result)