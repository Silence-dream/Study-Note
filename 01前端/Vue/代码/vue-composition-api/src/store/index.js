import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      msg: "here is vuex"
    };
  },
  mutations: {
    changeMsg(state) {
      state.msg = "msg被修改了";
    }
  },
  actions: {
    async fn() {
      let a;
      setTimeout(() => {
        a = 90;
      }, 0);
      a = 90;

      console.log(a);
    }
  },
  modules: {},
  getters: {
    msg(state) {
      return state.msg + "计算属性";
    }
  }
});
