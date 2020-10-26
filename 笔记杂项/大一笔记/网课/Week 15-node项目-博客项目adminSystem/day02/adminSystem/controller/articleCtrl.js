// 引入mongoose-sex-page
const mongooseSexPage = require('mongoose-sex-page');
// 引入文章集合
const Article = require('../model/dbArticle');
const articleRouter = require('../routes/articleRouter');
// 显示文章列表页
module.exports.showArticle = (req, res) => {
  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('article');
  }

}

// 查找所有文章
module.exports.findArticles = async (req, res) => {
  // 通过解构赋值获取页码和每页显示多少条数据
  let { pageNum, pageSize } = req.query;
  // 通过分页插件 查询 文章
  let result = await mongooseSexPage(Article)
    .page(parseInt(pageNum))
    .size(parseInt(pageSize))
    .display(5)
    .find()
    .populate('author')
    .exec();

  // 给前端返回数据
  res.status(200).send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}
// 删除文章
module.exports.deleteArticle = async (req, res) => {
  let { id } = req.body;
  // console.log(id);
  let result = await Article.findOneAndDelete({ _id: id });
  // console.log(result);

  if (result._id) {
    res.status(200).send({
      code: 200,
      msg: "文章删除成功",
      data: result
    })
  }
}

// 显示文章添加页面
module.exports.showAddArticle = (req, res) => {
  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('article-add');
  }

}

// 添加文章
module.exports.addArticle = async (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  // 需要文章
  let newArticle = {
    title: req.body.title,
    author: req.body.author,
    publishDate: req.body.publishDate,
    cover: `upload/${req.file.filename}`,
    content: req.body.content
  }

  let result = await Article.create(newArticle);
  // res.send({ msg: "成功111" });

  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "文章添加成功",
    data: result
  })
}

// 文章编辑
module.exports.modifyArticle = (req, res) => {
  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('article-edit');
  }
}
module.exports.findArticle = async (req, res) => {
  let { id } = req.query;

  let result = await Article.findOne({
    _id: id
  })
  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "数据查询成功",
    data: result
  })
}