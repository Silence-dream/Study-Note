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

#### 数据位置和赋值规则
在不同存储类型相互赋值时候，有时会产生独立的副本（修改新变量不会影响原变量），有时会产生引用（修改新变量会影响原变量）。规则如下：

1.  `storage`（合约的状态变量）赋值给本地`storage`（函数里的）时候，会创建引用，改变新变量会影响原变量。例子：

```solidity
    uint[] x = [1,2,3]; // 状态变量：数组 x

    function fStorage() public{
        //声明一个storage的变量 xStorage，指向x。修改xStorage也会影响x
        uint[] storage xStorage = x;
        xStorage[0] = 100;
    }
```

![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202303021433040.png)

2.  `storage`赋值给`memory`，会创建独立的复本，修改其中一个不会影响另一个；反之亦然。例子：

```solidity
    uint256[] x2 = [1, 2, 3]; // 状态变量：数组 x

    function fMemory() public view {
        //声明一个Memory的变量xMemory，复制x2。修改xMemory不会影响x2
        uint256[] memory xMemory = x2;
        xMemory[0] = 100;
        xMemory[1] = 200;
        uint256[] memory xMemory2 = x2;
        xMemory2[0] = 300;
    }
```

3.  `memory`赋值给`memory`，会创建引用，改变新变量会影响原变量。
    
4.  其他情况，变量赋值给`storage`，会创建独立的复本，修改其中一个不会影响另一个。

### 变量的作用域

`Solidity`中变量按作用域划分有三种，分别是状态变量（state variable），局部变量（local variable）和全局变量(global variable)

```solidity
contract Variables {
    uint public x = 1;
    uint public y;
    string public z;
}
```


我们可以在函数里更改状态变量的值：

```solidity
    function foo() external{
        // 可以在函数里更改状态变量的值
        x = 5;
        y = 2;
        z = "0xAA";
    }
```

#### 1. 状态变量

状态变量是数据存储在链上的变量，所有合约内函数都可以访问 ，`gas`消耗高。状态变量在合约内、函数外声明：

```solidity
contract Variables {
    uint256 public x = 1;
    uint256 public y = 2;
    string public z;
}
```

我们可以在函数里更改状态变量的值：

```solidity
    function foo() external {
        x = 5;
        y = 10;
        z = "0x0011";
    }
```

#### 2.局部变量

局部变量是仅在函数执行过程中有效的变量，函数退出后，变量无效。局部变量的数据存储在内存里，不上链，`gas`低。局部变量在函数内声明：

#### 3.全局变量

全局变量是全局范围工作的变量，都是`solidity`预留关键字。他们可以在函数内不声明直接使用：

```solidity
 // 全局变量
    function global() external view returns(address, uint, bytes memory){
      address sender = msg.sender; // 请求发起地址
      uint blockNum = block.number; // 当前区块高度
      bytes memory data = msg.data; // 请求数据
      return(sender, blockNum, data);
    }
```

