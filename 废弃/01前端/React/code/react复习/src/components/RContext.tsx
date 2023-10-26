import {createContext, useContext, useEffect, useState} from "react";

export const AppContenxt = createContext(undefined);


export default function RContext() {
  return<>
    <AppProvider>
      <Foo />
      <Bar />
    </AppProvider>
  </>
}




export function AppProvider({ children }) {
  const [state, setState] = useState({
    foo: "foo context",
    bar: "bar context",
  });
  return (
    <AppContenxt.Provider value={[state, setState]}>
      {children}
    </AppContenxt.Provider>
  );
}


function Foo() {
  const [appContext, setAppContext] = useContext(AppContenxt);
  useEffect(() => {
    console.log("Foo render");
  });
  const onClickHandler = () => {
    setAppContext((state) => ({ ...state, foo: "foo contenxt changed" }));
  };
  return (
    <div>
      {appContext.foo} <button onClick={onClickHandler}>foo button</button>
    </div>
  );
}

export  Foo;

function Bar() {
  const [appContext] = useContext(AppContenxt);
  useEffect(() => {
    console.log("Bar render");
  });
  return <div>{appContext.bar}</div>;
}

export  Bar;
