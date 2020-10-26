## js 解答题

1. 请简述 `typeof` 的用途，`typeof` 的返回结果都是什么数据类型？

- typeof 可以检测简单数据类型
- 返回的是 String

2. 数据类型转换，转 Number 类型有哪些方式？

```js
// 1
Number(1);
// 2
let a = +"10";
// 3
let b = "10" - 0;
// 4
let c = "10" / 1;
// 5
let d = "10" * 1;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
```

3. 数据类型转换，转 String 类型有哪些方式？哪个方式存在什么限制？

```js
let a = 10;
let b = String(a); //方式1
let c = a.toString(); //方式2
console.log(typeof b);
console.log(typeof c);
```

- toString
  - 数值、布尔值、对象和字符串值都可以使用 toString()方法，但是 null 和 undefined 值没有这个方法，所以无法使用

4. 数据类型转换，转 Boolean 类型有哪些方式？

```js
let a = 100;
let b = Boolean(a);
let c = !!a;
console.log(typeof b);
console.log(typeof c);
```

5. 什么是隐式类型转换，有哪些是隐式类型转换？

- 隐式转换就是在进行不同数据类型运算的时候，js 引擎会自动转换数据类型使之相同。
- 隐式转换一般通过 `+` `-` `*` `/` `==`来完成

## js 编程题

1. 回答下面代码中的结果

   ```js
   console.log(typeof []);              //object
   console.log(typeof [666]);           //object
   console.log(typeof [{ age: 18 }]);   //object
   console.log(typeof NaN);             //number
   console.log(typeof "true");          //string
   console.log(typeof typeof undefined);//string
   ```

2. 说出下面元素转 Number 类型的结果

   ```js
   ''       // 0
   '666'    // 666
   '88&'    // NaN
   true     // 1
   false    // 0
   null     // 0
   undefined//NaN
   { }      // NaN
   {name:"9",age:9} //NaN
    []      // 0
    [1]     // 1
    [1,1]   // NaN
    [[]]    //0
    [[1]]   // 1
   ```

3. 说出下面元素转 String 类型的结果

   ```js
   666     // 666
   ''      // 空
   true    // true
   false   //false
   null    //null
   undefined//undefined
   { }              //[object Object]
   {name:"9",age:9} //[object Object]
   []       // 空
    [1,'A'] //1,'A'
    [8,{age:8},8] //8,[object Object],8
    [1,[2,[3]]] //1,2,3
   ```

4. 说出下面元素转 Boolean 类型的结果

   ```js
   0        //false
   1        //true
   -1       //true
   ''       //false
   '0'      //true
   NaN      //false
   null     //false
   undefined//false
   { }      //true
    {name:"9",age:9}//true
    []      //true
    [0]     //true
    [false] //true
    [null,undefined]//true
   ```
