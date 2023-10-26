const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/db_system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("数据库连接成功")).catch("数据库连接失败");

const User = new mongoose.model('User', new mongoose.Schema({
  // 用户名
  username: {
    type: String,
    required: [true, '请输入用户名'],
    minlength: [2, '长度最少2个字符'],
    maxlength: [6, '长度最大6个字符']
  },
  // 密码
  password: {
    type: String,
    require: true
  },
  // 年龄
  age: {
    type: Number
  },
  // 邮箱
  email: {
    type: String,
    require: true
  },
  hobbies: {
    // 元素的数据类型都是字符串的数组
    type: [String],
    enum: {
      values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
    }
  }
}))

console.log(`----------------------------------------------`)
// User.find().skip(2).limit(2).then(data => console.log(data))

// User.find().select('username email -_id').then((data) => {
//   console.log(data);
// })

User.findOne({
  age: 18
}).then(data => console.log(data))