在上面例子里，我们使用了3个常用的全局变量：`msg.sender`, `block.number`和`msg.data`，他们分别代表请求发起地址，当前区块高度，和请求数据。下面是一些常用的全局变量，更完整的列表请看这个[链接](https://learnblockchain.cn/docs/solidity/units-and-global-variables.html#special-variables-and-functions)：

-   `blockhash(uint blockNumber)`: (`bytes32`)给定区块的哈希值 – 只适用于256最近区块, 不包含当前区块。
-   `block.coinbase`: (`address payable`) 当前区块矿工的地址
-   `block.gaslimit`: (`uint`) 当前区块的gaslimit
-   `block.number`: (`uint`) 当前区块的number
-   `block.timestamp`: (`uint`) 当前区块的时间戳，为unix纪元以来的秒
-   `gasleft()`: (`uint256`) 剩余 gas
-   `msg.data`: (`bytes calldata`) 完整call data
-   `msg.sender`: (`address payable`) 消息发送者 (当前 caller)
-   `msg.sig`: (`bytes4`) calldata的前四个字节 (function identifier)
-   `msg.value`: (`uint`) 当前交易发送的`wei`值
### 总结
在这一讲，我们介绍了`solidity`中的引用类型，数据位置和变量的作用域。重点是`storage`, `memory`和`calldata`三个关键字的用法。他们出现的原因是为了节省链上有限的存储空间和降低`gas`。下一讲我们会介绍引用类型中的数组。

## 6.引用类型

这一讲，我们将介绍`solidity`中的两个重要变量类型：数组（`array`）和结构体（`struct`）。

### 数组 Array

数组（`Array`）是`solidity`常用的一种变量类型，用来存储一组数据（整数，字节，地址等等）。数组分为固定长度数组和可变长度数组两种：

-   固定长度数组：在声明时指定数组的长度。用`T[k]`的格式声明，其中`T`是元素的类型，`k`是长度，例如：

```solidity
    uint256[8] array1;
    bytes1[5] array2;
    address[100] array3;
```

-  可变长度数组（动态数组）：在声明时不指定数组的长度。用`T[]`的格式声明，其中`T`是元素的类型，例如（`bytes`比较特殊，是数组，但是不用加`[]`）：

```solidity
    // 可变长度
    uint[] array4;
    bytes1[] array5;
    address[] array6;
    bytes array7;
```

#### 创建数组的规则

在solidity里，创建数组有一些规则：

-   对于`memory`修饰的`动态数组`，可以用`new`操作符来创建，但是必须声明长度，并且声明后长度不能改变。例子：

```solidity
    // memory动态数组
    function fn () public pure{
      uint[] memory array8 = new uint[](5);
      bytes memory array9 = new bytes(9);

      array8[0]=1;
      array9[0]=0x01;
    }
```

-   数组字面常数(Array Literals)是写作表达式形式的数组，用方括号包着来初始化array的一种方式，并且里面每一个元素的type是以第一个元素为准的，例如`[1,2,3]`里面所有的元素都是uint8类型，因为在solidity中如果一个值没有指定type的话，默认就是最小单位的该type，这里int的默认最小单位类型就是uint8。而`[uint(1),2,3]`里面的元素都是uint类型，因为第一个元素指定了是uint类型了，我们都以第一个元素为准。下面的合约中，对于f函数里面的调用，如果我们没有显式对第一个元素进行uint强转的话，是会报错的，因为如上所述我们其实是传入了uint8类型的array，可是g函数需要的却是uint类型的array，就会报错了。

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
contract C {
    function f() public pure {
        g([uint(1), 2, 3]);
    }
    function g(uint[3] memory) public pure {
        // ...
    }
}
```

-   如果创建的是动态数组，你需要一个一个元素的赋值。

```solidity
    uint[] memory x = new uint[](3);
    x[0] = 1;
    x[1] = 3;
    x[2] = 4;
```

#### 数组成员

-   `length`: 数组有一个包含元素数量的`length`成员，`memory`数组的长度在创建后是固定的。
-   `push()`: `动态数组`和`bytes`拥有`push()`成员，可以在数组最后添加一个`0`元素。
-   `push(x)`: `动态数组`和`bytes`拥有`push(x)`成员，可以在数组最后添加一个`x`元素。
-   `pop()`: `动态数组`和`bytes`拥有`pop()`成员，可以移除数组最后一个元素。

```solidity
uint[] array4;
function addArray() public {
      uint[2] memory array10=[uint(1),2];
      array4 = array10;
      array4.push(1);
    }
```

### 结构体 struct

`Solidity`支持通过构造结构体的形式定义新的类型。创建结构体的方法：

```solidity
    // 结构体
    struct Student{
        uint256 id;
        uint256 score; 
    }
    Student student; // 初始一个student结构体
```

给结构体赋值的两种方法：

方法一
```sol
    //  给结构体赋值
    // 方法1:在函数中创建一个storage的struct引用
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }
```

方法二

```solidity
     // 方法2:直接引用状态变量的struct
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }
```

![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202303031437184.png)


## 7.映射(Mapping)

在映射中，人们可以通过键（`Key`）来查询对应的值（`Value`），比如：通过一个人的`id`来查询他的钱包地址。

声明映射的格式为`mapping(_KeyType => _ValueType)`，其中`_KeyType`和`_ValueType`分别是`Key`和`Value`的变量类型。例子：

```solidity
    mapping(uint => address) public idToAddress; // id映射到地址
    mapping(address => address) public swapPair; // 币对的映射，地址到地址
```

### 映射规则

-   **规则1**：映射的`_KeyType`只能选择`solidity`默认的类型，比如`uint`，`address`等，不能用自定义的结构体。而`_ValueType`可以使用自定义的类型。下面这个例子会报错，因为`_KeyType`使用了我们自定义的结构体：

```solidity
 // 我们定义一个结构体 Struct
    struct Student {
        uint256 id;
        uint256 score;
    }
    mapping(Student => uint256) public testVar;
```

![image.png](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202303061812041.png)


-   **规则2**：映射的存储位置必须是`storage`，因此可以用于合约的状态变量，函数中的`storage`变量，和library函数的参数（见[例子](https://github.com/ethereum/solidity/issues/4635)）。不能用于`public`函数的参数或返回结果中，因为`mapping`记录的是一种关系 (key - value pair)。
-   **规则3**：如果映射声明为`public`，那么`solidity`会自动给你创建一个`getter`函数，可以通过`Key`来查询对应的`Value`。
-   **规则4**：给映射新增的键值对的语法为`_Var[_Key] = _Value`，其中`_Var`是映射变量名，`_Key`和`_Value`对应新增的键值对。例子：

```solidity
    function writeMap (uint _Key, address _Value) public{
        idToAddress[_Key] = _Value;
    }
```

### 映射的原理

-   **原理1**: 映射不储存任何键（`Key`）的资讯，也没有length的资讯。
-   **原理2**: 映射使用`keccak256(key)`当成offset存取value。
-   **原理3**: 因为Ethereum会定义所有未使用的空间为0，所以未赋值（`Value`）的键（`Key`）初始值都是0。

## 8.变量的初始值