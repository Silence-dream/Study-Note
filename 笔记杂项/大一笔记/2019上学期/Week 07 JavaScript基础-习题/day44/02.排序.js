// 按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组

let set = new Set([10, 5, 34, 59, 98]);
//           转数组    排序          从大到小排序
console.log([...set].sort(function (a, b) { return b - a }))