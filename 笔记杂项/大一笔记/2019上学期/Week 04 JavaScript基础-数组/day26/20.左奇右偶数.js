//左奇右偶
//10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。

var arr = [26,67,49,38,52,66,7,71,56,87];
var left_ji = [] //奇数
var right_ou = [] //偶数
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {//判断如果是偶数就存进去
        right_ou.push(arr[i]);
    } else {//其他就是奇数
        left_ji.push(arr[i]);
    }
}
console.log(right_ou)
console.log([left_ji+right_ou])