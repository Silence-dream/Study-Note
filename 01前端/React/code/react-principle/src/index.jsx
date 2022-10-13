import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}
ReactDom.render(<App />,document.getElementById("root"))