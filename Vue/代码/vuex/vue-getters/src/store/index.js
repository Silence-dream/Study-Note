import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      num: 0
    };
  },
  mutations: {
    addNum(state) {
      state.num++;
    }
  },
  // 相当于computed计算属性
  getters: {
    computedNum(state) {
      return state.num;
    }
  }
});
