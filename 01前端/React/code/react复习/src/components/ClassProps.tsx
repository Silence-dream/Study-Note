import React from 'react'

class ClassProps extends React.Component<{
  name?: string
  age?: number
}> {
  render () {
    return (
      <>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
      </>
    )
  }
}
// 设置默认值 可能会被弃用 https://twitter.com/dan_abramov/status/1133878326358171650
(ClassProps as any).defaultProps = {
  name: 'John Doe',
  age: 30
}
export default ClassProps
