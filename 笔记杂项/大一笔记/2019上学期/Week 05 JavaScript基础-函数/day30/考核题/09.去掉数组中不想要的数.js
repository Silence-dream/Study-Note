// 9.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];

var oldArr = [1, 3, 4, 5, 0, 0, 6, 6, 0, 5, 4, 7, 6, 7, 0, 5];

///           0  1  2  3  4  5  6  7
// 分析：判断这个数是0的时候就把它干掉
var newArr = [];
for (var i = 0; i < oldArr.length; i++) {
    if (oldArr[i] == 0) {//判断元素是0的时候就把它干掉.
        oldArr.splice(i, 1);
        i--;//干掉元素的时候oldarr数组的长度会变化所以--
    }
}
var newArr = [].concat(oldArr)//将结果存到newArr里面
console.log(newArr);