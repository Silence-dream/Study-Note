---

tags :

- Solidity

---

## 中文solidity资料推荐：

1.  [Solidity中文文档](https://solidity-cn.readthedocs.io/zh/develop/introduction-to-smart-contracts.html)（官方文档的中文翻译）    
2. [Solidity入门 | WTF Academy](https://wtf.academy/solidity-start/)
3.  [崔棉大师solidity教程](https://space.bilibili.com/286084162) web3技术教学博主
4. [WTF-Solidity](https://github.com/AmazingAng/WTF-Solidity/)

  

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
![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202303011450407.png)


在编辑代码的页面，按ctrl+S就可以编译代码，非常方便。

编译好之后，点击左侧菜单的“部署”按钮，进入部署页面。


![](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271501055.png)

在默认情况下，remix会用JS虚拟机来模拟以太坊链，运行智能合约，类似在浏览器里跑一条测试链。并且remix会分配几个测试账户给你，每个里面有`100 ETH`（测试代币），可劲儿用。你点Deploy（黄色按钮），就可以部署咱们写好的合约了。

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

##  定长字节数组

字节数组`bytes`分两种:

-   定长: 属于数值类型，根据每个元素存储数据的大小分为 `byte`, `bytes8`, `bytes32` 等类型，每个元素最多存储 32 bytes数据。数组长度在声明之后不能改变。
-   不定长: 属于引用类型，数组长度在声明之后可以改变，包括 `bytes` 等，之后的章节会详细介绍。

代码：

```solidity
    // 固定长度的字节数组
    bytes32 public _byte32 = "MiniSolidity"; 
    bytes1 public _byte = _byte32[0]; 
```

上面代码中，`MiniSolidity`变量以字节的方式存储进变量`_byte32`。如果把它转换成`16进制`为，就是：`0x4d696e69536f6c69646974790000000000000000000000000000000000000000`

`_byte`变量的值为`_byte32`的第一个字节，即`0x4d`。

## 枚举 enum

枚举（`enum`）是`solidity`中用户定义的数据类型。它主要用于为`uint`分配名称，使程序易于阅读和维护。它与`C语言`中的`enum`类似，使用名称来代替从`0`开始的`uint`：

```solidity
    // 用enum将uint 0， 1， 2表示为Buy, Hold, Sell
    enum ActionSet { Buy, Hold, Sell }
    // 创建enum变量 action
    ActionSet action = ActionSet.Buy;
```


## 在remix上验证

查看变量

![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271558257.png)


![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202302271558012.png)


## Solidity中的函数

```solidity
    function <function name>(<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]
```

方括号中的是可写可不写的关键字

1.  `function`：声明函数时的固定用法，想写函数，就要以function关键字开头。
2.  `<function name>`：函数名。 
3.  `(<parameter types>)`：圆括号里写函数的参数，也就是要输入到函数的变量类型和名字。
4.  `{internal|external|public|private}`：函数可见性说明符，一共4种。

    -   `public`: 内部外部均可见。
    -   `private`: 只能从本合约内部访问，继承的合约也不能用。
    -   `external`: 只能从合约外部访问（但是可以用`this.f()`来调用，`f`是函数名）。
    -   `internal`: 只能从合约内部访问，继承的合约可以用。
    
    **Note 1**: 合约中定义的函数需要明确指定可见性，它们没有默认值。
    **Note 2**: `public|private|internal` 也可用于修饰状态变量。 `public`变量会自动生成同名的`getter`函数，用于查询数值。
    **Note 3**: 没有标明可见性类型的状态变量，默认为`internal`。
    
5.  `[pure|view|payable]`：决定函数权限/功能的关键字。`payable`（可支付的）很好理解，带着它的函数，运行的时候可以给合约转入`ETH`。`pure`和`view`的介绍见下一节。
    
6.  `[returns ()]`：函数返回的变量类型和名称。

我刚开始学`solidity`的时候，一直不理解`pure`跟`view`关键字，因为别的语言没有类似的关键字。`solidity`加入这两个关键字，我认为是因为[[gas]]。合约的状态变量存储在链上，`gas fee`很贵，如果不改变链上状态，就不用付`gas`。包含`pure`跟`view`关键字的函数是不改写链上状态的，因此用户直接调用他们是不需要付gas的（合约中非`pure`/`view`函数调用它们则会改写链上状态，需要付gas）。

在以太坊中，以下语句被视为修改链上状态：

1.  写入状态变量。
2.  释放事件。
3.  创建其他合约。
4.  使用`selfdestruct`.
5.  通过调用发送以太币。
6.  调用任何未标记`view`或`pure`的函数。
7.  使用低级调用（low-level calls）。
8.  使用包含某些操作码的内联汇编。

-   包含`pure`关键字的函数，不能读取也不能写入存储在链上的状态变量。
    
-  包含`view`关键字的函数，能读取但也不能写入状态变量。
    
-   不写`pure`也不写`view`，函数既可以读取也可以写入状态变量。

## 4.函数输出Return

### 返回值 return和returns

`Solidity`有两个关键字与函数输出相关：`return`和`returns`，他们的区别在于：

-   `returns`加在函数名后面，用于声明返回的变量类型及变量名；
-   `return`用于函数主体中，返回指定的变量。
```sol
  // 返回多个变量
    function returnMultiple()
        public
        pure
        returns (
            uint256,
            bool,
            uint256[3] memory
        )
    {
        return (1, true, [uint256(1), 2, 5]);
    }
    /* 
      上面这段代码中，我们声明了returnMultiple()函数将有多个输出：
      returns(uint256, bool, uint256[3] memory)，
      接着我们在函数主体中用return(1, true, [uint256(1),2,5])确定了返回值。
     */
```

### 命名式返回

我们可以在`returns`中标明返回变量的名称，这样`solidity`会自动给这些变量初始化，并且自动返回这些函数的值，不需要加`return`。

```sol
// 命名式返回
    function returnNamed()
        public
        pure
        returns (
            uint256 _number,
            bool _bool,
            uint256[3] memory _array
        )
    {
        _number = 2;
        _bool = false;
        _array = [uint256(3), 2, 1];
    }
    /* 
    在上面的代码中，我们用returns(uint256 _number, bool _bool, uint256[3] memory _array)
    声明了返回变量类型以及变量名。这样，我们在主体中只需要给变量_number，_bool和_array赋值就可以自动返回了。
     */
```


当然，你也可以在命名式返回中用`return`来返回变量：

```sol
    // 命名式返回，依然支持return
    function returnNamed2() public pure returns(uint256 _number, bool _bool, uint256[3] memory _array){
        return(1, true, [uint256(1),2,5]);
    }
```

### 结构赋值

`solidity`使用解构式赋值的规则，支持读取函数的全部或部分返回值。

```sol
		// 解构赋值
    function readReturn() public pure {
        // 先声明变量,接收函数的返回值
        uint256 number;
        bool _bool;
        uint256[3] memory _array;
        (number, _bool, _array) = returnNamed();
        // 不要的可以留空
        (, _bool, ) = returnNamed();
    }
```


## 5.变量数据存储和作用域 storage/memory/calldata

### Solidity中的引用类型

**引用类型(Reference Type)**：包括数组（`array`），结构体（`struct`）和映射（`mapping`），这类变量占空间大，赋值时候直接传递地址（类似指针）。由于这类变量比较复杂，占用存储空间大，我们在使用时必须要声明数据存储的位置。

### 数据位置

solidity数据存储位置有三类：`storage`，`memory`和`calldata`。不同存储位置的`gas`成本不同。`storage`类型的数据存在链上，类似计算机的硬盘，消耗`gas`多；`memory`和`calldata`类型的临时存在内存里，消耗`gas`少。大致用法：

1.  `storage`：合约里的状态变量默认都是`storage`，存储在链上。
    
2.  `memory`：函数里的参数和临时变量一般用`memory`，存储在内存中，不上链。
    
3.  `calldata`：和`memory`类似，存储在内存中，不上链。与`memory`的不同点在于`calldata`变量不能修改（`immutable`），一般用于函数的参数。例子：

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Value {
    function fCalldata(uint256[] calldata _x)
        public
        pure
        returns (uint256[] calldata)
    {
        //参数为calldata数组，不能被修改
        // _x[0] = 0; //这样修改会报错
        return (_x);
    }
}
```

![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202303011754022.png)


