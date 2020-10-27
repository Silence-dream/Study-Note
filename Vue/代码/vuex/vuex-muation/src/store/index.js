import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: "李四"
    };
  },
  // 相当于 methods
  mutations: {
    // 传入state才可以访问state里面的数据
    changeName(state) {
      console.log(1);
      // console.log(state)
      state.name = "张三";
    }
  },
  actions: {},
  modules: {}
});
