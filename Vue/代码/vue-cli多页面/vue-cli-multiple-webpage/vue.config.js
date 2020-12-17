module.exports = {
  // 多页面修改
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      fileName: "index.html",
      title: "index"
    },
    page1: {
      entry: "src/pages/page1/main.js",
      template: "public/index.html",
      fileName: "page1.html",
      title: "我是page1"
    },
    page2: {
      entry: "src/pages/page2/main.js",
      template: "public/index.html",
      fileName: "page2.html",
      title: "page2"
    },
    page3: {
      entry: "src/pages/page3/main.js",
      template: "public/index.html",
      fileName: "page3.html",
      title: "page3"
    }
  }
};
