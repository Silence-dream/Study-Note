import React from "react";
import {useDispatch} from "react-redux";
import {showAll, showCompleted,showUncompleted} from "../store/actions/index.js";

export default function Tfooter() {
    const dispatch = useDispatch();
  function handleAll(){
    dispatch(showAll());
  }
  return (
    <>
      选择:
      <button onClick={handleAll}>all</button>
      <button onClick={()=>dispatch(showCompleted())}>已完成</button>
      <button onClick={()=>dispatch(showUncompleted())}>未完成</button>
    </>
  );
}
