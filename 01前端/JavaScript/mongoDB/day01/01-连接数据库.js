// Using Node.js `require()`
const mongoose = require('mongoose');
//                           ip域名     数据库名称
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("数据库连接成功")).catch(() => console.log("数据库连接失败"));

