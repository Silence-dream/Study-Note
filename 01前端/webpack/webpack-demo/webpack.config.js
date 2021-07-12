const path = require("path");
const { title } = require("process");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 编译打包的模式  mode: 'development' 开发带注释,不压缩  production 产品不带注释,压缩
  mode: "production",
  //入口 entry
  entry: "./src/main.js",
  // 出口 output
  output: {
    //出口路径
    path: path.resolve(__dirname, "dist"),
    // 输出文件的名称
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "123",
    }),
  ],
};
