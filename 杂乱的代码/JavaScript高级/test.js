// let arr = [1, 2, 3, 4];
// // console.log(arr.length)

// Array.prototype.reverse = function () {
//   let sum = 0;
//   let brr = [];
//   for (let i = this.length - 1; i >= 0; i--) {
//     // console.log(arr[i])
//     // console.log(i)
//     brr[sum] = this[i];
//     sum++;
//   }
//   // console.log(brr)
//   return brr;
// };

// console.log(arr.reverse());
// function reverse(arr) {
//   let sum = 0;
//   let brr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(arr[i])
//     // console.log(i)
//     sum++
//     brr[sum] = arr[i]
//   }
//   console.log(brr)
// }

// console.log(reverse(arr))

function Father(uname, age) {
  this.uname = uname;
  this.age = age;
}

Father.prototype.sing = function () {
  console.log("heelo word");
};

function Son(uname, age, score) {
  Father.call(this, uname, age);
  this.score = score;
}
Son.prototype = new Father();
Son.prototype.constructor = Son;

Son.prototype.aaa = function () {
  console.log(22);
};

let result = new Son("李四", 18, 200);
result.sing();
console.log(result);
console.log(result.constructor);

/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 *示例:
 *
 *给定 nums = [2, 7, 11, 15], target = 9
 *
 *因为 nums[0] + nums[1] = 2 + 7 = 9
 *所以返回 [0, 1]
 *
 */

//  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//  a ="34",b="1234567"，返回2
//  a = '35', b= "1234567" 返回-1
//  a = "355", b = "12354355"  返回5
