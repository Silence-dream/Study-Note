// 19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。



var arr = [10, 5, 35, 59, 98];

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if(arr[j]<arr[j+1])//如果前一个大于后一个就...↓
        {
            //交换数值
            // var temp = arr[j];
            // arr[j] = arr[j + 1];
            // arr[j + 1] = temp;
            // arr[j] = [arr[j+1],arr[j+1]=arr[j]][0]

            [arr[j],arr[j+1]] = [arr[j+1], arr[j]]//康春龙的骚操作
        }
    }
}
console.log(arr)



















// var arr = [10, 5, 34, 59, 98];
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr)