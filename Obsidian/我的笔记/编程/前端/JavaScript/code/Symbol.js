let mySymbol = Symbol("one Symbol")
console.log(mySymbol.toString())


let obj = new Object

obj[Symbol.iterator] = function () {
  var v = 0
  return {
    next: function () {
      return {
        value: v++,
        // 终止条件
        done: v > 10
      }
    }
  }
};

for (const item of obj) {
  console.log(item)
}