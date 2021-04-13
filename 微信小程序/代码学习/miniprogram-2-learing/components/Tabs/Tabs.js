// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    clickCurrent(e) {
      // 得到点击的索引
      /* 
      触发父组件中的自定义事件同时传递数据给父组件
      this.triggerEvent（“父组件自定义事件的名称"，要传递的参数）
       */
      let { index } = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
      // let { tabs } = this.data;
      // tabs.forEach((v, i) => {
      //   if (i == index) {
      //     v.isActive = true;
      //   } else {
      //     v.isActive = false;
      //   }
      // });
      // this.setData({
      //   tabs,
      // });
    },
  },
});
