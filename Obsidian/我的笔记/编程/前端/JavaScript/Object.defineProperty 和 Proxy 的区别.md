---
tags : 
- JavaScript
---

1. Proxy 的优势如下: Proxy 可以直接监听对象而非属性； Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has等等是Object.defineProperty 不具备的；
Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的 新标准的性能红利；
2. Object.defineProperty 的优势如下: 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill。