import './App.css';
import ClassPure from "./components/ClassPure/index";
import FnMemo from "./components/FnMemo/index";
import Portal from "./components/Portal";
import Fragment from "./components/Fragment";
import ModuleCss from "./components/ModuleCss";




function App() {
  return (
      <div>
        <ClassPure></ClassPure>
        <FnMemo></FnMemo>
        <Portal></Portal>
        <Fragment></Fragment>
        <ModuleCss></ModuleCss>
      </div>
  );
}

export default App;
