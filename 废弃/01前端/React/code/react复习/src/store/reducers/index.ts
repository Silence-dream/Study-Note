import {combineReducers} from "redux"
import CountReducer from "./count";
import MessageReducer from "./message";


const rootReducer = combineReducers ({
  counter: CountReducer,
  message: MessageReducer
})

export default rootReducer
