import React, { Component } from 'react'
import Mouse from '../Mouse'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 写法一 */}
        <Mouse wdnmd={(mouse)=>(<div>{mouse.x}---{mouse.y}</div>)}></Mouse>
        {/* 写法二 */}
        {/* <Mouse>
          {(mouse)=>(<div>{mouse.x}---{mouse.y}</div>)}
        </Mouse> */}
      </div>
    )
  }
}
