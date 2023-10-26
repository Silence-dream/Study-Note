---
title : react 进阶学习
date : 2022-03-14
---



## Jsx会被编译什么样的代码

书写一段 jsx 看看会变成什么?
```tsx
import { useState } from "react";
import React from 'react';
const TextComponent = ()=> <div> hello , i am function component </div> 
function App() {
  const [count, setCount] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="App">
      {/* element */}
      <div>Hello,world</div>
      {/* fragment */}
      <React.Fragment>
        <div>fragment</div>
      </React.Fragment>
      {/* 文本 */}
      这里是一段文字
      {/* 数组 */}
      {list.map(item=><h1 key={item}>{item}</h1>)}
      {/* 组件 */}
      <TextComponent></TextComponent>
      {/* 三元 */}
      {count > 0 ? <div>{count}</div> : <div>count的值为0</div>}
      {/* 函数 */}
      <button type="submit" onClick={()=>setCount(count+1)}>count</button>
    </div>
  );
}

export default App;
```

通过 bebal [查看编译](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAbzgVwM4FMDKMCGN1wC-cAZlBCHAERTo4DGMVA3AFCiSxwBKdjp5SgHJaDGELb0IAO1TwAKugAeMAMIVI09NPgBeOAAoAlLoB8cADwATYADdzAC3QAbZxDgAaOMDg5KJZGlGYBk4KXAZbXgLAHobezhWAKCYEOk4AEEwMGNEVjgwmTk4AG0pQJgvDDUICoBdOH00LFx8AwAGIzYCqVl4EudgOQamjGw8dAMSgEYvACYvAGYvABYvAFY6rvy4WhhkKHSDHYLrOzDnHFRUADk_dF0qLLAqUxOCxBiAKjgXdBAonAvjFCO9TvFTAAJFxuDwAd2gzissQhYM-PzIOAA5gCdECQWiLLwxAA6ABiUGxuJgbw-dMsEMxOKiKLstPpsWJjHJlOZOnZdIQ3zggHDTQA05vjQfS4IBN-MAM4mAejNAABygFbrEWAdW00UKfoAHU0AI36SrWDOQkkA4HLAfAgMwWBzTOAAa3QAE9dAhLf9CKZ3VbCLE7aYjFL6dq4HrAG9yhulFkUKnUES0_NisZqCaiAo-ocAkHKAYUUoyHynjzO04AB-BlshCFmB-uJsuAALgr9mrgBC3QA8CoAuOXarPswcFwsAv4o6_N0iwAI2QMBgoRgzrADyoqGQ45AlqocBkqkG9AdbuMZmq6gqBmrAGppkHTNXYpPpzIM732dtQaxlJx4FZ0CQcMhnPBnjYIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.6&externalPlugins=&assumptions=%7B%7D),得到关键代码

```js
function App() {
  const [count, setCount] = (0, _react.useState)(0);
  const [list] = (0, _react.useState)([1, 2, 3, 4, 5]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Hello,world"), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "fragment")), "\u8FD9\u91CC\u662F\u4E00\u6BB5\u6587\u5B57", list.map(item => /*#__PURE__*/_react.default.createElement("h1", {
    key: item
  }, item)), /*#__PURE__*/_react.default.createElement(TextComponent, null), count > 0 ? /*#__PURE__*/_react.default.createElement("div", null, count) : /*#__PURE__*/_react.default.createElement("div", null, "count\u7684\u503C\u4E3A0"), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    onClick: () => setCount(count + 1)
  }, "count"));
}
```

发现 jsx 会被编译成 React Element 的形式。

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)`

一个例子

```jsx
React.createElement("div",{className:"test",id:"app"},"HelloWorld")
// 渲染为
<div class="test" ,id="app">HelloWorld</div>
```

https://react.docschina.org/docs/jsx-in-depth.html

jsx 转换规则

| `jsx`元素类型     | `react.createElement` 转换后                      | `type` 属性                   |
| ----------------- | ------------------------------------------------- | ----------------------------- |
| `element`元素类型 | `react element`类型                               | 标签字符串，例如 `div`        |
| `fragment`类型    | `react element`类型                               | `symbol` `react.fragment`类型 |
| 文本类型          | 直接字符串                                        | 无                            |
| 数组类型          | 返回数组结构，里面元素被`react.createElement`转换 | 无                            |
| 组件类型          | `react element`类型                               | 组件类或者组件函数本身        |
| 三元运算 / 表达式 | 先执行三元运算，然后按照上述规则处理              | 看三元运算返回结果            |
| 函数执行          | 先执行函数，然后按照上述规则处理                  | 看函数执行返回结果            |



`React.Children.forEach` = `React.Children.toArray` + `Array.prototype.forEach`。

toArray 可以扁平化数组

## 什么是  React 组件?

React 组件分为两类，一类是 Class 组件，一类是 Function 组件。

### class 组件

在 class 组件中，除了继承 React.Component ，底层还加入了 updater 对象，组件中调用的 setState 和 forceUpdate 本质上是调用了 updater 对象上的 enqueueSetState 和 enqueueForceUpdate 方法。







