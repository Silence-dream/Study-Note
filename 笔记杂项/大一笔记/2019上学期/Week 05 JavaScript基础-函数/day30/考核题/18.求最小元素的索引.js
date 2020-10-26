// 18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引

var arr = [1, 2, 4, 5, 10, 100, 2, -22];
var min = [0];
var min_suo = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {//求出最小值
        min = arr[i]
        min_suo=arr.indexOf(min);//求出最小值的下标
    }
}
console.log(min_suo);