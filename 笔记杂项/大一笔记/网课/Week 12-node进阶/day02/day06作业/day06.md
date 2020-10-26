## 简答题

1. 创建数据库 quanzhan12

```js
/* 连接数据库 */
mongoose
  .connect("mongodb://localhost/quanzhan12", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("数据库连接成功"))
  .catch(() => console.log("数据库连接失败"));
```

============================================class 集合==============================

2. 创建集合 class,集合的规则要求如下
   > 姓名:字符串类型
   > 年龄:数字类型
   > 性别: 数字类型
   > 业务爱好:数组类型

```js
// 创建数据集合规则

let qClass = new mongoose.Schema({
  name: String,
  age: Number,
  gender: Number,
  hobbies: Array,
});
```

============================================增加操作===============================

3. 在 class 的集合中插入文档
   > 姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
   > 姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
   > 姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
   > 姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]

```js
// 设置模型

const Bclass = new mongoose.model("class", qClass);

let arr = [
  {
    name: "zhangsan",
    age: 22,
    gender: 0,
    hobbies: ["draw", "computer"],
    name: "jialala",
  },
  {
    name: "jialala",
    age: 18,
    gender: 1,
    hobbies: ["sing", "draw", "football"],
  },
  {
    name: "yaoyao",
    age: 24,
    gender: 1,
    hobbies: ["football", "computer", "running"],
  },
  {
    name: "yangwenlin",
    age: 19,
    gender: 0,
    hobbies: ["sing", "computer"],
  },
];

// 添加数据
for (let i = 0; i < arr.length; i++) {
  let dClass = new Bclass({
    name: arr[i].name,
    age: arr[i].age,
    gender: arr[i].gender,
    hobbies: arr[i].hobbies,
  });
  dClass.save();
}
```

============================================查询操作===============================

4. 查询所有人的信息

```js
Bclass.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

============================================score 集合==============================

5. 创建集合 score,集合的规则要求如下
   > 姓名:字符串类型
   > 数学成绩: 数字类型
   > 英语成绩: 数字类型
   > 语文成绩: 数字类型

```js
let scoreSchema = new mongoose.Schema({
  name: String,
  mathematics: Number,
  english: Number,
  language: Number,
});
```

============================================增加操作===============================

6. 在 class 的集合中插入文档
   > 姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
   > 姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，

```js
const Score = new mongoose.model("Score", scoreSchema);

let arrs = [
  {
    name: "zhangsan",
    mathematics: 100,
    english: 50,
    language: 40,
  },
  {
    name: "jialala",
    mathematics: 7,
    english: 41,
    language: 75,
  },
  {
    name: "yaoyao",
    mathematics: 86,
    english: 5,
    language: 7,
  },
  {
    name: "yangwenlin",
    mathematics: 56,
    english: 4,
    language: 256,
  },
];

for (let i = 0; i < arrs.length; i++) {
  Score.create({
    name: arrs[i].name,
    mathematics: arrs[i].mathematics,
    english: arrs[i].english,
    language: arrs[i].language,
  });
}
```

============================================查询操作===============================

7. 查询所有成绩

```js
// 输出数据
Score.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

============================================老师集合==============================

8. 创建集合 teacher,集合的规则要求如下
   > 姓名:字符串类型
   > 性别: 数字类型
   > 年龄: 数字类型
   > 新资: 数字类型

```js
let theachSchema = new mongoose.Schema({
  name: String,
  gender: Number,
  age: Number,
  money: Number,
});
const theach = new mongoose.model("Score", theachSchema);
```

============================================增加操作===============================

9. 在 class 的集合中插入文档
   这个你自己定义，插入 3 条文档就可以

```js
let arr = [
  {
    name: "张三",
    gender: 0,
    age: 18,
    money: 18000,
  },
  {
    name: "李四",
    gender: 0,
    age: 18,
    money: 21000,
  },
  {
    name: "罗志祥",
    gender: 0,
    age: 40,
    money: 18000,
  },
];

for (let i = 0; i < arr.length; i++) {
  theach
    .create({
      name: arr[i].name,
      gender: arr[i].gender,
      age: arr[i].age,
      money: arr[i].money,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
```

============================================查询操作===============================

10. 查询所有老师的信息

```js
theach
  .find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
