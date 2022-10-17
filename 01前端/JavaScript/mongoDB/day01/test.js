const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("数据库连接成功")).catch(() => console.log("数据库连接失败"));

// 创建数据集合规则

let studentSchema = new mongoose.Schema({
  // 字段:数据类型
  url: String,
  title: String,
  sDate: String,
  eDate: String,
  address: Array,
  money: Number
})
const Bar = new mongoose.model("Student", studentSchema);

// 给Studen添加数据

let luo = new Bar({

})

// 保存数据
luo.save();