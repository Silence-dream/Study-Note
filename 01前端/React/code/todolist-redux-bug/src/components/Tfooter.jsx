import React from "react";
import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {showAll, showCompleted,showUncompleted} from "../store/actions/index.js";

export default function Tfooter() {
    const dispatch = useDispatch();
  function handleAll(){
    dispatch(showAll());
  }
  function test(){
    const dispatch = useDispatch()
    return bindActionCreators({increment: ()=>{}, save_message: () =>{}},dispatch) // {increment: ƒ, save_message: ƒ}
  }
  console.log(test())
  return (
    <>
      选择:
      <button onClick={handleAll}>all</button>
      <button onClick={()=>dispatch(showCompleted())}>已完成</button>
      <button onClick={()=>dispatch(showUncompleted())}>未完成</button>
      <button onClick={test}>测试按钮</button>
    </>
  );
}
