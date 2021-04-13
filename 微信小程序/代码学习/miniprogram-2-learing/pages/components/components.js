// pages/components/components.js
Page({
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true,
      },
      {
        id: 1,
        name: "原创",
        isActive: false,
      },
      {
        id: 2,
        name: "分类",
        isActive: false,
      },
      {
        id: 3,
        name: "关于",
        isActive: false,
      },
    ],
  },
  itemChange(e) {
    console.log(e);
    let { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => {
      if (i == index) {
        v.isActive = true;
      } else {
        v.isActive = false;
      }
    });
    this.setData({
      tabs,
    });
  },
});
