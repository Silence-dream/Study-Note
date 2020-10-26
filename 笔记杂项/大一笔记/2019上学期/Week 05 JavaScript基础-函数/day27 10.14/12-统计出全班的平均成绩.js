// 12.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75

var arr = new Array(
    [89, 66, 54],
    [77, 93, 68],
    [55, 45, 88],
    [71, 76, 75],
)
var sum = 0;
var count = 0;//累计加了多少次
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])//测试用
    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];//求和
        count++;//累加
        // console.log(arr[i][j]);//测试用
    }
}
console.log(sum / count);


