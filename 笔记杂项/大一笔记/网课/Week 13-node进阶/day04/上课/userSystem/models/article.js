const mongoose = require('mongoose');

const user = require('./user');

let User = user.User;


// 数据库连接
mongoose.connect('mongodb:/ycl_bl   og', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("数据库连接成功");
}).catch((err) => {
  console.log(err);
})



let Article = new mongoose.model("Article", new mongoose.Schema({
  // 标题
  title: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 1
  },
  // 作者
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // 发布时间
  publishDate: {
    type: Date,
    default: Date.now
  },
  // 封面图片
  cover: {
    type: String,
    dafault: null
  },
  // 内容
  content: {
    type: String,
    required: true
  }
}));

// Article.create({
//   // 标题
//   title: "罗志祥时间管理教程",
//   // 作者
//   author: "5ed90240394ee346f83ba813",
//   // 内容
//   content: "真正的时间管理其实并非只是管理时间，而是要注重思维的升级和人生阅历的拓展，这样才能真正掌握时间管理的精髓。"
// })

// 关联查询
Article.find().populate("author").then(result => console.log(result))
// Article.find().then(result => console.log(result))