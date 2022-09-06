import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import path from "path"
// 把svg当成组件使用
import svgr from 'vite-plugin-svgr';
// svg 合并成雪碧图
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), createSvgIconsPlugin({
    iconDirs: [path.join(__dirname, 'src/assets')]
  })],
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie > 8', 'iOS > 8', 'Android > 4.4']
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@assets": path.join(__dirname, "src/assets"),
    }
  }

})

