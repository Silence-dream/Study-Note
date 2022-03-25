import React from "react";
import { useStore, useDispatch,useSelector } from "react-redux";

export function StoreChanger() {
  const store = useStore();
  console.log(store.getState())
  const dispatch = useDispatch();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  // const {check2}= useSelector(state => ({
  //   check2: state.reducer1.check2,
  // }));
  return (
    <div>
      <div>
        <p>这里是用useStore获取的数据</p>
        Direct store access, check2:{" "}
        {store.getState().reducer1.check2.toString()}
        <br />
        {/* {check2.toString()} */}
      </div>
      <button onClick={() => store.dispatch({ type: "CHECK2" })}>CHeck2</button>

      <button onClick={forceUpdate}>Update me</button>
    </div>
  );
}
