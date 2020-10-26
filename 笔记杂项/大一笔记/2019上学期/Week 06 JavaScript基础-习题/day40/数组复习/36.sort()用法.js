var arr = new Array(5, 19, 23, 6, 14, 8);
// var arr = new Array(5,4,3,2,1);

// 方法一：冒泡排序
//1.排序是开发中常用的
//2.冒泡排序是面试中常问的
//3.面试官经常让人手写冒泡排序

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        //什么时候交换位置--如果arr[j]>arr[j+1]
        if (arr[j] > arr[j + 1]) {// 大于从小到大     小于从大到小
            //使用临时变量接收arr[j]
            var temp = arr[j];
            //arr [j+1]的值给arr[j]
            arr[j] = arr[j + 1];
            //把临时变量存的值给arr[j+1]
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);

//方法二：sort（）

