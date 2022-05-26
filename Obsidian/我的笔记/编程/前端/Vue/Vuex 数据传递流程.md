---
tags : 
- Vuex
---

## Vuex 的基本使用
```js
// 引入VueX
import { createStore } from "vuex";

export default createStore({
  // state提供唯一的公共数据源，所有共享的数据都要统一放到Store的state中进行存储
  state() {
    return {
	    count:0
    };
  },
  // mutations用于修改Store中的数据 相当于methods
  mutations: {
	  fnm(state){}
  },
  // actions用于处理异步任务
  actions: {
	  fn(context){
		  // actions 中修改 state 一定要调用 mutations 里的方法
		  context.commit("fnm")
	  }
  },
  // getters 用于对Store中的数据进行加工处理形成新的数据。 相当于computed计算属性
  getters: {
	  num(state){
		  return state.count;
	  }
  }
});
```

## 调用流程


1、通过new Vuex.Store()创建一个仓库 state是公共的状态，state--->components渲染页面
2、在组件内部通过this.$store.state.属性 来调用公共状态中的state，进行页面的渲染。
3、当组件需要修改数据的时候，必须遵循单向数据流。通过this.$store.dispatch来触发actions中的方法
4、actions中的每个方法都会接受一个对象 这个对象里面有一个commit方法，用来触发mutations里面的方法
5、mutations里面的方法用来修改state中的数据 mutations里面的方法都会接收到2个参数 一个是store中的state另外一个是需要传递到参数
6、当mutations中的方法执行完毕后state会发生改变，因为vuex的数据是响应式的 所以组件的状态也会发生改变

