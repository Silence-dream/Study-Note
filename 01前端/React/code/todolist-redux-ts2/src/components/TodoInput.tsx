import {useDispatch} from "react-redux";
import {addAction} from "../store/action";

export default function TodoInput () {

  const dispatch = useDispatch();
  const fn=()=>{
      dispatch(addAction({
          id:Math.random(),
          text:'新增的todo',
          isCompleted:false
      }))
  }

  return (
    <>
      <input type="text"/>
      <button onClick={fn}>添加</button>
    </>
  );
}
