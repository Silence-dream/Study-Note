// 30.左奇右偶
//     10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。

var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87];
var arr_z=[];//用来存奇数
var arr_y=[];//用来存偶数
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        arr_z[arr_z.length]=arr[i];//将奇数存到arr_z中
    }
    else if (arr[i] % 2 == 0) {
        arr_y[arr_y.length]=arr[i];//将偶数存到arr_y中
    }
}
var arr=[].concat(arr_z,arr_y);//融合数组
console.log(arr)