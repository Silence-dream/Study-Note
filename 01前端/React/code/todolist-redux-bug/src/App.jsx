import "./App.css";
import TContext from "./components/TContext";
import THeader from "./components/THeader";
import Tfooter from "./components/Tfooter";
function App() {
  return (
    <div className="App">
      <THeader />
      <TContext />
      <Tfooter />
    </div>
  );
}

export default App;
