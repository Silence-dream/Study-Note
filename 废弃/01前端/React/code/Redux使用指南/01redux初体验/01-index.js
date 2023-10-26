const redux = require("redux");
// 定义数据
const initialState = {
  count: 0,
  list: [1, 3, 4, 2, 3],
};
function fn(state = initialState, action) {
  // 这里接收到新的 action
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      state.msg = action.msg;
      return state;
    default:
      return state;
  }
}
// 创建 Store
const store = redux.createStore(fn);
// 获取数据
// console.log(store.getState()); // { count: 0, list: [ 1, 3, 4, 2, 3 ] }

// 监听 state 变化
store.subscribe(() => {
  console.log("变化了");
});
const action = {
  type: "ADD_TODO",
  msg: "Hello Redux",
};
// 派发 action
store.dispatch(action);
console.log(store.getState());
