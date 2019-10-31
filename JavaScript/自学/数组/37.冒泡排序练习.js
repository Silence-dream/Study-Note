var arr = new Array(5, 19, 23, 6, 14, 8);
// var arr = new Array(5,4,3,2,1);

// 方法一：冒泡排序
//1.排序是开发中常用的
//2.冒泡排序是面试中常问的
//3.面试官经常让人手写冒泡排序


for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var a = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = a;
        }
    }
}
console.log(arr)


// 方法二：sort()

//语法 数组名.sort(function(a,b){})  return a-b就是正序  return b-a就是逆序
var reult=arr.sort(function(a,b){return b-a});

console.log(reult);


