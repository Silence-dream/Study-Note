// 1.引入express
const express = require('express');
const multer = require('multer');
const path = require('path');
const md5 = require('md5');
// 2.使用express的方法来创建路由
const { showArticle, findArticles, deleteArticle, showAddArticle, addArticle, modifyArticle, findArticle } = require('../controller/articleCtrl')
const articleRouter = express.Router();
// 3.创建路由
// 3.1 显示文章列表页
articleRouter.get('/', showArticle)
// 3.2 获取所有文章
articleRouter.get('/findArticles', findArticles)
// 3.3 删除文章
articleRouter.delete('/deleteArticle', deleteArticle);
// 3.4 显示文章添加页面
articleRouter.get('/add', showAddArticle)
// 3.5 发布新文章
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb: callback
    destination: (req, file, cb) => {

      cb(null, path.join(__dirname, "../", 'public', 'upload'))
    },
    // 确定你上传之后的文件的名字
    filename: (req, file, cb) => {
      // console.log(md5(file.originalname));
      cb(null, md5(file.originalname + new Date()) + '.' + file.mimetype.substring(6));
    }
  })
})
articleRouter.post('/add', uploader.single('cover'), addArticle);
// 3.6 显示修改文章页码
articleRouter.get('/modifyArticle', modifyArticle);
// 3.7 查询文章
articleRouter.get('/findArticle', findArticle);
// 4.导出
module.exports = articleRouter;