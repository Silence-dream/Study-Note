import { connect, useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store/reducer";
import { changeStatusAction, VisibilityFilters } from "../store/action";

function TodoList(props:Props) {
  const state = useSelector((state: RootReducer) => state);
  const dispatch = useDispatch();
  function fn(id: number) {
    dispatch(changeStatusAction(id));
  }
  console.log("1111",props);
  return (
    <>
      <ul>
        {props.todo.map((item:any) => {
          
          return (
            <li
              className={item.isCompleted ? "active" : ""}
              onClick={() => fn(item.id)}
              key={item.id}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}
const getVisibleTodos = (state:RootReducer, filter:any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return state;
    case VisibilityFilters.SHOW_COMPLETED:
      return {todo:state.todo.filter(t => t.isCompleted)}
    case VisibilityFilters.SHOW_ACTIVE:
      return {todo:state.todo.filter(t => !t.isCompleted)}
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state:RootReducer) =>{
  return getVisibleTodos(state,state.visibility)
}
type Props = ReturnType<typeof mapStateToProps>
export default connect(mapStateToProps)(TodoList);
