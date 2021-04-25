// Object.defineProperty;

// 1.	数据描述符，它拥有四个属性配置
// 2.	configurable：数据是否可删除，可配置
// 3.	enumerable：属性是否可枚举
// 4.	value：属性值,默认为undefined
// 5.	writable：属性是否可读写
// 6.	get:一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。
// 7.	set:一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。

// let obj = { name: "123", age: 18 };
// Object.defineProperty(obj, "name", {
//   configurable: false, // name 不可删除
//   enumerable: false, // name 不可便利出来
//   writable: false, // name 的值无法改写
// });
// for (const key in obj) {
//   console.log(key, obj[key]); // 18
// }
// delete obj.name;
// obj.name = "李四"; // 无法改写
// console.log(obj); // { name: "123", age: 18 }
// Object.defineProperty(obj, "age", {
//   value: "age的值被修改了",
// });
// console.log(obj); // {age: "age的值被修改了", name: "123"}

// let obj2 = { name: "李四", age: 90 };
// Object.defineProperty(obj,"name",{
//     get:(value){
//         console.log(value);
//     }
// })
export {};
