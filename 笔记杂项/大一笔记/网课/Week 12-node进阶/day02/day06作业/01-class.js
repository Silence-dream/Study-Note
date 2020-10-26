const mongoose = require("mongoose");

/* 连接数据库 */
mongoose.connect("mongodb://localhost/quanzhan12", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("数据库连接成功")).catch(() => console.log("数据库连接失败"));

// 创建数据集合规则

let qClass = new mongoose.Schema({
  name: String,
  age: Number,
  gender: Number,
  hobbies: Array
})

// 设置模型
const Bclass = new mongoose.model("class", qClass);

let arr = [{
  name: "zhangsan",
  age: 22,
  gender: 0,
  hobbies: ["draw", "computer"],
  name: "jialala"
}, {
  name: "jialala",
  age: 18,
  gender: 1,
  hobbies: ["sing", "draw", "football"]
}, {
  name: "yaoyao",
  age: 24,
  gender: 1,
  hobbies: ["football", "computer", "running"]
}, {
  name: "yangwenlin",
  age: 19,
  gender: 0,
  hobbies: ["sing", "computer"]
}]


// 添加数据
for (let i = 0; i < arr.length; i++) {
  let dClass = new Bclass({
    name: arr[i].name,
    age: arr[i].age,
    gender: arr[i].gender,
    hobbies: arr[i].hobbies,
  })
  dClass.save();
}

// Bclass.find().then((data) => console.log(data)).catch((err) => console.log(err));



