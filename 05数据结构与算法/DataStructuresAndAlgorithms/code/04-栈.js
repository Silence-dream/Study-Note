function Stack() {
  // 定义栈存储的地方
  this.items = []

  // 定义栈的相关操作
  // 使用 this 定义方法在每一次 new 的时候都会创建一个新的对象在内存中添加 this.aa 方法
  this.aa = function (element) {}
  // 把方法定义在原型上就可以避免内存的浪费
  Stack.prototype.aa = function () {}

  /* 
  - push(element) 添加一个或者几个新元素到栈的顶部
  - pop() 溢出栈顶元素,同时返回被移除的元素
  - peek() 返回栈顶元素,不对栈做任何修改
  - isEmpty() 判断栈是否为空,true为空
  - clear() 清空栈
  - size() 返回栈的大小
   */
  Stack.prototype.push = function (element) {
    // 添加元素到 items 的最后一位
    this.items[this.size()] = element
  }
  Stack.prototype.pop = function () {
    let lastElement = this.items[this.size() - 1]
    this.items.length = this.size() - 1
    return lastElement
    /* 写法2 */
    // return this.items.pop()
  }
  Stack.prototype.peek = function () {
    return this.items[this.size() - 1]
  }
  Stack.prototype.isEmpty = function () {
    return this.size() === 0
  }
  Stack.prototype.clear = function () {
    this.items = []
  }
  Stack.prototype.size = function () {
    return this.items.length
  }
}
let stack = new Stack();
stack.push(1) // [1]
stack.push(2) // [1,2]
stack.push(3) // [1,2,3]
stack.push(4) // [1,2,3,4]
let p = stack.pop()
console.log("移除的栈顶元素为", p) // 4

let peek = stack.peek()
console.log("当前的栈顶元素为", peek) // 3

let isEmpty = stack.isEmpty()
console.log("当前的栈为空吗", isEmpty) //false

console.log(stack.items); // [1,2,3]

stack.clear()

console.log(stack.items) //[]

stack.push(1) //[1]

console.log(stack.items) //[1]



// 十进制转二进制
function dec2bin(dec) {
  let stack = new Stack()
  // 如果值大于 0 那么就代码还可以求余数
  while (dec > 0) {
    // 把求余的值存入栈用
    stack.push(dec % 2);
    // 向下取整,得出每次除以 2 的值
    dec = Math.floor(dec / 2)
  }
  // 返回值,定义成字符串方便拼接
  let str = ""
  // 如果栈里面还有值那么就把值取出来拼接
  while (!stack.isEmpty()) {
    str += stack.pop()
  }
  return str;
}
let result = dec2bin(100)
console.log(result)