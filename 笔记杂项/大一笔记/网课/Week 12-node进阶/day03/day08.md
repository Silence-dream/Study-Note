## 简答题

1. 创建数据库fullstack2019
```js
// 引包
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/fullstack2019", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("连接数据库成功")).catch(() => console.log("连接数据库失败"));

```
============================Student集合==================
2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
//  创建约束
let teacherSchema = new mongoose.Schema({
  // 名字
  name: {
    // 确定这个字段的数据类型
    type: String,
    // 这个字段必须要传
    required: [true, '请传入用户名'],
    // 最小长度
    minlength: [2, "用户名字符长度在2个字符以上"],
    // 最大长度
    maxlength: [6, "用户名字符长度在6个字符以内"],
    // 去除字符串两边的空格
    trim: true
  },
  // 年龄
  age: {
    type: Number,
    // 必传
    required: true,
    // 最小年龄
    min: [0, "年龄必须大于0"],
    // 最大年龄
    max: [25, "提示年龄不能大于25岁"],
  },
  // 性别
  gender: {
    type: String,
    required: true,
    // 去除字符串两边的空格
    trim: true,
    // 枚举 列举
    enum: {
      values: ["男", "女"],
      message: "不允许人妖出现"
    }
  },
  hobbies: {
    type: String,
    // 枚举
    enum: {
      values: ["draw", "computer", "sing", "football", "running"],
      message: "您的爱好不在正常范围之内"
    }
  }
})

//  应用约束
let Teacher = new mongoose.model('Teacher', teacherSchema);
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
//导入的json文件
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
// 创建约束
let scoreSchma = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, "最少两个字符"],
    maxlength: [6, "最大六个字符"],
    required: true,
  },
  shuXue: {
    type: Number,
    min: [0, "不能低于0"],
    max: [100, "不能大于100"],
  },
  yingYu: {
    type: Number,
    min: [0, "不能低于0"],
    max: [100, "不能大于100"],
  },
  yuWen: {
    type: Number,
    min: [0, "不能低于0"],
    max: [100, "不能大于100"],
  },
})

// 应用约束
let Score = new mongoose.model("Score", scoreSchma);
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

6. 查询所有学生的信息
```js
Score.find().then((data) => console.log(data)).catch((err) => console.log(err));
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
Teacher.find({
  age: {
    // 大于
    $gt: 18,
    // 小于
    $lt: 24
  }
}).then((data) => console.log(data));
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js
Teacher.find({
  age: 19,
  hobbies: {
    $in: ['computer']
  }
}).then((data) => console.log(data));
```

9. 查询班级中年龄最大的学生的信息
```js
Teacher.find().sort("-age").limit(1).then((data) => console.log(data));
```

10. 查询年龄是18岁的学生的姓名
```js
Teacher.find({
  age: 18,
}).then((data) => {
  for (let i = 0; i < data.length; i++) {
    console.log("年龄是18岁的学生姓名", data[i].name);
  }
});
```
11. 查询总人数(提示count)
```js
 Teacher.find().count().then((data) => console.log(data));
```

12. 查询显示第二页的数据，每页显示2条
```js
Teacher.find().skip(2).limit(2).then((data) => console.log(data));
```
13. 查询业余爱好里面包含sing的学生的信息
```js
Teacher.find({
  hobbies: {
    $in: ["sing"]
  }
}).then((data) => console.log(data))
```
14. 对数学成绩降序输出
```js
Score.find().sort("-shuXue").then((data) => console.log(data))
```

15. 查询姓名是王凯的各科成绩
```js
Score.find({
  name: "王凯"
}).then((data) => console.log(data));
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
Teacher.updateMany({
  name: "姚姚"
}, {
  age: 23
}).then(data => console.log(data));
```
17. 将所有学生的年龄更改为18
```js
 Teacher.updateMany({}, {
  age: 18
}).then(data => console.log(data));
```
18. 将王凯的数学成绩更新为100分
```js
Score.find({
  name: "王凯"
}).updateMany({}, {
  shuXue: 100
}).then(data => console.log(data));
```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
Teacher.deleteMany({
  age: {
    $lt: 20
  }
}).then((data) => console.log(data))
```
20. 删除姓名是贾拉拉的这条数据
```js

```

