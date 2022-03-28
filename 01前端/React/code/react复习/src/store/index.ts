import {createStore} from "redux";

function reducer (state:any, action:any) {
  switch (action.type) {
    case "add":
      return {...state, count: state.count + 1}
    case "addAction":
      return {...state, count: state.count+action.payload}
    default:
      return state
  }
}

const store: State = createStore (reducer, {count: 0});

export type State = ReturnType<typeof reducer>;
export default store;
