import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
let defaultState = {
  msg: "123",
  async: "异步"
}

function reducer(state = defaultState, action) {
  console.log(action)
  switch (action.type) {
    case "MSG":
      return {
        ...state, msg: action.msg
      }
      case "ASYNC":
        return {
          ...state, async :action.async
        }
        default:
          return state
  }
}

export const asyncAction = function (dispatch) {
  fetch("http://localhost:8000/hello")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: "ASYNC",
        async: res.msg,
      });
    });
}
export const promiseAction = async function (dispatch) {
  let data = await (await fetch("http://localhost:8000/hello")).json()
  dispatch({
    type: "ASYNC",
    async: data.msg,
  });
}

// let store = createStore(reducer)
let store = createStore(reducer, applyMiddleware(thunk))

export default store