// 父类有加法方法
// class Father {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   sum() {
//     console.log(this.x + this.y);
//   }
// }
// // 子类继承父类加法方法 同时 扩展减法方法
// class Son extends Father {
//   constructor(x, y) {
//     // 利用super 调用父类的构造函数
//     // super 必须在子类this之前调用
//     super(x, y);
//     this.x = x;
//     this.y = y;
//   }
//   subtract() {
//     console.log(this.x - this.y);
//   }
// }
// var son = new Son(5, 3);
// son.subtract();
// son.sum();

// class Father {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   sum() {
//     console.log(this.x + this.y);
//   }
// }
// class Son extends Father {
//   constructor(x, y) {
//     super(x, y);
//     this.x = x;
//     this.y = y;
//   }
//   subtract() {
//     console.log(this.x - this.y);
//   }
// }
// var son = new Son(5, 3);
// son.subtract();
// son.sum();

class Father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    console.log(this.x + this.y);
  }
}
class Son extends Father {
  constructor(x, y) {
    super(x, y);
    this.x = x;
    this.y = y;
  }
  subtract() {
    console.log(this.x - this.y);
  }
}
var son = new Son(5, 3);
son.subtract();
son.sum();
