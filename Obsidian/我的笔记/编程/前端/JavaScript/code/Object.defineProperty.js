//#region 只读
// "use strict"
// let obj = {
//   name: '张三',
//   age: 18
// };

// Object.defineProperty(obj, 'name', {
//   writable: false
// });

// obj.name = "李四" // 修改无法生效    // 严格模式下会报错 Cannot assign to read only property 'name' of object '#<Object>'

// console.log(obj.name) // 张三
//#endregion



//#region 枚举
// let obj = {
//   name: '张三',
//   age: 18
// };

// Object.defineProperty(obj, "name", {
//   enumerable: false
// })

// for (const key in obj) {
//   console.log(key) // 输出了 age，name消失了
// }

// console.log(Object.keys(obj)) // ["age"]   name消失了
//#endregion



//#region 是否可删除

// let obj = {
//   name: '张三',
//   age: 18
// };

// Object.defineProperty(obj, "name", {
//   configurable: false
// })

// delete name; // 删不掉 name 

// console.log(obj) // { name: '张三', age: 18 }
//#endregion



// let obj = {
//   name: '张三',
//   age: 18
// };


// Object.defineProperties(obj, {
//   name: {
//     writable: false
//   },
//   age: {
//     configurable: false
//   }
// })


// console.log(Object.getOwnPropertyDescriptors(obj))
// /* 
// {
//   name: {
//     value: '张三',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 18, writable: true, enumerable: true, configurable: false }
// }
// */


//#region 以下情况 Descriptor 默认值为false
// let obj = new Object()
// Object.defineProperty(obj, "name", {
//   value: '张三',
// })
// console.log(obj.name) // 张三 
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))
// /* 
// {
//   value: '张三',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// */
//#endregion


//#region get set

let obj = {
  name: '张三',
  age: 18,
};

Object.defineProperty(obj, "name", {
  get() {
    // console.log(this)
    return "李四"
  },
  set(value) {
    return value + "芜湖"
  }
})

console.log(obj.name) //李四
//#endregion