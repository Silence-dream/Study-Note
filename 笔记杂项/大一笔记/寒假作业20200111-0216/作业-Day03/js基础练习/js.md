## js 解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？

-

```js
let obj = {};
```

- 对象都是由 key(键)和 value(值)组成的

2. 如何使用 new 关键字创建对象?

-

```js
let obj = new Object();
```

3. 说明对象的基本操作（读取，修改，添加，删除）

-

```js
let obj = {
  name: "李四",
  age: 18
};

//读取
console.log(obj.name);
//修改
let mod = (obj.name = "张三");
//添加
obj.sex = "男";
//删除
delete obj.name;
```

4. 创建对象有几种方式，分别是什么？写语法

```js
// 字面量
var obj = {};
// 系统内置构造函数
var obj = new Object();
// 构造函数
var obj=funtion(name,age) {
    this.name=name;
    this.age=age
}
```

## js 编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   let obj = {
     name: "可乐",
     age: 18,
     sex: "你猜",
     hobby: "Rush B"
   };
   ```

2. 使用 new 关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

   ```js
   let obj = new Object();
   obj.name = "雪碧";
   obj.age = "19";
   obj.sex = "未知";
   obj.hobby = "Rush A";
   ```

3. 根据步骤操作对象

   ```js
   /*
   1) 定义一个对象：【姓名:柠檬 年龄:17】
   2) 输出该对象的姓名
   3) 修改该对象年龄为：未成年
   4) 添加对象属性：性别为女，爱好为画画，职业为学生
   5) 输出该对象
   6) 删除该对象的姓名
   7) 输出该对象
   */
   let obj = {
     name: "柠檬",
     age: 17
   };
   console.log(obj.name);
   obj.age = "未成年";
   obj.sex = "女";
   obj.hobby = "画画";
   obj.profession = "学生";
   console.log(obj);
   delete obj.name;
   console.log(obj);
   ```

4. 使用三种方式给对象 var obj = {name:"杨"}添加属性 age 为 30

   ```js
   /*
   `参考答案：
   1) obj.age = 30;
   2) obj['age'] = 30;
   3) var age = "age"; obj[age] = 30;`;
   */
   var obj = {
     name: "杨"
   };
   obj.age = 30;
   obj["age"] = 30;
   var age = "age";
   obj[age] = 30;
   console.log(obj);
   ```
