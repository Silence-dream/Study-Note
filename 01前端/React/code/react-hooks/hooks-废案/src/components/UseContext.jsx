import { createContext, useContext } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = createContext(themes.light);
function UseContext() {
  return (
    <div className="use-state" style={{ border: "1px solid pink" }}>
      <h1>这里是 UseContext 组件</h1>
      <ThemeContext.Provider value={themes.dark}>
        <Son></Son>
      </ThemeContext.Provider>
    </div>
  );
}

function Son(props) {
  console.log("son", props);
  let theme = useContext(ThemeContext);
  console.log(theme);
  return <div>son</div>;
}

export default UseContext;
