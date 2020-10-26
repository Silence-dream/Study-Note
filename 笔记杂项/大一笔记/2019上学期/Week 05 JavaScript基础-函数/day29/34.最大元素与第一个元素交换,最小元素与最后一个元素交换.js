// 34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
// 然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

var arr = [1, 2, 4, 5, 7, 7, 666, 0, -1, -2, -3];
var max = arr[0];
var min = arr[0];
//求出数组的最大值和最小值
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("最大值"+max)

//交换,把arr[0]和最大值交换
var max01 = arr[arr.indexOf(max)]
arr[arr.indexOf(max)] = arr[0];
arr[0] = max01;
console.log("最小值"+min)
//交换，把arr[arr.length-1]与最小值交换
var max01 = arr[arr.indexOf(min)]
arr[arr.indexOf(min)] = arr[arr.length-1];
arr[arr.length] = max01;    

console.log(arr)

















// for(var i=0;i<arr.length-1;i++)
// {
//     for(var j=0;j<arr.length-1-i;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr)