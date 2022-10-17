const initialState = {
  todos: [{
    id: 1,
    text: 'Learn Redux',
    isActive: false
  }]
}
const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.text]
      }
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isActive: !todo.isActive
            }
          }
          return todo
        })
      }
    case "SHOW_ALL":
      // console.log(state)
      return {
        ...state
      }
    case "SHOW_COMPLETED":
      return {
        ...state.todos,
        todos: state.todos.filter(todo => todo.isActive)
      }
    case "SHOW_UNCOMPLETED":
      return {
        todos: state.todos.filter(todo => !todo.isActive)
      }
    default:
      return state
  }
}


export default reducer;
