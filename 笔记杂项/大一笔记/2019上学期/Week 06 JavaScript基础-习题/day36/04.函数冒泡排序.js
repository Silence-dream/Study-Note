// 封装一个函数，实现数组var arr = [23,45,78,98,13,89,5]，从大到小排序。

//定义一个函数实现冒泡排序

function getSort(arr) {
    //定义循环
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            //判断大小
            if (arr[j] < arr[j + 1]) {
                //交换数值
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
//用变量存储结果
let result = getSort([23, 45, 78, 98, 13, 89, 5])
console.log(result)