// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头  
var arr = [1, 888, 4, 66, 7, 8];


//1.遍历数组
for (var i = 0; i < arr.length; i++) {
    //2.如果下标等于3，
    if (i == 3) {
        // 2.1则移动下标为3的元素到前面
        arr.unshift(arr[i]);

    }
}
console.log(arr)  