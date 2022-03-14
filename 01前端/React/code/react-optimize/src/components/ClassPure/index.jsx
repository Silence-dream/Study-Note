import React, {PureComponent} from 'react';

class ClassPure extends PureComponent {
  state={
    msg:"hello 纯组件"
  }
  render() {
    return (
        <div>
          {this.state.msg}
          <span>测试</span>
        </div>
    );
  }
}

export default ClassPure;