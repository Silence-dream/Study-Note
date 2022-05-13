Function.prototype.Mybind = function (fn) {
  let _this = this
  return function () {
    return fn.apply(fn)
  }
}


function test1() {
  this.name = "test1"
}

function test2() {
  console.log(this.name, [...arguments])
}


let result = test2.bind(test1, 1, 2, 3)

result()