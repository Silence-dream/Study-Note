import React from "react";
const WidthMouse = (Params) => {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      window.addEventListener("mousemove", this.fn);
    }

    fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    
    render() {
      // return <Params x={this.state.x} y={this.state.y}></Params>
      return <Params {...this.state}></Params>;
    }
  }
  
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  Mouse.displayName = `WithMouse${getDisplayName(Params)}`

  // Mouse.displayName=Params.name
  // console.dir(Mouse);
  return Mouse;
};

export default WidthMouse;
