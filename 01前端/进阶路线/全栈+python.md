# 全栈+python

## 服务端开发

### 1.Node核心

- 1.EventLoop和事件队列
- 2.process全局对象
- 3.commonjs原理分析
- 4.Buffer对象
- 5.fs文件模块
- 6.压缩和解压
- 7.加密和签名算法
- 8.Stream流的原理
- 9.多线程与集群
- 10.tcp和http服务器
- 11.多语言，防盗链 正向和反向代理服务器

### 2.Express

- 1.路由配置
- 2.中间件
- 3.模板
- 4.静态文件中间件
- 5.重定向
- 6.cookie和session
- 7.手写express框架

### 3.KOA

- 1.KOA基本使用
- 手写KOA

### 4.Egg.js

- 1.路由配置
- 2.静态文件服务
- 3.模板引擎
- 4.远程接口服务
- 5.集成MySql restful接口
- 6.sequelize持久化
- 7.国际化，中间件
- 8.自定义插件和框架

### 5.单元测试

- 1.测试用例和需求分析
- 2.单元测试框架mocha
- 3.爬虫Puppeteer
- 4.Jest+Enzyme实现单元测试

### 6.服务器部署

- 1.TCP/IP协议簇网络模型
- 2.IP协议
- 3.TCP连接的本质
- 4.TCP三次握手和四次挥手
- 5.路由和网关
- 6.http/HTTPS

	-  缓存

		-  HTTP 头文件设置

			- HTTP 缓存
			- Meta
			- Expires
			- Cache-Control
			- Last-Modified / If-Modified-Since
			- Etag / If-None-Match

		- 浏览器缓存机制：强缓存、协商缓存

- 7.wireshark抓包实战
- 8.域名，备案，服务器，环境配置，远程部署，发布和更新
- 9.集群的负载均衡 ,PM2实战

### 7.Nginx

- 1.安装和使用
- 2.模块和基本配置
- 3.正向代理 反向代理应用
- 4.CDN
- 5.浏览器缓存
- 6.跨域
- 7.防盗链

### 8.Jenkins

- 1.jenkins job
- 2.shell继成
- 3.继成nginx和git
- 4.持续继成和部署
- 5.travis gitlab ci

### 9.Mysql

- 1.Mysql安装和使用
- 2.Mysql系统架构
- 3.数据类型和约束
- 4.索引和慢查询性能分析
- 5.数据库安全防止SQL注入
- 6.常用sql语句

	- 1.CURD
	- 2.子查询
	- 3.左连接 右连接 内连接
	- 4.视图 触发器 存储过程

- 7.数据库设计ER图
- 8.数据库谁事务，锁，日志隔离机制
- 9.数据库设计三大范式
- 10.基于角色权限访问控制
- 11.主从复制，读写分离

### 10.Mongodb

- 1.Mongodb安装和使用
- 2.Mongodb高级查询
- 3.Mongodb索引
- 4.Mongodb安全和权限
- 5.Mongodb模块Schema
- 6.Mongodb模块Model
- 7.Mongoose实战

### 11.Redis

- 1.Rdedis安装和使用
- 2.5中数据结构及使用场景
- 3.API使用
- 4.发布订阅
- 5.事务
- 6.备份和恢复

### 12.python

- 1.基础语法
- 2.Django框架
- 3.Docker
- 4.Flask框架
- 5.数据采集基础  数据提取 反爬处理 scrapy框架 
- 6.性能压力测试  elasticsearch

### 13.Linux

- 1.Linux安装

	- 1.安装类型 密码
	- 2.配置IP地址
	- 3.网卡接口关闭和激活
	- 4.网络服务器启动和关闭

- 2.虚拟机使用

	- 1.新建虚拟机
	- 2.硬件管理
	- 3.网络连接
	- 4.使用快照
	- 5.克隆
	- 6.分区
	- 7.扩展分区
	- 8.格式化
	- 9.给分区分配盘符
	- 10.分区设备文件名

