let obj = {}
let arr = [];
let obj02 = new Object()
let fn = function () { }
console.log(Array.isArray(obj))//false
console.log(Array.isArray(arr))//true
console.log(Array.isArray(obj02))//false
console.log(Array.isArray(fn))//false