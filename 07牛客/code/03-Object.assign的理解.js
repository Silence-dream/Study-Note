let obj1 = { name: "张飒" };
let obj2 = { name: "李四", age: 90 };
let result = Object.assign(obj1, obj2);
// Object.assign(target,source)
// 如果有同名的 key source 会覆盖 target
// 返回的结果会修改 target内的值

console.log(result); // { name: '李四', age: 90 }
result.name = "芜湖!";

console.log(obj1); // { name: '芜湖!', age: 90 }
