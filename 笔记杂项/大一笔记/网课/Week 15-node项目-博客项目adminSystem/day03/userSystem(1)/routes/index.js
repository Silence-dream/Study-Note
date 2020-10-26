// 1.导入express
const express = require('express');
// 2.使用expres.Router来创建路由
const router = express.Router();
// 3.导入controller文件(解构赋值)
const { getIndex, getArticle, getDetail } = require('../controller/indexCtrl')
// 4.接受前端请求 并处理数据
// 4.1 显示首页
router.get('/', getIndex)
router.get('/index.html', getIndex)

// 4.3 显示首页列表数据
router.get('/api/article', getArticle);

// 4.4 显示文章详情数据
router.get('/article.html', getDetail);

// 5.导出路由
module.exports = router;