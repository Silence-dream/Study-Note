const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quanzhan12", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("数据库连接成功"))
  .catch(() => console.log("数据库连接失败"));

let scoreSchema = new mongoose.Schema({
  name: String,
  mathematics: Number,
  english: Number,
  language: Number
});
const Score = new mongoose.model("Score", scoreSchema);

let arrs = [{
  name: "zhangsan",
  mathematics: 100,
  english: 50,
  language: 40,
}, {
  name: "jialala",
  mathematics: 7,
  english: 41,
  language: 75,
}, {
  name: "yaoyao",
  mathematics: 86,
  english: 5,
  language: 7,
}, {
  name: "yangwenlin",
  mathematics: 56,
  english: 4,
  language: 256,
}]



for (let i = 0; i < arrs.length; i++) {
  Score.create({
    name: arrs[i].name,
    mathematics: arrs[i].mathematics,
    english: arrs[i].english,
    language: arrs[i].language,
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err);
  })
}
// 输出数据
Score.find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))