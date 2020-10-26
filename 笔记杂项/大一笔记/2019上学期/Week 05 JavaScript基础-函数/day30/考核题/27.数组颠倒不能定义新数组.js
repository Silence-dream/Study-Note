// 27.将下面的数组元素前后互换,不能定义新的数组,在原数组上面操作,需要第一个元素和最后一个元素互换位置,第二个元素和倒数第二个元素互换位置,依次类推
//                   [11, 32,66, 47,79,23,89]	
//                 置换后的数组元素为：
//                   [89, 23, 79, 47, 66, 32, 11]


var arr = [11, 32, 66, 47, 79, 23, 89];
for( var i =0; i <arr.length /2; i++){//根据交换的规律i只需要小于arr.length的一半就行了
    //数据互换
    var temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
}
console.log (arr);


// var arr = [11, 32, 66, 47, 79, 23, 89];
// for (var i = 0; i < arr.length/2; i++) {
//     var a = arr[i];
//     var b = arr[arr.length - 1 - i];
//     var temp;
//     temp = a;
//     a = b;
//     b = temp;
//     arr[i] = a;
//     arr[arr.length-1-i]=b;
// }
// console.log(arr)