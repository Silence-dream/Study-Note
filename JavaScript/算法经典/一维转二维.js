var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6]

var newarr = [];
var a=0
for (var i = 0; i < arr.length; i++) {
    // i=0;
    a++;
    console.log(a,arr);
    var c = arr.splice(0, 6);//每一次循环都删除0到6
    console.log(c)

}
console.log("循环次数"+a);