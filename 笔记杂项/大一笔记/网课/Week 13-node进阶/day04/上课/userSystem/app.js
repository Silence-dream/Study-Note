// 引包
// 引入path
const path = require('path');
// 导入express框架
const express = require('express');
// 设置包
const app = express();
// 设置端口
const port = 80;


// 设置静态资源

app.use(express.static(path.join(__dirname, "public"), {
  // 设置默认打开的网页
  index: "index.html"
}))



app.listen(port, () => console.log(`服务器已经启动,http://localhost`))