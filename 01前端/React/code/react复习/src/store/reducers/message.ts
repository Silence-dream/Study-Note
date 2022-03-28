const initialState = {message: "你好"}
export default function MessageReducer (state = initialState, action: any) {
  switch (action.type) {
    case "save_message":
      return {message: action.message}
    default:
      return state
  }
}
