## js 简答题

1. 定义 Map 字典的语法格式是什么？

```js
var map = new Map([
  [key, value],
  [key, value]
]);
```

2. 定义 Set 集合的语法格式是什么？

```js
var set = new Set([1, 2, 3]);
```

3. Set 集合的特点有哪些？

- set 中的数据不可以重复
- 解决了 Array 数组的缺点

4. Set 集合的打印结果和 Array 的打印结果有什么不同？

- 一个输出的是对象形式
- 一个输出的是数组形式

5. 什么是 `json` ？作用是什么？优点有什么？

- JSON 是 JavaScript Object Notation 的缩写，它是一种轻量级的数据交换格式。
- JSON 是独立的语言，JSON 具有自我描述性，更易理解。
- JSON 是用于存储和传输数据的格式。
- JSON 通常用于服务端向网页传递数据 。

## js 编程题

1. 使用 Set 集合对下面数组去重

   1. [1,1,2,2,3,3,4,4,5,5]
   2. [true,'66',null,true,66,null,88,'set',88]
   3. [1,[0],1,[0],1,[0]]

```js
var set1 = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])
var set2 = new Set([true, '66', null, true, 66, null, 88, 'set', 88])
var set3 = new Set([1, [0], 1, [0], 1, [0]])
console.log(set1);
console.log(set2);
console.log(set3);
```

2. 定义 2 个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求 2 个数组的并集，交集

```js
// 定义 2 个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求 2 个数组的并集，交集

let arrA = [1, 2, 3, 3];
let arrB = [2, 4, 5, 6];


/* 交集 */
for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrA.length; j++) {
        if (arrA[i] == arrB[j]) {
            console.log(arrA[i]);
        }
    }
}


/* 并集 */
let arrCtem = new Set([]);
for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrA.length; j++) {
        if (arrA[i] != arrB[j]) {
            arrCtem.add(arrA[i]);
            arrCtem.add(arrB[j]);
        }
    }
}
let arrC = Array.from(arrCtem).sort();
console.log(arrC);
```

3. 操作字符串 let str = 'AaBbCcDdEe'

   1. 输出 str 字符串中所有的大写字母
   2. 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回 false
   3. 使用两种方式截取字符串'bCcD'****

```js


let str = 'AaBbCcDdEe';

// 1
var strUp = str.toLocaleUpperCase();
console.log(strUp);

// 2
console.log(str.indexOf("Ff"));

// 3.1

console.log(str.slice(3, 7))

// 3.2

console.log(str.substr(3, 4));
```

4. 操作字符串 let str = 'hello-word'
   1. 将 str 字符串中的 h 和 w 替换成对应的大写字母
   2. 在 1)的基础上使该字符串变成数组['Hello','Word']
   3. 再将 2)中的数组转成字符串'Hello_Word'

```js
let str = 'hello-word';

// 1
let strArr = str.split("")
for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == "h") {
        strArr[i] = "H";
    }
    if (strArr[i] == "w") {
        strArr[i] = "W";
    }
}
// console.log(strArr);

str = String(strArr.join(""));
console.log(str);


// 2

strArr = str.split("-");
console.log(strArr);


// 3

str = String(strArr[0] + "_" + strArr[1])
console.log(str);
console.log(typeof str);
```
