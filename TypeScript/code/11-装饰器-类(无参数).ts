
// 定义一个装饰器
function say(params: any) {
  console.log(params);
  params.prototype.haha = "你好啊装饰器扩展的属性"
  params.prototype.fn = function (): string {
    return "我是扩展的方法啦O(∩_∩)O哈哈~"
  }
}

// 定义一个类
// 把装饰器给这个Hello类
@say
class Hello {
  constructor() { }
  Hi() {
    console.log("hi");
  }
}

let result1: any = new Hello()
console.log(result1.haha);
console.log(result1.fn());
