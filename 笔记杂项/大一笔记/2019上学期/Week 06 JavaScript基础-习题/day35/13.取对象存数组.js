// 13.将下面对象的属性取出来存储到一个数组中
// var person = {name:"one",age:12,sex:"男"};
var person = { name: "one", age: 12, sex: "男" };
//定义数组
var arr = [];
//添加对象中的元素到数组中
arr.push(person.name);
arr.push(person.age);
arr.push(person.sex);
console.log(arr)