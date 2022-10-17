import * as types from "./actionType";
import {StateProps} from "./reducer";

export const addAction=(todo:StateProps)=>{
  return{
    type: types.ADD,
    todo
  }
}

// 修改完成状态
export const changeStatusAction=(id:number)=>{
  return{
    type: types.CHANGE_STATUS,
    id
  }
}

// 已经完成
export const finishAction=()=>{
  return{
    type: types.FINISH,
  }
}

export const showAll = () => {
  return {
    type: types.SHOW_ALL
  }
}
