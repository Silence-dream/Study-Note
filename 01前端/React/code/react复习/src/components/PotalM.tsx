import React from 'react';
import ReactDOM from "react-dom";

function PotalM () {
  return ReactDOM.createPortal (
    <div>
      <h1>Portal</h1>
      <span>F12 查看渲染在了 app</span>
    </div>,
    document.getElementById ("app") as HTMLElement
  )
}

export default PotalM;
