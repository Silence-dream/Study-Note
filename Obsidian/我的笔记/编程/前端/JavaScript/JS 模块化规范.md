---
tags : 
- JavaScript
---

## 发展历史
![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202205182118716.png)

前端模块规范有三种：CommonJs,AMD和CMD。  
CommonJs用在服务器端，AMD和CMD用在浏览器环境  
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。  
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。\

AMD:提前执行（异步加载：依赖先执行）+延迟执行  
CMD:延迟执行（运行到需加载，根据顺序执行）

## CommonJS
每一个文件都可以当做一个模块

在服务器端：模块的加载是运行时同步加载的 node

在浏览器端：模块需要提前编译打包处理 browserify

暴露模块方式：module.exports=value

​ exports.xxx=value 暴露的本质是exports

引入模块方式：require(xxx)

## AMD
Asynchronous Module Definition

专门用于浏览器端，模块加载是异步的

定义暴露模块：

1，没有依赖模块

```js
define(function(){
  return 模块
})
```

2，有依赖模块
```js
define(['module1','module2'],function(m1,m2){
  使用m1/m2
}
```
引入使用模块：

```js
require(['module1','module2'],function(m1,m2){
  使用m1/m2
}
```


## CMD
**CMD(Common Module Definition)** ，通用模块定义，它解决的问题和AMD规范是一样的，只不过在模块定义方式和模块加载时机上不同，CMD也需要额外的引入第三方的库文件，`SeaJS`,`SeaJS`推崇一个模块一个文件

-   AMD/RequireJS的JS模块实现有很多不优雅的地方，主要原因不能以一种更好的管理模块的依赖加载和执行；
-   那么就出现了SeaJS，SeaJs遵循的是CMD规范，CMD规范在AMD的基础上改进的一种规范，解决了AMD对依赖模块的执行时机的问题；
-   SeaJS模块化的顺序是：模块化预加载=》主逻辑调用模块时才执行模块中的代码；
-   SeaJS的用法和AMD基本相同，并且融合了CommonJS的写法

  
### CMD 的使用

（对于模块的引入，具有同步和异步两中方式）

`define` 是一个全局函数，用来定义模块

`SeaJS`提供了`seajs.use`来加载模块

SeaJS的出现，是CommonJS在浏览器的践行者，并吸收了RequireJS的优点

## UMD（AMD + CommonJS）
CommonJS 适用于服务端，AMD、CMD 适用于web端，那么需要同时运行在这两端的模块就可以采用 UMD 的方法，使用该模块化方案，可以很好地兼容AMD、CommonJS语法。UMD 先判断是否支持Node.js的模块（exports）是否存在，存在则使用 node.js 模块模式。再判断是否支持 AMD（define是否存在），存在则使用AMD方式加载模块。由于这种通用模块解决方案的适用性强，很多JS框架和类库都会打包成这种形式的代码。

  
## ES6中的Module模块

ES6 规范只支持静态的导入和导出，ES Module 需要在编译时期进行模块静态优化，也就是必须要在编译时就能确定。

为什么要这么做，主要是两点：

1.  性能，在编译阶段即完成所有模块导入，如果在运行时进行会降低速度
2.  更好的检查错误，比如对变量类型进行检查


-   模块功能主要由两个命令构成：`export`和`import`
-   `export`用于暴露接口，`import`用于引入模块