// 1.导入包
const express = require('express');
const path = require('path');
const open = require('open');
const favicon = require('serve-favicon')
// 1.3 DB代表数据库操作
const DB = require('./data');

// 2.设置包
// 2.1 使用express方法创建web服务
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// 2.3 设置获取POST请求参数的中间件
app.use(express.urlencoded({ extended: false }))


// 3.接受前端请求并处理返回响应

// 3.1 查找分页数据
app.get('/api/getPage', (req, res) => {
  // console.log(req.query)
  DB.findPage(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function (data) {
    // console.log(data);
    if (data) {
      res.status(200).send({
        code: 200,
        msg: '数据查询成功',
        data: data
      });
    }
  })
})

// 3.2 添加数据
app.post('/api/add', (req, res) => {
  // console.log(req.body);

  let newUser = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies
  }

  DB.addOne(newUser, function (data) {
    // console.log(data);
    if (data) {
      res.status(200).send({
        code: 200,
        msg: '用户添加成功',
        data: data
      })
    }
  })
})

// 3.3 删除数据
// delete和post一样
app.delete('/api/deleteUser', (req, res) => {

  // console.log('cc' + req.body.id);
  DB.deleteOne(req.body.id, function (data) {
    // console.log(data);
    res.status(200).send({
      code: 200,
      msg: '用户删除成功',
      data: data
    })
  })
})

// 3.4 回显数据
app.post('/api/findOne', (req, res) => {
  // 检测2: 检测后台是否接收到前端的信息
  // console.log(req.body);
  DB.findOne(req.body.id, function (data) {
    // 检测4: 后台是否接受到了数据库中的数据
    // console.log(data);
    if (data) {
      res.status(200).send({
        code: 200,
        msg: "用户查询成功",
        obj: data
      })
    }
  })
})
// 3.5 修改数据
app.post('/api/updateOne', (req, res) => {
  console.log(req.body);

  let userId = req.body.userid;
  let userObj = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies
  }

  DB.updateOne(userId, userObj, function (data) {
    // console.log(data);
    if (data.ok == 1) {
      res.status(200).send({
        code: 200,
        msg: "用户更新数据成功",
        data: null
      })
    }
  })
})
// 4.指定端口并启动服务
app.listen(80, () => {
  console.log("服务已经启动，请打开: http://localhost");
  open("http://localhost", "chrmoe");
}) 