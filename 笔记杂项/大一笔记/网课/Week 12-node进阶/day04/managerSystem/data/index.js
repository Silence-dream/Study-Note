// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
mongoose.connect('mongodb://localhost/db_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("数据库连接成功")
})
// 3.设置约束
// 4.应用约束
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





// 得到数据
User.find().then((result) => {

  module.exports.result = result
});








// 5.操作数据

// 5.1查找数据
// 5.2添加数据
User.create({
  // 用户名
  username: "罗志祥",
  // 密码
  password: "123456",
  // 年龄
  age: 18,
  // 邮箱
  email: 'luozhixiang@gmial.com',
  // 爱好 爱好是数组 但是具体的爱好是字符串
  hobbies: ['敲代码', '抽烟', '烫头']
})
// 5.3修改数据
// 5.4删除数据