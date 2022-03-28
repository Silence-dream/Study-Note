const initialState = {
  todos: [{
    id: 1,
    text: 'Learn Redux',
    isActive: false
  }]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(111)
      return {
        ...state,
        todos: [...state.todos, action.text]
      }
      default:
        return state
  }
}


export default reducer;