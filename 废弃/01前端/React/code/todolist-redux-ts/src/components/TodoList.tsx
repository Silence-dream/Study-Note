import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store/reducer";
import { changeStatusAction } from "../store/action";

export default function TodoList() {
  const state = useSelector((state: RootReducer) => state);
  const dispatch = useDispatch();

  function fn(id: number) {
    dispatch(changeStatusAction(id));
  }

  return (
    <>
      <ul>
        {state.map((item) => {
          
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
