const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("数据库连接成功")).catch(() => console.log("数据库连接失败"));

// 创建数据集合规则

let studentSchema = new mongoose.Schema({
  // 字段:数据类型
  name: String,
  age: Number,
  address: String,
  hobbbies: Array
})
const Student = new mongoose.model("Student", studentSchema);

// 查找数据

Student.find().then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err);
})