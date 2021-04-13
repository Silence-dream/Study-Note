// 1. 类的继承
class Father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    console.log(this.x + this.y);
    // console.log(100);
  }
}

class Son extends Father {
  constructor(x, y) {
    super(x, y); //把参数传给父类
  }
}

let a = new Son(1, 4);
a.sum();

// class Father {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sum() {
//         console.log(this.x + this.y);
//     }
// }
// class Son extends Father {
//     constructor(x, y) {
//         super(x, y); //调用了父类中的构造函数
//     }
// }
// var son = new Son(1, 2);
// var son1 = new Son(11, 22);
// son.sum();
// son1.sum();

// class Father {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     sum() {
//         console.log(this.x + this.y);
//     }
// }
// class Son extends Father {
//     constructor(x, y) {
//         super(x, y); //调用了父类中的构造函数
//     }
// }
// var son = new Son(1, 2);
// var son1 = new Son(11, 22);
// son.sum();
// son1.sum();
