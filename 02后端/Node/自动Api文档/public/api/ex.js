const express = require("express");
const app = express();
/**
 * @api {post} /time/  时间
 * @apiGroup  admin
 * @apiParam {Number}   account     账号（手机号）.
 * @apiParam {String}   pw  密码.
 * @apiSuccess {String} msg 详细信息.
 * @apiSuccess {Number} status 状态码（1：登录成功，2：密码或账号错误，3：参数验证失  败）
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
 * @return \think\response\Json
 * @throws \think\db\exception\DataNotFoundException
 * @throws \think\db\exception\ModelNotFoundException
 * @throws \think\exception\DbException
 * 
 */

app.get("/admin", (req, res) => {
  res.send("接口文档");
});
