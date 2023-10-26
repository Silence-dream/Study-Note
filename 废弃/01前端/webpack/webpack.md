## 安装

```powershell
npm install --save-dev webpack
```

## 起步

### 安装

```powershell
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

## 使用

-   在webpack-demo文件夹中构建如下目录

```
├─package.json
├─yarn.lock
├─src
|  └index.js
```

-   然后在终端中运行

```cmd
npx webpack
```

得到如下目录

```
├─package.json
├─yarn.lock
├─src
|  └index.js
├─dist       // 以下是新生成的文件
|  └main.js
```

这样我们就得到了一个最简单的webpack使用方法

## webpack配置文件

-   在跟目录下面新建**webpack.config.js**文件

在里面书写如下内容

```js
const path = require("path");

module.exports = {
  // 输入文件
  entry: "./src/haha.js",
  // 输出
  output: {
    // 输出路径
    path: path.resolve(__dirname, "dist"),
    // 输出文件名
    filename: "bundle.js",
  },
};

```

-   然后修改src/index.js为 haha.js
-   再次运行npx webpack打包一下

此时文件目录为

```
├─package.json
├─webpack.config.js
├─yarn.lock
├─src
|  └haha.js //这里对应输入文件
├─dist
|  ├─bundle.js //这里对应输出文件名
|  └main.js		// 我们发现之前打包的文件还残留着,先不用急我们马上解决
```

## 清理dist文件夹

-   下载clean-webpack-plugin

```shell
 npm install clean-webpack-plugin --save-dev
```

-   在webpack.config.js中引入clean-webpack-plugin

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

-   使用:

```js
 plugins: [new CleanWebpackPlugin()],
// plugins与entry和output是平级的哟
```

-   最后运行npx webpack

此时目录树为

```
├─package.json
├─webpack.config.js
├─yarn.lock
├─src
|  └haha.js
├─dist
|  └bundle.js //我们发现dist文件夹里面的main.js没有了,这样避免了我们问题
```

## 自动生成index.html

-   下载html-webpack-plugin

```shell
 npm install --save-dev html-webpack-plugin
```

-   在webpack.config.js中引入html-webpack-plugin

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

-   使用:

```js
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Output Management'
     })
   ],
```

-   最后运行npx webpack

此时目录树为

```
├─package.json
├─webpack.config.js
├─yarn.lock
├─src
|  └haha.js
├─dist
|  ├─bundle.js
|  └index.html  // 自动生成的html文件
```

## 编译css文件

-   [官方文档地址css-loader](https://www.webpackjs.com/loaders/css-loader/)

-   使用

```cmd
npm install --save-dev css-loader
# css-loader依赖style-loader 所以还得安装style-loader
```

-   **webpack.config.js**配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

-   npx webpack

```
├─package.json
├─webpack.config.js
├─yarn.lock
├─src
|  ├─index.js
|  ├─css
|  |  └index.css
├─dist
|  ├─bundle.js
|  └index.html
```

-   index.js

```js
require("./css/index.css");

let div = document.createElement("div");
div.innerHTML = "你好webpack css-loader and style-loader";
document.body.appendChild(div);

```

-   index.css

```css
div {
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

-   webpack.config.js

```js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 输入文件
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出路径
    path: path.resolve(__dirname, "dist"),
    // 输出文件名
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "自动生成html",
    }),
  ],
  module: {
    rules: [
      {
        //编译css文件
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

```

-   官方文档

    -    [webpack3.0以下使用](https://github.com/webpack-contrib/extract-text-webpack-plugin)

    -   [webpack4.0以上使用](https://github.com/webpack-contrib/mini-css-extract-plugin)