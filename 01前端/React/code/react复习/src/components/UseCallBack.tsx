import {useCallback, useEffect, useState} from "react";

export  default function UseCallBack () {
  const [number, setNumber] = useState (1);
  const [dark, setDark] = useState (false);
  const styles = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const getItems = useCallback (() => {
    return [number, number + 1, number + 2];
  }, [number]);
  return (

    <div style={styles}>
      <h1>useCallback</h1>
      <input
        type="number"
        value={number}
        onChange={() => setNumber ((prev) => prev + 1)}
      />
      <button onClick={() => setDark ((dark) => !dark)}>button</button>
      <List getItems={getItems}/>
    </div>
  );
}

function List ({getItems}) {
  const [items, setItems] = useState ([]);

  useEffect (() => {
    setItems (getItems ());
    console.log ("update items");
  }, [getItems]);

  return (
    <div>
      {items.map ((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
