// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//     return 1
//   }
//   hello(name,age){

//     // console.log(11)
//     return {name,age}
//   }

// }

// let result = new Person("zs",18);
// console.log(result)
// console.log(result.hello('1',20))

let a = {};
class Father {
  constructor(x, y) {
    a.x = x;
    a.y = y;
  }

  sum() {
    let sum = a.x + a.y;
    return sum;
  }
}
class Son extends Father {}

let result = new Son(2, 5);
console.log(result.sum());
console.log(a);
