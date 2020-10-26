
let obJson = '{"name":"哈哈","age":18}'
console.log(obJson)

console.log(`----------------------------------------`);

let obj = JSON.parse(obJson)
console.log(obj)
console.log(typeof obj)
console.log(`----------------------------------------`);

let arrJson = '["a","b","c"]'
console.log(arrJson);
console.log(`----------------------------------------`);
let arr = JSON.parse(arrJson);
console.log(arr);
console.log(Array.isArray(arr))