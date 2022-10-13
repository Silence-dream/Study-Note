# 什么是json?

- JSON是JavaScript Object Notation的缩写，它是一种轻量级的数据交换格式。
- JSON是独立的语言，JSON 具有自我描述性，更易理解。
- JSON 是用于存储和传输数据的格式。
- JSON 通常用于服务端向网页传递数据 。

## 语法

- 数据在名称/值对中
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组



## json环境

- json一共有两种环境：

  - 写在js中

    - ```js
      //对象形式的json
      let obj={
          name:"哈哈",
          age:192
      }
      
      //符合对象格式的字符串
      let obJson='{"name":"哈哈","age":18}'
      
      //数组形式
      let arr=["1","2","3"];
      
      //符合数组格式的字符串
      let arrJson='["a","b","c"]'
      
      ```

  - 写在json中

    - ```json
      {"name":"哈哈","age":18}
      ["a","b","c"]
      
      ```

## js对象、数组转json

```js
let obj={name:"我好帅",age:18};
//对象转json
let objJson=JSON.stringify(obj)   //ify意为  使...化
console.log(objJson)//{"name":"我好帅","age":18}
```

## JSON转js对象数组

```js
let objJson="{"name":"我好帅","age":18}"
let obj=JSON.parse(objJson)
console.log(obj) // { name: '我好帅', age: 18 }
```

## 本地存储

本地存储里面只能存储字符串的数据格式,所以我们需要使用上面的两个方法