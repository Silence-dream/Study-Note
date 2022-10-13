import { createStore } from "vuex";

// 引入axios
import axios from "axios";

export default createStore({
  state() {
    return {
      // 活动周数
      level: "第一周",
      questions: []
    };
  },
  mutations: {
    // 初始化数据
    initData(state, payload) {
      console.log(payload);
      state.questions = payload.data;
    }
  },
  actions: {
    // 获取数据
    async getData(context) {
      let res = await axios.get("/data/question.json");
      context.commit("initData", res);
    }
  },
  modules: {}
});
