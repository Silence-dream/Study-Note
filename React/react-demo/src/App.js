import "./App.css";
import Fncom from "./components/Fncom/index.jsx";
import Classcom from "./components/Classcom/index.jsx";
import Refcom from "./components/Refcom/index.jsx";
import Father from "./components/Fathercom/index.jsx";
import ContextFatherToSon from "./components/Context/index.jsx";
import LifeCycle from "./components/life-cycle/index.jsx";
function App() {
  return (
    <div id="box">
      <Fncom></Fncom>
      <Classcom></Classcom>
      <Refcom></Refcom>
      <Father></Father>
      <ContextFatherToSon></ContextFatherToSon>
      <LifeCycle></LifeCycle>
    </div>
  );
}

export default App;
