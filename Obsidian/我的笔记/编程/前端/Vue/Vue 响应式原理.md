---
tags : 
- Vue
- Vue 原理
---

Vue不支持IE8以下版本的浏览器，因为Vue是基于 Object.defineProperty 来实现数据响应的，而Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因；Vue通过Object.defineProperty的 getter/setter 对收集的依赖项进行监听,在属性被访问和修改时通知变化,进而更新视图数据；
受现代JavaScript 的限制 (以及废弃 Object.observe)，Vue不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让Vue转换它，这样才能让它是响应的。
shim:shim可以将新的API引入到旧的环境中，而且仅靠就环境中已有的手段实现。意思就是Object.defineProperty这个特性是无法使用低级浏览器中的方法来实现的，所以Vue不支持IE8以及更低版本的浏览器。
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲 染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者， 一旦数据有变动，收到通知，更新视图。
第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
	1、在自身实例化时往属性订阅器(dep)里面添加自己
	2、自身必须有一个 update()方法
	3、待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile 中绑定的回调，则功成身退。
第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模 板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据 变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。