console.log(Object.prototype.toString.call(1))          // [object Number]
console.log(Object.prototype.toString.call(1n))         // [object BigInt]
console.log(Object.prototype.toString.call('123'))      // [object String]
console.log(Object.prototype.toString.call(true))       // [object Boolean]
console.log(Object.prototype.toString.call(undefined))  // [object Undefined]
console.log(Object.prototype.toString.call(null))       // [object Null]
console.log(Object.prototype.toString.call({}))         // [object Object]
console.log(Object.prototype.toString.call([]))         // [object Array]
console.log(Object.prototype.toString.call(function a() {}))  // [object Function]
console.log(Object.prototype.toString.call(Symbol()))         // [object Symbol]
console.log(Object.prototype.toString.call(Math))             // [object Math]
console.log(Object.prototype.toString.call(JSON))             // [object JSON]
console.log(Object.prototype.toString.call(new Date()))       // [object Date]
console.log(Object.prototype.toString.call(new RegExp()))     // [object RegExp]
console.log(Object.prototype.toString.call(new Error))        // [object Error]
console.log(Object.prototype.toString.call(window))            // [object Window]
console.log(Object.prototype.toString.call(document))          // [object HTMLDocument]

let isType = (type, obj) => {
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}
console.log(isType('Number', 12))   // true
console.log(isType('Number', '12')) // false

let type = function(o) {
  let s = Object.prototype.toString.call(o);
  return s.match(/[object (.*?)]/)[1].toLowerCase();
};
console.log(type(12)) // number
console.log(type('12')) // string
console.log(type({})) // object
console.log(type([])) // array


console.log('22'.constructor === String)             // true
console.log(true.constructor === Boolean)            // true
console.log([].constructor === Array)                // true
console.log(document.constructor === HTMLDocument)   // true
console.log(window.constructor === Window)           // true
console.log(new Number(22).constructor === Number)   // true
console.log(new Function().constructor === Function) // true
console.log((new Date()).constructor === Date)       // true
console.log(new RegExp().constructor === RegExp)     // true
console.log(new Error().constructor === Error)       // true


/* 
注意： 1、null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。 2、函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object
*/