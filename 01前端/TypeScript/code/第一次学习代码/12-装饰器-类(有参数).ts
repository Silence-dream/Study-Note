
// 定义一个装饰器
function say(params: string) {
  return function (target: any) {
    console.log("我是传入的参数params : ", params)
    console.log("我变成了Hello类target : ", target);
  }
}

// 定义一个类
// 把装饰器给这个Hello类
@say("hello")
class Hello {
  constructor() { }
  Hi() {
    console.log("hi");
  }
}

let result1: any = new Hello()
console.log("result1 : ", result1);
