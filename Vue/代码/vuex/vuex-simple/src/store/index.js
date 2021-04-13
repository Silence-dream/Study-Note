import { createStore } from "vuex";

export default createStore({
  // state提供唯一的公共数据源，所有共享的数据都要统一放到Store的state中进行存储
  state() {
    return {
      name: "李四"
    };
  },
  // 用于修改store中的数据
  mutations: {},
  // actions 用于处理异步任务
  actions: {},
  // getters 用于对stote中的数据进行加工处理形成新的数据
  getters: {}
});
