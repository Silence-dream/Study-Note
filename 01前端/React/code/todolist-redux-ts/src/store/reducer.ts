import * as types from "./actionType"

export interface StateProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ActionProps {
  type: string;

  [key: string]: any
}

const reducer = (state: StateProps[]=[], action: ActionProps) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.todo]
    case types.CHANGE_STATUS:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo
      })
    case types.FINISH:
      return state.filter(todo => todo.isCompleted === false)
    case types.SHOW_ALL:
      return state
    default :
      return state
  }
}

export type RootReducer = ReturnType<typeof reducer>
export default reducer

