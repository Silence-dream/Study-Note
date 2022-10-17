import React, { useState } from "react";
import "./App.css";
import UseState from "./components/UseState";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <UseState></UseState>
      </header>
    </div>
  );
}

export default App;
