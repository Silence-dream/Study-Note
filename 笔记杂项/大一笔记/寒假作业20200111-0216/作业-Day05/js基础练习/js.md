## js 解答题

1. 如何判断一个变量是否是数字（需要通过输出 true 或 false 进行判断），输出的 true 或 false 分别代表着什么含义？

- 通过 isNaN 判断
- ture 代表不是数字，false 代表是数字。

2. 100+100 结果是 200，那么 100+‘100’结果是什么，为什么？

- 结果是 100100
- 这里的加号代表拼接字符串

3. 请说说 `+` 号有几层含义，分别是什么？

- 两边数据类型是 Number 的时候代表求和
- 一边数据类型是 Numbr 一边是 String 的时候代表拼接字符串
- 具有 Number()函数的作用

4. 前--和后--的区别是什么？

- 先自增再运算
- 先运算再自增

## js 编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
   function getNumber(number) {
     if (number % 1 == 0) {
       return "你输入的数字是整数";
     } else {
       return "你输入的数字是小数";
     }
   }
   let result = getNumber(50);
   console.log(result);
   ```

2. 探究题：详见下面代码

   ```js
   isNaN(""); // false
   isNaN("1A"); // true
   isNaN(true); // false
   isNaN({}); // true
   isNaN([1, 1]); // true
   // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
   //isNaN会进行隐式转换
   ```

3. 打印下面的输出结果

   ```js
   var num1 = 12,
     num2 = "12",
     num3 = "",
     num4;
   console.log(num1 + num2); //1212
   console.log(num1 + +num3); //12
   console.log(num1 + +num4); //NaN
   console.log(+num2 + !!num3); //12
   console.log(!!num2 + !!num4); //1
   ```

4. 打印下面的输出结果

```js
//1
var a = 10,
  b = ++a, //11
  c = a--, //10
  d = c++ + ++b + --a; // 11 + 12 + 9
console.log(a, b, c, d); //9 12 12 32
```

```js
//2
var a = 100,
  b = --a, //99
  c = a-- + b++, // 199
  d = a - b-- + ++c; // 98 - 99 + 199
console.log(a, b, c, d); // 98 99 199 197
```
