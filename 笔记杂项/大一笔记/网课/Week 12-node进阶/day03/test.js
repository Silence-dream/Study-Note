// 引包
const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost/fullstack2019", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("连接数据库成功")).catch(() => console.log("连接数据库失败"));

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

// Teacher.find().then((data) => console.log(data));

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
// let arr = [{
//     name: "杨文林",
//     shuXue: 99,
//     yingYu: 88,
//     yuWe: 80
//   },
//   {
//     name: "贾拉拉",
//     shuXue: 88,
//     yingYu: 79,
//     yuWe: 90
//   },
//   {
//     name: "姚姚",
//     shuXue: 90,
//     yingYu: 90,
//     yuWe: 90
//   },
//   {
//     name: "王凯",
//     shuXue: 90,
//     yingYu: 98,
//     yuWe: 99
//   }
// ]

// // 添加数据
// for (let i = 0; i < arr.length; i++) {
//   Score.create({
//     name: arr[i].name,
//     shuXue: arr[i].shuXue,
//     yingYu: arr[i].yingYu,
//     yuWe: arr[i].yuWe
//   })
// }

// 查询年龄大于18岁小于24岁的学生的信息
// Teacher.find({
//   age: {
//     // 大于
//     $gt: 18,
//     // 小于
//     $lt: 24
//   }
// }).then((data) => console.log(data));

// 查询年龄19岁并且喜欢计算机的男生的信息
// Teacher.find({
//   age: 19,
//   hobbies: {
//     $in: ['computer']
//   }
// }).then((data) => console.log(data));

// 查询班级中年龄最大的学生的信息
// Teacher.find().sort("-age").limit(1).then((data) => console.log(data));

// 查询年龄是18岁的学生的姓名
// Teacher.find({
//   age: 18,
// }).then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     console.log("年龄是18岁的学生姓名", data[i].name);
//   }
// });

// 查询总人数(提示count)
// Teacher.find().count().then((data) => console.log(data));

// 查询显示第二页的数据，每页显示2条
// Teacher.find().skip(2).limit(2).then((data) => console.log(data));


// 查询业余爱好里面包含sing的学生的信息

// Teacher.find({
//   hobbies: {
//     $in: ["sing"]
//   }
// }).then((data) => console.log(data))


// 对数学成绩降序输出

// Score.find().sort("-shuXue").then((data) => console.log(data));

// 查询姓名是王凯的各科成绩

// Score.find({
//   name: "王凯"
// }).then((data) => console.log(data));

// 将姓名是姚姚的学生的年龄更改为23

// Teacher.updateMany({
//   name: "姚姚"
// }, {
//   age: 23
// }).then(data => console.log(data));

// 将所有学生的年龄更改为18
// Teacher.updateMany({}, {
//   age: 18
// }).then(data => console.log(data));

// 将王凯的数学成绩更新为100分
// Score.find({
//   name: "王凯"
// }).updateMany({}, {
//   shuXue: 100
// }).then(data => console.log(data));

// 删除年龄小于20的学生的信息
// Teacher.deleteMany({
//   age: {
//     $lt: 20
//   }
// }).then((data) => console.log(data))
// 删除姓名是贾拉拉的这条数据
Teacher.deleteMany({
  name: "贾拉拉"
}).then((data) => console.log(data))