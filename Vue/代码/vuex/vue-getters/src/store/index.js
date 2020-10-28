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
  getters: {
    computedNum(state) {
      return state.num;
    }
  }
});
