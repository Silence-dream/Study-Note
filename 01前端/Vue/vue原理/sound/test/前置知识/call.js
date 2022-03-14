// 实现一个原生 call 方法
function person() {
  console.log(this.name)
}
let son = {
  name: "123"
}
person.call(son)

/* 
 * 思考: 原生 call 是通过什么方式实现的？
 * 原生 call 的调用形式是  Function.call 来实现也就是说在 prototype 上添加一个 call 方法
 * 所以我们新建一个自己的 call 方法称之为 newCall
 * 原生的第一个参数是 thisArg 用于指定函数运行的时候 this 指向的是谁
 */


Function.prototype.newCall = function (thisArg) {
  // 此时的 this 指向调用者而不是传递过来的 thisArg
  thisArg.p = this
  thisArg.p()
  delete thisArg.p
}


person.newCall(son)