- 3.linux常用命令

	- 1.文件处理

		- 1.mkdir  cd pwd cp mv In 

	- 2.文件搜索

		- locate whereis which find grep

	- 3.压缩和解压缩命令
	- 4.挂机重启命令
	- 5.挂载

- 4.shell
- 5.vi编辑器
- 6.用户和用户组
- 7.用户操作

	- 添加组 修改组 删除组 等

## 设计模式&算法&数据结构

### 1.设计模式

- 1.创建型模式

	- 1.单例模式
	- 2.工厂模式
	- 3.建造者模式
	- 4.原型模式

- 2.结构型模式

	- 1.适配器模式
	- 2.组合模式
	- 3.代理模式
	- 4.装饰器模式
	- 5.外观模式

- 3.行为型模式

	- 1.解释器模式
	- 2.命令模式
	- 3.迭代器模式
	- 4.观察者模式
	- 5.策略模式
	- 6.中介者模式

### 2.算法和数据结构

- 1.算法基础

	- 1.CPU，寄存器和内存
	- 2.二分查找
	- 3.插入排序
	- 4.冒泡排序

- 2.算法优化

	- 1.时间复杂度和空间复杂度
	- 2.复杂度本质
	- 3.合并排序
	- 4.递归函数复杂度分析
	- 5.递归表达式分析法
	- 6.递归数据归纳法分析
	- 7.主定理

- 3.排序算法

	- 1.合并算法
	- 2.快速排序
	- 3.快速排序复杂度和优化
	- 4.计数排序
	- 5.基数排序
	- 6.桶排序
	- 7.外部排序

- 4.递归

	- 1.递归和穷举问题
	- 2.组合问题
	- 3.递归空间优化
	- 4.回溯算法
	- 5.重复子问题优化
	- 6.尾递归
	- 7.搜索问题
	- 8.深度优先搜索和广度优先搜索

- 5.数据结构

	- 1.双向链表
	- 2.反转单向链表
	- 3.堆
	- 4.栈
	- 5.队列

- 6.进阶算法

	- 1.动态规划
	- 2.LCS问题的子结构
	- 3.填表法
	- 4.构造结果

## 前端

### 开发规范和接口测试工具

- 1.开发规范

	- 代码注释规范
	- 代码开发规范
	- git项目管理规范
	- 代码校验eslint规范

- 2.抓包/接口测试

	- Fiddler 
	- Charles
	- HttpWatch 
	- 模拟请求Postman
	- YAPI接口测试

### .JavaScript高级

- 1.手写实现call apply bind new等JS常用API
- 2.原型链和闭包深入
- 3.执行上下文和作用域链
- 4.深拷贝和浅拷贝
- 5.防抖和节流
- 6.词法分析和语法分析
- 7.生成器和迭代器等
- 8.Symbol元编程，Set Map WeakMap应用
- 9.Object.defineProperty以及proxy和Reflect
- 10.浏览器事件环EventLoop
- 11.Node.js中的事件环EventLoop
- 12.V8内存管理，垃圾收集，引用标记，标记清除，标记整理
- 13.generator和实现co库，手写aync+await
- 14.手写实现PromiseA+规范

### webpack工程化

- 1.各种loader，plugin使用
- 2.单页面打包，多页面打包
- 3.热更新，跨域，代码规范检查
- 4.ES678910兼容处理
- 5.项目打包优化

	- 1.DLL动态链接库
	- 2.多进程打包
	- 3.CDN
	- 4.ThreeShaking
	- 5.代码分割
	- 6.HMR原理

- 6.tapable

	- 1.webpack插件机制
	- 2.tapable分类
	- 3.SyncHook
	- 4.SyncBailHook
	- 5.SyncWaterfallHook
	- 6.SyncLoopHook
	- 7.AsyncParalleHook
	- 8.Hook原理

