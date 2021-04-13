import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      list: []
    };
  },
  // 修改数据只能在mutations里面修改
  mutations: {
    // 初始化数据
    initList(state, data) {
      state.list = data;
    },
    // 删除数据
    deleteListItem(state, id) {
      let result = state.list.filter(item => {
        // console.log(item);
        // 返回删除之后的数据
        return item.id != id;
      });
      state.list = result;
    },
    // 获取input的状态变化修改list数据
    changeList(state, payload) {
      // console.log(state);
      // console.log(payload);
      let { e, id } = payload;
      let index = state.list.findIndex(item => {
        return item.id == id;
      });
      state.list[index].done = e.target.checked;
      console.log(state.list);
    }
  },
  // 操作异步 但是不能修改数据
  actions: {
    // 1 获取数据
    async getList(context) {
      let result = await axios.get("list.json");
      // console.log(this);
      // console.log(context);
      context.commit("initList", result.data);
      // this.commit("initList", result.data);
    }
  },
  getters: {}
});
