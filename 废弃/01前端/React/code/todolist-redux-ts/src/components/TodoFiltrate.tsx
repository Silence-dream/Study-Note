import {finishAction, showAll} from "../store/action";
import {useDispatch} from "react-redux";

export default function TodoFiltrate () {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=>dispatch(showAll())}>all</button>
      <button>已经完成</button>
      <button onClick={()=>dispatch(finishAction())}>未完成</button>
    </>
  );
}
