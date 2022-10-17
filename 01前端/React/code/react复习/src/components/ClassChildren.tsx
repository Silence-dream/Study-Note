import React from 'react';

class ClassChildren extends React.Component {
  render() {
    return (
      <div id="ClassChildren">
        {this.props.children}
      </div>
    );
  }
}

export  default ClassChildren;
