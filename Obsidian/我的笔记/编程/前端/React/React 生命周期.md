---
tags : 
- React
- 生命周期
---
组件的生命周期可分成三个状态：

-   Mounting(挂载)：已插入真实 DOM
-   Updating(更新)：正在被重新渲染
-   Unmounting(卸载)：已移出真实 DOM

[React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202205191644069.png)



## 挂载
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

-   [**`constructor()`**](https://zh-hans.reactjs.org/docs/react-component.html#constructor)
-   [`static getDerivedStateFromProps()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
-   [**`render()`**](https://zh-hans.reactjs.org/docs/react-component.html#render)
-   [**`componentDidMount()`**](https://zh-hans.reactjs.org/docs/react-component.html#componentdidmount)


注意:

下述生命周期方法即将过时，在新代码中应该[避免使用它们](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)：

-   [`UNSAFE_componentWillMount()`](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillmount)

## 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

-   [`static getDerivedStateFromProps()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
-   [`shouldComponentUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)
-   [**`render()`**](https://zh-hans.reactjs.org/docs/react-component.html#render)
-   [`getSnapshotBeforeUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
-   [**`componentDidUpdate()`**](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)

注意:

下述方法即将过时，在新代码中应该[避免使用它们](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html)：

-   [`UNSAFE_componentWillUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
-   [`UNSAFE_componentWillReceiveProps()`](https://zh-hans.reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)


## 卸载

当组件从 DOM 中移除时会调用如下方法：

-   [**`componentWillUnmount()`**](https://zh-hans.reactjs.org/docs/react-component.html#componentwillunmount)


## 常用生命周期方法

- render()
	- 组件渲染
- constuctor()
	- 组件挂载前会调用 constuctor()
	- 通常用于初始化 this.state 赋值对象
	- 为事件处理函数绑定实例
- componentDidMount()
	- 组件挂载后调用
	- 通常用于请求发起或者调用 setState()
- componentDidupdate(prevProps,prevState,snapshot)
	- 在更新后调用此方法，首次渲染不会调用此方法
	- 如果 shouldComponentUpdate() 返回 false 则不会调用 componentDidUpdate()
	- 可以直接调用 setState() 但是要记得放入条件语句内，不然会重复调用，导致死循环
- componentWillUmont()
	- 组件卸载的时候调用
	- 一般用于清理 timer、取消网络请求