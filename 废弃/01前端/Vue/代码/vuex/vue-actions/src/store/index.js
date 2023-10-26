import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      store: "hello vuex",
      count: 0
    };
  },
  mutations: {
    countAdd(state, val) {
      state.count += val;
    }
  },
  // 异步方法
  actions: {
    asycnAdd(context, val) {
      console.log(context);
      // console.log(this);
      // 通过context中的commit方法触发 mutations里面的方法
      setInterval(function() {
        context.commit("countAdd", val);
      }, 1000);
    }
  }
});
