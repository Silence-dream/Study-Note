const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quanzhan12", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("数据库连接成功"))
  .catch(() => console.log("数据库连接失败"));

let theachSchema = new mongoose.Schema({
  name: String,
  gender: Number,
  age: Number,
  money: Number
});
const theach = new mongoose.model("theach", theachSchema);

let arr = [{
    name: "张三",
    gender: 0,
    age: 18,
    money: 18000
  },
  {
    name: "李四",
    gender: 0,
    age: 18,
    money: 21000
  },
  {
    name: "罗志祥",
    gender: 0,
    age: 40,
    money: 18000
  },
]


for (let i = 0; i < arr.length; i++) {
  theach.create({
    name: arr[i].name,
    gender: arr[i].gender,
    age: arr[i].age,
    money: arr[i].money
  })
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err))
}

theach.find().then((data) => console.log(data)).catch((err) => console.log(err))