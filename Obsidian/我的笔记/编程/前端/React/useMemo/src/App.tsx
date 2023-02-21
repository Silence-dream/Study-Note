import React, { useMemo, useState } from "react";
import Fibonacci from "./components/Fibonacci";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Fibonacci n={34} />
    </>
  );
}

export default App;
