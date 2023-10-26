import { createStore } from "vuex";
// 请求数据的
import axios from "axios";
export default createStore({
  state() {
    return {
      list: [],
      viewkey: "all"
    };
  },
  mutations: {
    // 载荷 payload
    // 初始化数据
    initData(state, payload) {
      // 把state中的数据进行修改
      state.list = payload.data;
      // console.log(state.list);
    },

    // 添加数据
    createData(state, payload) {
      state.list.push({
        id: new Date().valueOf(),
        info: payload,
        done: false
      });
    },

    // 删除数据
    deleteData(state, payload) {
      // 找到和传过来的id一样的对象的索引
      let index = state.list.findIndex(item => item.id == payload);
      // 用数组splice方法切割数组
      state.list.splice(index, 1);
    },

    // 更新数据
    updateData(state, payload) {
      // 找对象
      let index = state.list.findIndex(item => item.id == payload.id);
      // 改变对象的属性
      state.list[index].done = payload.status;

      // console.log(state.list);
    },

    // 清除已完成任务
    cleanData(state) {
      // 因为我们要清除的已完成的任务，所以只需要挑出未完成的任务给list，那么显示的就是未完成的任务
      state.list = state.list.filter(item => item.done == false);
    },
    // 改变viewkey的值(all undone done)
    changeKey(state, payload) {
      state.viewkey = payload;
    }
  },
  actions: {
    // 通过异步axios获取数据
    async getData(context) {
      // 使用axios请求list.json数据
      let res = await axios.get("/list.json");
      console.log(res);
      // 调用mutation中的方法对数据进行修改
      context.commit("initData", res);
    }
  },
  getters: {
    surplus(state) {
      // 挑出属性done为false的对象 添加到data这个数组中
      let data = state.list.filter(item => item.done == false);
      // 返回数组的长度
      return data.length;
    },
    filterList(state) {
      // console.log(state.viewkey)
      if (state.viewkey == "all") {
        return state.list;
      }

      if (state.viewkey == "undone") {
        return state.list.filter(item => item.done == false);
      }

      if (state.viewkey == "done") {
        return state.list.filter(item => item.done == true);
      }
    }
  }
});
