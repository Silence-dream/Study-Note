// 1. 写一个函数，实现对数字数组的排序，var arr = [18, 45, 0, 58, 32,59]


function getArrOrder(arr) {//让arr声明数组
    //冒泡排序
    for (var i = 0; i <= arr.length - 1; i++) {//根据冒泡排序的规律共交换长度减一次
        for (var j = 0; j < arr.length - 1 - i; j++) {//内部交换规律是长度减一减i
            if (arr[j] > arr[j + 1]) {//判断如果前一个元素大于后一个元素
                var temp = arr[j];//就交换数值
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(getArrOrder([18, 45, 0, 58, 32,59]))
// var result = getArrOrder([18, 45, 0, 58, 32, 59]);
// console.log(getArrOrder(arr))