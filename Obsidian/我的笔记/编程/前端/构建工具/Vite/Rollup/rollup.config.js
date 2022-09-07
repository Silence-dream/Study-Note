// rollup.config.js
// 解析引入包
import resolve from "@rollup/plugin-node-resolve";
// 解析commjs
import commonjs from "@rollup/plugin-commonjs";
// 压缩代码
import { terser } from 'rollup-plugin-terser'

/* 
 * @rollup/plugin-json： 支持.json的加载，并配合rollup的Tree Shaking机制去掉未使用的部分，进行按需打包。
 * @rollup/plugin-babel：在 Rollup 中使用 Babel 进行 JS 代码的语法转译。
 * @rollup/plugin-typescript: 支持使用 TypeScript 开发。
 * @rollup/plugin-alias：支持别名配置。
 * @rollup/plugin-replace：在 Rollup 进行变量字符串的替换。
 * rollup-plugin-visualizer: 对 Rollup 打包产物进行分析，自动生成产物体积可视化分析图。
*/
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],
  output: [
    {
      // 产物输出目录
      dir: "dist/es",
      // 产物格式
      format: "esm",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  plugins: [resolve(), commonjs(),terser()],
};

export default buildOptions;
