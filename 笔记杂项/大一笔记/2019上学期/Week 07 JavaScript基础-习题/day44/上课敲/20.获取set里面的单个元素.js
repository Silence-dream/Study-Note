//直接转数组
let arrSet = Array.from(new Set([1, 5, 6, 3, 14, 55]))
let arrSet = new Set([1, 5, 6, 3, 14, 55])
// let obj = { name: "张三", age: 18 }
console.log([...arrSet][0])
console.log({ ...arrSet })