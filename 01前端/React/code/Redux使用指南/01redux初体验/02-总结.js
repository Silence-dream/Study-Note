// 1.引入 redux 包
const redux = require("redux");

const defaultState = {
  msg: "hello redux",
};

// 2.创建 stote
const store = redux.createStore(reducer);

// 3.创建 reducer 初始化数据
function reducer(state = defaultState, action) {
  console.log("我被触发了");
  switch (action.type) {
    case "ADD":
      return { ...state, age: action.age };
    default:
      return state;
  }
}

// 4. 调用 action 修改 state
let action = {
  type: "ADD",
  age: 18,
};
// 调用完成之后会触发 reducer
store.dispatch(action);
// 5. 查看 state 是否修改
console.log(store.getState());
