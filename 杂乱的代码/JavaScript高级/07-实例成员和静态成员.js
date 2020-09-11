// 静态成员:就是在构造函数上添加的成员
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let result = new Person("zs", 15);
Person.sex = '男'
// 静态成员只能通过构造函数来访问
console.log("但是不能通过实例化的对象来访问", result.sex)
// 但是不能通过实例化的对象来范文
console.log("静态成员只能通过构造函数来访问", Person.sex)
console.log(result);



// // 构造函数中的属性和方法我们称为成员, 成员可以添加
// function Star(uname, age) {
//   this.uname = uname;
//   this.age = age;
//   this.sing = function () {
//     console.log('我会唱歌');

//   }
// }
// var ldh = new Star('刘德华', 18);
// // 1.实例成员就是构造函数内部通过this添加的成员 uname age sing 就是实例成员
// // 实例成员只能通过实例化的对象来访问
// console.log(ldh.uname);
// ldh.sing();
// // console.log(Star.uname); // 不可以通过构造函数来访问实例成员
// // 2. 静态成员 在构造函数本身上添加的成员  sex 就是静态成员
// Star.sex = '男';
// // 静态成员只能通过构造函数来访问
// console.log(Star.sex);
// console.log(ldh.sex); // 不能通过对象来访问