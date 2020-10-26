// 12.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]


var arrA = ["a", "b", "c", "d", "e"];
var brrB = [];//定义空数组来存档arrA的倒叙
for(var i=arrA.length-1;i>=0;i--)//逆序历遍从大下标打到0
{
  brrB.push(arrA[i]);//利用push从后面往前面塞元素

}
console.log(brrB);


//方法二
// var arrA = ["a", "b", "c", "d", "e"];
// var arrB = [];
// //逆序遍历arrA
// for (var i = arrA.length - 1; i >= 0; i--) {
//   arrB[arrB.length] = arrA[i]
// }
// console.log(arrB);