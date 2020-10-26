// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const { showArticle, findArticles, deleteArticle, showAddArticle } = require('../controller/articleCtrl')
const articleRouter = express.Router();
// 3.创建路由
// 3.1 显示文章列表页
articleRouter.get('/', showArticle)
// 3.2 获取所有文章
articleRouter.get('/findArticles', findArticles)
// 3.3 删除文章
articleRouter.delete('/deleteArticle', deleteArticle);
// 显示文章添加页面
articleRouter.get('/edit', showAddArticle)
// 4.导出
module.exports = articleRouter;