let an: unknown;

let f: any;

f = an;

an = "asd";

let b: undefined;
b = undefined;
type A = { a: string };
let obj: A = { a: "1" };
// in 会检测 key 是否在对象上面如果有就返回 true
// in 会检测原型链 toString 就在原型链上面被检测出来了
console.log("a" in obj);
console.log("toString" in obj);
// in 与 hasOwnProperty 区别
console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("toString"));

export {};
