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
