import React, {useCallback, useState} from 'react';
import {useSelector, useStore} from "react-redux"
import {State} from "../store";

function ReduxStore () {
  //https://stackoverflow.com/questions/61292433/react-js-and-redux-useselector-vs-usestore
  //https://codesandbox.io/s/react-redux-hooks-rvxud?file=/src/index.js
  let store = useStore ()
  let result = store.getState()
  let [,updateState] = useState ({})
  let forceUpdate = useCallback (
    () => {
      updateState({})
    },
    [],
  );
  // let count = useSelector((state: State) => state.count)
  return (
    <div>
      <h1>Redux</h1>
      <p>{result.count}</p>
      {/*<p>{count}</p>*/}
      <button onClick={()=>store.dispatch({type:"add"})}>修改count</button>
      <button onClick={()=>forceUpdate()}>强制更新</button>
    </div>
  );
}

export default ReduxStore;
