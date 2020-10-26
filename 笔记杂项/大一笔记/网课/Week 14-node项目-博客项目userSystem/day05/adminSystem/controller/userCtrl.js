// 引入用户集合
const User = require('../model/dbUser');
// 引入mongoose-sex-page
const mongooseSexPage = require('mongoose-sex-page');
// 引入joi 做数据校验
const Joi = require('joi');
// 引入md5加密
const md5 = require('md5');
// 显示用户页面
module.exports.showUser = (req, res) => {
  // console.log("====User====")
  // console.log(req.session);
  // console.log("========")
  // 判断一下 req.session.username
  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('user')
  }
}

// 查找所有用户
module.exports.findUsers = async (req, res) => {
  // let pageNum = req.query.pageNum;
  // let pageSize = req.query.pageSize;
  // console.log(pageNum);
  let { pageNum, pageSize } = req.query;
  // console.log(pageNum, pageSize);

  let result = await mongooseSexPage(User)
    .page(parseInt(pageNum))
    .size(parseInt(pageSize))
    .display(5)
    .find()
    .exec();

  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}

// 删除用户
module.exports.deleteUser = async (req, res) => {
  let { id } = req.query;
  let result = await User.findOneAndUpdate({
    _id: id
  }, {
    status: false
  })

  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "用户删除成功",
    data: result.username
  })
}

// 显示用户添加页面
module.exports.addPage = (req, res) => {

  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('user-add')
  }
}

// 添加用户
module.exports.addUser = async (req, res) => {
  // console.log(req.body);
  // 前端校验是为了提高用户体验 后端校验是为了业务 前端校验做不做都可以 但是后端必须做校验
  // 1.数据校验通过
  // 定义验证规则
  const schema = {
    // username必须是字符串类型、最小长度是2、最大长度是6、必填项、自定义验证失败错误信息
    username: Joi.string().min(6).max(18).required().error(new Error('用户名验证失败')),
    // password必须是字符串类型、必须符合指定的正则规则、自定义验证失败错误信息
    password: Joi.string().min(6).max(12).regex(/^[a-zA-Z0-9]+$/).error(new Error('密码验证失败')),
    // email必须是字符串类型、必须符合邮箱格式、必填项、自定义验证失败错误信息
    email: Joi.string().email().required().error(new Error('邮箱验证失败')),
    // 角色
    role: Joi.string().valid("普通用户", "超级管理员").required().error(new Error('角色信息验证失败')),
    // 用户状态
    status: Joi.number().valid(1, 0).required().error(new Error('用户状态验证失败'))
  }
  // 后端校验
  try {
    await Joi.validate(req.body, schema);
  } catch (error) {
    // status(200) 必须是200 因为如果不写200 浏览器会报错
    return res.send({
      // 写400方便我用js做判断
      code: 400,
      msg: error.message
    })
  }

  // console.log("我不应该被答应")
  // 用户名和邮箱在系统中 都是唯一的标识,如果用户注册的时候 用了别人的用户名或邮箱都是错误的
  let emailResult = await User.findOne({ email: req.body.email });
  let usernameResult = await User.findOne({ username: req.body.username });
  // console.log(emailResult);
  if (emailResult) {
    return res.send({
      // 写400方便我用js做判断
      code: 400,
      msg: "邮箱已经被占用"
    })
  }
  if (usernameResult) {
    return res.send({
      // 写400方便我用js做判断
      code: 400,
      msg: "用户名已经被占用"
    })
  }


  let newUser = {
    username: req.body.username,
    password: md5(md5(md5(req.body.password))),
    email: req.body.email,
    role: req.body.role,
    status: Boolean(req.body.status)
  }
  // console.log(newUser)
  let successResult = await User.create(newUser);
  // console.log(successResult);
  if (successResult.username) {
    res.send({
      // 写400方便我用js做判断
      code: 200,
      msg: "用户注册成功"
    })
  }

}