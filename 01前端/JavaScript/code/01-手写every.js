Array.prototype.myEvery = function (fn) {
  // let flag;
  // for (let i = 0; i < this.length; i++) {
  //   flag = fn(this[i], i, this);
  //   if (!flag) {
  //     return flag
  //   }
  // }

  // return flag
  fn()
}


let arr = [1, 2, 3, 4, 5, 6]

// 检测数组所有元素是否都大于2
// let b = arr.every(function (item) {
//   console.log(item)
//   return item > 2
// })
// console.log("b = ", b)

let c = arr.myEvery(function (item, index, array) {
  console.log(item)
  return item > 0
})
console.log(c)