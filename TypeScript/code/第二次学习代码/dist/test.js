"use strict";
let p = { name: "张三", age: 10 };
let b = p;
//类Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//类充当接口使用,接口中只包含其中的实例属性和实例方法（constructor和static不在其中）
const person = {
  name: "1",
  age: 18,
};
let fn1 = (x, y) => {
  console.log("fn1");
};
let fn2 = (x) => {
  console.log(x);
};
fn1 = fn2;
// fn2 = fn1

function fn5(x, y) {}
