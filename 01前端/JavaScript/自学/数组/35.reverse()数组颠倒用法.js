


var arr = new Array(5, 19, 23, 6, 14, 8, 50);

var brr = arr.reverse();
console.log(brr);


//数组颠倒
//方法一:需要一个新数组来接收
//分析：先定义一个新数组，然后倒序遍历数组，然后存到新的数组里面

// var newArr=[]
// for(var i=arr.length-1;i>=0;i--)
// {
//     // newArr.push(arr[i]);
//     newArr[newArr.length]=arr[i];
// }
// console.log(newArr);

//方法二：需要一个临时变量来实现(不需要新数组)

// 1.声明数组
var arr = [11, 32,66,47,79,23,89]
// 2.遍历数组
for (var i = 0; i < arr.length / 2; i++) {
    // 2.1声明一个临时变量让临时变量的值等于第一个数
    var temp = arr[i];
    // 2.2让arr[i]的值等于ar[arr.length-i-1]的值
    arr[i] = arr[arr.length - i - 1];
    // 2.3 arr[arr.length-i-1]的值等于临时变量
    arr[arr.length - i - 1] = temp;
}
console.log(arr);



//周可的方法
// var arr1 = [1, 2, 3, 4, 5];
// for (var max = arr1.length - 1, min = 0; max > min; min++, max--){

//     var temp = arr1[max]; // arr[4]
//     arr1[max] = arr1[min]; // arr[max] == arr[0]
//     arr1[min] = temp;
// }
// console.log(arr1);

