// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列


// 分析:
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
var arr2 = [2, 1, 6, 8, 10];
// 创建一个新的字面量空数组
// 然后使用concat将两个新数组拼接并赋值给新的数组
var newArr = [].concat(arr1, arr2);
// 去除重复的元素
console.log(newArr);
removeRpt(newArr);
console.log(newArr);

function removeRpt(arr) {

    // 去除数组重复的元素
    for (var i = 0; i < newArr.length; i++) {

        for (j = i + 1; j < newArr.length; j++) {

            if (newArr[i] == newArr[j]) {

                newArr.splice(j, 1);
            }
        }
    }

}

// 然后使用冒泡排序进行排序
function fn(arr) {

    for (var i = 0; i < arr.length - 1; i++) {

        for (var j = 0; j < arr.length - i - 1; j++) {

            if (arr[j + 1] > arr[j]) {

                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}