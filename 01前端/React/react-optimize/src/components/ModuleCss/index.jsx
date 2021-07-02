import React, {Component} from 'react';
import ModuleStyle from "./index.module.css";



class Index extends Component {
  render() {
    return (
        <div>
          <h1 className={ModuleStyle.hello}>
            <span>css 模块化</span>
          </h1>
        </div>
    );
  }
}

export default Index;