- 7.AST抽象语法树

	- 1.抽象语法树用途
	- 2.抽象语法树定义
	- 3.JavaSCript Parser
	- 4.babel插件
	- 5.AST解析过程
	- 6.词法单元
	- 7.词法分析
	- 8.语法分析

- 8.手写webpack babel plugin

### Vue全家桶

- 1.Vue3.0

	- 1.Vue基本使用
	- 2.手写Vue2.0  3.0 响应式原理

- 2.路由

	- 1.手写VueRouter

- 3.vuex

	- 1. state getter mytation action 
	- 2.手写 state getter commit dispatch actions/mutations 模块化

- 4.服务器端渲染

	- 1.KOA实现服务端渲染
	- 2.webpack构建Vue SSR项目
	- 3.集成路由，代码分割

- 5.路由懒加载，页面预渲染 SSR原理
- 6.Vue骨架屏

### React全家桶

- 1.React

	- 1.1核心

		- 1.核心应用
		- 2.模块化和组件化
		- 3.React属性，校验和参数传递
		- 4.React的状态和单向数据流
		- 5.受控组件和非受控组件
		- 6.组件通信
		- 7.DOM获取Ref
		- 8.新旧生命周期
		- 9.children

	- 1.2进阶

		- 1.create-react-app原理分析
		- 2.JSX原理和手写虚拟DOM
		- 3.setState异步原理
		- 4.Immutablejs和PureComent优化性能
		- 5.ErrorBoundary Suspense和Fragment
		- 6.React Hooks
		- 7.React性能分析
		- 8.高级组件
		- 9.Fiber架构
		- 10.手写React dom-diff算法

- 2.react-router

	- 1.路由配置
	- 2.路由懒加载
	- 3.路由重定向
	- 4.路由权限管理
	- 5.受保护的路由
	- 6.手写React-router路由库

- 3.redux

	- 1.核心概念action reducer, store
	- 2.手写redux，react-redux，connected路由库
	- 3.手写redux-logger
	- 4.手写redux-promise
	- 5.手写redux-thunk
	- 6.手写redux-saga
	- 7.手写redux-actions

- 4.React服务器端渲染SSR

	- 1.对比客户端渲染和服务器端渲染
	- 2.React服务器端原理
	- 3.SSR中使用路由跳转和redux
	- 4.SEO优化和预渲染
	- 5.KOA+next.js服务器端渲染

- 5.mobx

	- 1.obserable computed adtorun when reaction实战
	- 2.手写mobx类库

- 6.Ant-Design

	- 1.常用UI组件
	- 2.手写AntDesign表单组件

- 7.dva

	- 手写dva

### 原生跨平台开发app

- 1.React Native
- 2.Weex
- 3.Hybrid
- 4.Flutter

	- 1.Dart语言
	- 2.核心

		- 1.MaterialApp与Scaffold 
		- 2..Widget
		- 3.页面及各种控件
		- 4.路由
		- 5.使用第三方库
		- 6.网络请求

	- 3.类库
	- 4.插件、包、模块
	- 5. Platform Channels
	- 6.Flutter网络封装
	- 7. 热更新
	- 8.状态管理
	- 9.Flutter编译原理
	- 10.Flutter打包流程
	- 11.Flutter的渲染原理
	- 12.Flutter混合开发与工厂化架构

### Next.js(React服务端渲染)

- 1.路由
- 2.集成koa
- 3.调用接口
- 4.集成redux
- 5.集成express
- 6.部署

	- 1.直接部署
	- 2.集成express部署

### Nuxt.js（Vue服务端渲染）

- 1.项目生成
- 2.config配置
- 3.中间件
- 4.layout配置
- 5.数据获取
- 6.插件
- 7.使用vuex
- 8.实战

### Nestjs(Node框架)

- 1.Reflect对象
- 2.IOC和DI

	- 1.注册Provider
	- 2.装饰器

- 3.依赖注入

