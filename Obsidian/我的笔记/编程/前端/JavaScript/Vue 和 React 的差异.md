---
tags : 
- Vue
- React
---


相同点：
	数据驱动视图
	组件化
	都使用 Virtual DOM
不同点：
	核心思想不同：React：React推崇函数式编程（纯组件），数据不可变以及单向数据流,当然需要双向的地方也可以手动实现， 比如借助onChange和setState来实现。Vue：灵活易用的渐进式框架，进行数据拦截/代理，它对侦测数据的变化更敏感、更精确
	组件写法不同：react：JSX + inline style vue：template
	diff算法不同
	响应式原理不同：
Vue依赖收集，自动优化，数据可变。
Vue递归监听data的所有属性,直接修改。
当数据改变时，自动找到引用组件重新渲染。

React基于状态机，手动优化，数据不可变，需要setState驱动新的state替换老的state。当数据改变时，以组件为根目录，默认全部重新渲染, 所以 React 中会需要 shouldComponentUpdate 这个生命周期函数方法来进行控制