import {
  defineConfig
} from 'vitepress'

export default defineConfig({
  title: '数据结构与算法',
  description: '数据结构与算法',
  lang: "zh-CN",
  themeConfig: {
    repo:"/",
    docsDir: 'docs',
    nav: [{
      text: '文档',
      link: '/guide/01-什么是数据结构'
    }],

    // sidebar
    sidebar: {
      '/guide/': [
        {
          text: "什么是数据结构",
          link: "/guide/01-什么是数据结构"
        },
        {
          text: "什么是算法",
          link: "/guide/02-什么是算法"
        }
      ]
    },
    editLinks:true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    algolia: {
      apiKey: '',
      indexName: 'vitepress'
    },
  },
  markdown: {
    lineNumbers: true
  }
})