// super 关键字调用父类普通函数
// class Father {
//   say() {
//     return "我是爸爸";
//   }
// }
// class Son extends Father {
//   say() {
//     // console.log('我是儿子');
//     console.log(super.say() + "的儿子");
//     // super.say() 就是调用父类中的普通函数 say()
//   }
// }
// var son = new Son();
// son.say();
// 继承中的属性或者方法查找原则: 就近原则
// 1. 继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的
// 2. 继承中,如果子类里面没有,就去查找父类有没有这个方法,如果有,就执行父类的这个方法(就近原则)

// class Father {
//   say() {
//     return "我是爸爸";
//   }
// }
// class Son extends Father {
//   say() {
//     // console.log('我是儿子');
//     console.log(super.say() + "的儿子");
//     // super.say() 就是调用父类中的普通函数 say()
//   }
// }
// var son = new Son();
// son.say();

class Father {
  say() {
    return "我是爸爸";
  }
}
class Son extends Father {
  say() {
    // console.log('我是儿子');
    console.log(super.say() + "的儿子");
    // super.say() 就是调用父类中的普通函数 say()
  }
}
var son = new Son();
son.say();
