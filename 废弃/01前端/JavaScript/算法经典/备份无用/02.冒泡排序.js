// 8.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序


// 分析：因为冒泡排序要进行多次比较，而且每一次比较中又有多次比较
//因此用的方法是嵌套for循环
// 1.确定外层循环的次数，规律是：数组的长度-1；
// 2.确定内层循环的次数，规律是：数组的长度-1-i；
// 3.确定内侧循环中前后两个元素位置的交换；
// 3.1判断 如果当前数 大于 下一个数那么就交换位置
// 3.1.1 声明临时变量
// 3.1.2 让当前临时变量等于当前数
// 3.1.3 让当前数等于下一个数
// 3.1.4 让下一个数等于临时变量

var arr=[1,3,2,8,6,11,9]
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