

var arr = [1, 2, 3, 4, 5, 6];

//1.循环遍历数组 遍历的范围是 数组的长度/2
for (var i = 0; i < arr.length / 2;i++) {
    //2.定义临时变量 让其等于当前数
    var temp=arr[i]
    //3.让当前述等于arr[arr.length-1-i]
    arr[i]=arr[arr.length-1-i]
    //4.让arr[arr.length-1-i]等于临时变量
    arr[arr.length-1-i]=temp;
}
//5.打印
console.log(arr);
