// 1.引入包
const express = require('express');
const path = require('path');
const multer = require('multer');
const data = require('./data');
// 2.设置包
// 2.1 使用express方法创建服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置multer
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb: callback
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'public', 'upload'))
    },
    // 确定你上传之后的文件的名字
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
})
// 3.处理请求并响应

// 3.1 获取所有数据
app.get('/api/getAll', (req, res) => {
  // console.log(typeof data.get());
  if (!data.get()) {
    return res.status(500).send({
      code: 500,
      msg: '服务器端错误',
      data: null
    })
  }

  return res.status(200).send({
    code: 200,
    msg: "数据获取成功",
    data: data.get()
  })

})

// 3.2 通过id查找某一条数据
app.get('/api/getDetail', (req, res) => {
  // console.log(req.query.id);
  if (!req.query.id) {
    return res.status(404).send({
      code: 404,
      msg: "没有找到您找的数据",
      data: null
    })
  }
  let itemInfo = data.getById(parseInt(req.query.id));

  res.status(200).send({
    code: 200,
    msg: "数据查找成功",
    data: itemInfo
  })
})

// 3.3 添加用户
app.post('/api/add', uploader.single('avatar'), function (req, res) {
  // req.file 是 `avatar` 文件的信息
  // console.log(req.file)

  // req.body 将具有文本域数据，如果存在的话
  // console.log(req.body);


  // 错误的判断
  // 构建数据结构
  let member = {
    id: +new Date(),
    name: req.body.name,
    avatar: `/upload/${req.file.filename}`,
    bio: req.body.bio,
    created: new Date()
  };
  // console.log(member);
  data.add(member);

  res.send({
    code: 200,
    message: "用户添加成功",
    data: null
  })
})


// 4.指定端口并启动服务
app.listen(80, () => {
  console.log("服务器已启动，请访问: http://localhost");
})