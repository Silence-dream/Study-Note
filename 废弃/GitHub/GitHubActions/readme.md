## GitHub-Actions

简单理解就是一个动作,一堆配置好的脚本,可以帮你拉代码、编译代码、登录远程服务器等操作.



不用的项目很多操作可能是一样的,所以 GitHub 运行开发中把自己编写的脚本文件上传到[市场](https://github.com/marketplace?type=actions)以供大家使用



### 配置文件 .github/workflows 目录

.github/workflows 目录下的每一个 *.yml 文件都是一个 flow,GitHub 会自动运行 workfows 下面的所有 yml 文件



### yml 文件的配置

[官方文档	](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

| 字段     | 功能                                                         |
| -------- | ------------------------------------------------------------ |
| name     | 指定 workflow 的名称.若不写则默认为 当前 workflow 的文件名   |
| on(必填) | 指定触发 workflow 的条件,如 commit push                      |
| jobs     | jobs是workflow最重要的部分，表示workflow要执行的任务，可以是一个或者多个 |
|          |                                                              |
|          |                                                              |


## nginx
https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#apache


