import * as types from "./actionType"
import {combineReducers} from 'redux'
import {SHOW_ALL} from "./actionType";

export interface StateProps {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ActionProps {
  type: string;

  [key: string]: any
}

const todo = (state: StateProps[] = [], action: ActionProps) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.todo]
    case types.CHANGE_STATUS:
      return state.map (todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo
      })
    case types.FINISH:
      return state.filter (todo => todo.isCompleted === false)
    default :
      return state
  }
}
const visibility = (state = SHOW_ALL, action: ActionProps) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
const reducer = combineReducers ({
  todo,
  visibility
})

export type RootReducer = ReturnType<typeof reducer>
export default reducer
