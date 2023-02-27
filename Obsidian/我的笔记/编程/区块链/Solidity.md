---

tags :

- Solidity

---

## 中文solidity资料推荐：

1.  [Solidity中文文档](https://solidity-cn.readthedocs.io/zh/develop/introduction-to-smart-contracts.html)（官方文档的中文翻译）
    
2.  [崔棉大师solidity教程](https://space.bilibili.com/286084162) web3技术教学博主
  

## Solidity 简单叙述

`Solidity`是以太坊虚拟机（`EVM`）智能合约的语言。同时，`solidity`是玩链上项目必备的技能：区块链项目大部分是开源的，如果你能读懂代码，就可以规避很多亏钱项目。

总的来说不会 Solidity 退圈吧.


## 开发工具 remix

本教程中，我会用`remix`来跑`solidity`合约。`remix`是以太坊官方推荐的智能合约开发IDE（集成开发环境），适合新手，可以在浏览器中快速部署测试智能合约，你不需要在本地安装任何程序。


网址：[remix.ethereum.org](https://remix.ethereum.org/)


![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271437449.png)


## Hello World

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract HelloWeb3{
    string public _string = "Hello Web3!";
}
```

逐行分析代码

1.  第1行是注释，会写一下这个代码所用的软件许可（license），这里用的是MIT license。如果不写许可，编译时会警告（warning），但程序可以运行。solidity的注释由“//”开头，后面跟注释的内容（不会被程序运行）。

```solidity
// SPDX-License-Identifier: MIT
```

2.  第2行声明源文件所用的solidity版本，因为不同版本语法有差别。这行代码意思是源文件将不允许小于 0.8.4 版本或大于等于 0.9.0 的编译器编译（第二个条件由`^`提供）。Solidity 语句以分号（;）结尾。

```solidity
pragma solidity ^0.8.4;
```

3.  第3-4行是合约部分，第3行创建合约（contract），并声明合约的名字 HelloWeb3。第4行是合约的内容，我们声明了一个string（字符串）变量_string，并给他赋值 “Hello Web3”。

```solidity
contract HelloWeb3{
    string public _string = "Hello Web3!";
}
```

## 编译并部署代码

在编辑代码的页面，按ctrl+S就可以编译代码，非常方便。

编译好之后，点击左侧菜单的“部署”按钮，进入部署页面。


![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271501055.png)

在默认情况下，remix会用JS虚拟机来模拟以太坊链，运行智能合约，类似在浏览器里跑一条测试链。并且remix会分配几个测试账户给你，每个里面有100 ETH（测试代币），可劲儿用。你点Deploy（黄色按钮），就可以部署咱们写好的合约了。

成功部署之后就会出现 Web3
![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271502553.png)


### Solidity中的变量类型

1.  **数值类型(Value Type)**：包括布尔型，整数型等等，这类变量赋值时候直接传递数值。
2.  **引用类型(Reference Type)**：包括数组和结构体，这类变量占空间大，赋值时候直接传递地址（类似指针）。
3.  **映射类型(Mapping Type)**: `Solidity`里的哈希表。
4.  **函数类型(Function Type)**：`Solidity`文档里把函数归到数值类型，但我觉得他跟其他类型差别很大，所以单独分一类。

以上是一些常用类型.


## 地址类型

地址类型(address)有两类：

-   普通地址（address）: 存储一个 20 字节的值（以太坊地址的大小）。
-   payable address: 比普通地址多了`transfer`和`send`两个成员方法，用于接收转账。

我们会在之后的章节更加详细的介绍地址类型。