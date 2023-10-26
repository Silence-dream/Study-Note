import {
  createStore
} from 'redux'

let initState = {
  conut: 0
}
const reducer = (state = initState, action) => {
  console.log(state)
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        conut: state.conut + 1
      }
      default:
        return state;
  }
}

let stroe = createStore(reducer)

export default stroe;