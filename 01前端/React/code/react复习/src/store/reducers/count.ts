const initialState = {
  count: 0
};

export default function CountReducer (state=initialState, action:any) {
  switch (action.type) {
    case "add":
      return {...state, count: state.count + 1}
    case "addAction":
      return {...state, count: state.count+action.payload}
    default:
      return state
  }
}
