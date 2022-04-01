import { setVisibilityFilter, VisibilityFilters} from "../store/action";
import {useDispatch} from "react-redux";

export default function TodoFiltrate () {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>all</button>
      <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>已经完成</button>
      <button onClick={()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>未完成</button>
    </>
  );
}
