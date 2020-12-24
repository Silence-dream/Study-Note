## 关于Apidoc

-   一个自动化的后端文档接口生成器



## 安装

```powershell
npm install apidoc -g #安装
apidoc -i myapp/ -o apidoc/ -t mytemplate/ #运行
```

## 命令行接口参数



```powershell
apidoc -i 输入路径 -o 输出路径(默认为doc) # 剩下两个 -f和-t不常用,若用到请查阅官方文档
```



## 配置apidoc.json

-   在根目录下面新建apidoc.json

```json
{
  "name": "appleFarm",                  //文档项目名
  "title": "appleFarmAPI",              //html标题
  "description":"API接口文档",           //文档描述
  "url" : "https://www.google.com",     //接口前缀，可以为空
  "version": "0.1.0",                   //文档版本
  // 引入md文件玩耍
  "header": {
    "title": "My own header title",
    "filename": "readme.md"
  },
  "footer": {
    "title": "My own footer title",
    "filename": "readme.md"
  }
}

```



## 模板

-   生成文档需要在js代码中写入注释,让apidoc根据注释生成文档
-   在 public 目录中新建 app.js 写入

```js
const express = require("express");
const app = express();
/**
 * @api {post} /admin_login/  用户登录
 * @apiGroup  admin
 * @apiParam {Number}   account     账号（手机号）.
 * @apiParam {String}   pw  密码.
 * @apiSuccess {String} msg 详细信息.
 * @apiSuccess {Number} status 状态码（1：登录成功，2：密码或账号错误，3：参数验证失败）
 * @apiSuccess {Number} is_admin （身份标识：-1普通注册，0球员，1及以上，代表创建的球队个数）.
 * @apiSuccessExample {json} 成功时返回:
 * {
 * "msg": "登录成功",
 * "status": 1,
 * "data": {
 * "user_id": 4,
 * "is_admin": 2
 * }
 * }
 * @apiErrorExample {json} 错误时返回:
 * {
 *  code:500,
 *  msg:"错误"
 * }
 * @return \think\response\Json
 * @throws \think\db\exception\DataNotFoundException
 * @throws \think\db\exception\ModelNotFoundException
 * @throws \think\exception\DbException
 * 
 */

app.get("/admin", (req, res) => {
  res.send("接口文档");
});

```



## 最后目录树

-   运行命令 apidoc -i public/

```js
├─apidoc.json 		//配置文件		
├─package.json
├─readme.md
├─public
|   ├─api			//写 api代码的地方
|   |  ├─app.js
├─doc 				//生成的目录
```





## 参加资料

[NodeJs - Express项目 自动生成API文档](https://www.jianshu.com/p/7e1b057b047c/)
[Apidoc的安装配置及使用](https://juejin.im/post/6844903990606446605)
[代码注释](https://juejin.im/post/6844903554210070541#heading-2)