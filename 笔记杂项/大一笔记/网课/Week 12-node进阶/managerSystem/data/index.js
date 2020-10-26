// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
mongoose.connect('mongodb://localhost/db_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result => {
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

// 5.操作数据


module.exports = {
  // 5.1查找数据
  /**
   * 
   * 查询所有数据
   */
  // findAll: function (fn) {
  //   User.find()
  //     .then((data) => {
  //       fn(data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // },
  async findAll() {
    return await User.find();
  },
  // 分页查询数据
  findPage: function (pageNum, pageSize, fn) {
    // 每次取5条数据
    // 0-4
    // 5-9
    // 10-14
    User.find().skip((pageNum - 1) * pageSize).limit(pageSize)
      .then(data => {

        // console.log(data)    
        // 数据库中一共有多少条数据
        User.countDocuments().then(total => {
          console.log(total)
          // pageNum 数据总量
          // pageSize 数据
          fn({
            pageNum: pageNum,
            pageSize: pageSize,
            dataTotal: total,
            data: data
          })

        })
      })

  },
  // 5.2添加数据
  addOne: function (newUser, fn) {
    User.create(newUser)
      .then(data => {
        // console.log(data)
        fn(data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  // 5.3修改数据
  // 5.4删除数据
  deleteDate: function (deletID, fn) {
    User.deleteMany({
      _id: deletID
    }).then((data) => {
      console.log(data); // { n: 12, ok: 1, deletedCount: 12 } 数据库中有12条数据  成功删除了12条数据
    })
  }

}
// 5.2添加数据
// User.create({
//   // 用户名
//   username: "康春龙",
//   // 密码
//   password: "123456",
//   // 年龄
//   age: 18,
//   // 邮箱
//   email: 'kangchunlong@itcast.cn',
//   // 爱好 爱好是数组 但是具体的爱好是字符串
//   hobbies: ['足球', '篮球', '橄榄球']
// })