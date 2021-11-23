---
title: babel
date: 2021-10-20
---

## Babel 是什么？

### Babel 是一个 JavaScript 编译器

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

- 语法转换
- 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过引入第三方 polyfill 模块，例如 core-js)
- 源码转换（codemods）

### 编译器和转译器

编译器(compiler)它会将某种编程语言写成的源代码（原始语言）转换成另一种编程语言（目标语言）
转译器(transpiler)它会将高级语言的源代码转换成高级语言,又叫转换编译器
babel 就是一个 Javascript Transpiler。

### bebel 的编译流程

babel 是源代码到源代码(source to source)的转换，整体编译流程分为三步：

- 解析(parse) ：通过 parser 把源码转成抽象语法树(AST)
- 翻译(transform) ：遍历 AST，调用各种 transform 插件对 AST 进行增删改
- 生成(generate) ：把转换后的 AST 打印成目标代码，并生成 sourcemap

#### 为什么会分为这三步

为什么 babel 的编译流程会分 parse、transform、generate 这 3 步?

源码是一串按照语法格式来组织的字符串,人能认识,但是计算机不认识,想要计算机认识就需要转换成一种数据结构通过不同的对象来保存数据,并且按照依赖关系组织起来，这种数据结构就是抽象语法树(abstract syntax tree)之所以叫抽象语法树是因为数据结构中省略掉了一些无具体意义的分隔符比如 ; { } 等。有了 AST，计算机就能理解源码字符串的意思，而理解是能够转换的前提，所以编译的第一步需要把源码 parse 成 AST

babel 将源码转换成抽象语法树(abstract syntax tree)，然后再通过 transform 插件对 AST 进行增删改，最后再通过 generate 插件生成目标代码。

#### 这三步都干啥了

##### parse

parse 阶段的目的是把源码字符串转换成机器能够理解的 AST，这个过程分为词法分析、语法分析。

比如 let name = '芜湖'; 这样一段源码，我们要先把它分成一个个不能细分的单词（token），也就是 let, name, =, '芜湖'，这个过程是词法分析，按照单词的构成规则来拆分字符串成单词。

之后要把 token 进行递归的组装，生成 AST，这个过程是语法分析，按照不同的语法结构，来把一组单词组合成对象。

##### transform

transform 阶段是对 parse 生成的 AST 的处理，会进行 AST 的遍历，遍历的过程中处理到不同的 AST 节点会调用注册的相应的 visitor 函数，visitor 函数里可以对 AST 节点进行增删改，返回新的 AST（可以指定是否继续遍历新生成的 AST）。这样遍历完一遍 AST 之后就完成了对代码的修改。

##### generate

generate 阶段会把 AST 打印成目标代码字符串，并且会生成 sourcemap。不同的 AST 对应的不同结构的字符串。比如 IfStatement 就可以打印成 if(test) {} 格式的代码。这样从 AST 根节点进行递归打印，就可以生成目标代码的字符串。

sourcemap 记录了源码到目标代码的转换关系，通过它我们可以找到目标代码中每一个节点对应的源码位置。

### Babel 的 AST

babel 编译的第一步是把源码 parse 成抽象语法树 AST （Abstract Syntax Tree），后续对这个 AST 进行转换。（之所以叫抽象语法树是因为省略掉了源码中的分隔符、注释等内容）

AST 也是有标准的，JS parser 的 AST 大多是 [estree 标准](https://github.com/estree/estree)，从 SpiderMonkey 的 AST 标准扩展而来。babel 的整个编译流程都是围绕 AST 来的，这一节我们来学一下 AST。

熟悉了 AST，也就是知道转译器和 JS 引擎是怎么理解代码的，对深入掌握 Javascript 也有很大的好处。

#### 常见的 AST 节点

AST 是对源码的抽象，字面量、标识符、表达式、语句、模块语法、class 语法都有各自的 AST。我们分别来了解一下：

##### Literal 标识符字面量

Literal 是字面量的意思，比如 `let name = '芜湖'`中，`'芜湖'`就是一个字符串字面量 StringLiteral，相应的还有

数字字面量 NumericLiteral，布尔字面量 BooleanLiteral，字符串字面量 StringLiteral，正则表达式字面量 RegExpLiteral 等。

##### Identifier 标识符

Identifier 是标识符的意思，变量名、属性名、参数名等各种声明和引用的名字，都是 Identifer。我们知道，JS 中的标识符只能包含字母或数字或下划线（“\_”）或美元符号（“$”），且不能以数字开头。这是 Identifier 的词法特点。

我们来一段代码来判断哪些是 Identifier 以便深入理解 Identifier

```js
const name = "罗志祥";
function book(name) {
  console.log(name);
  return "时间管理";
}
const obj = {
  name: "李华",
};
```

答案如下

![code](img/code.png)

##### Statement 语句

Statement 是语句的意思，它是可以独立执行的单位，比如 break、continue、debugger、return 或者 if 语句、while 语句、for 语句，还有声明语句，表达式语句等。`我们写的每一条可以独立执行的代码都是语句。`

以下是一些语句的例子

```js
break;
continue;
return;
debugger;
throw Error();
{}
try {} catch(e) {} finally{}
for (let key in obj) {}
for (let i = 0;i < 10;i ++) {}
while (true) {}
do {} while (true)
switch (v){case 1: break;default:;}
label: console.log();
with (a){}
```

它们对应的 AST 节点

```js
break; // BreakStatement
continue; // ContinueStatement
return; // ReturnStatement
debugger; // DebuggerStatement
throw Error(); // ThrowStatement
{} // BlockStatement
try {} catch(e) {} finally{} // TryStatement
for (let key in obj) {} // ForInStatement
for (let i = 0;i < 10;i ++) {} // ForStatement
while (true) {} // WhileStatement
do {} while (true) // DoWhileStatement
switch (v){case 1: break;default:;} // SwitchStatement
label: console.log(); // LabeledStatement
with (a){} // WithStatement
```

语句是代码执行的最小单位，可以说，代码是由语句（Statement）构成的。

##### Declaration 声明

Declaration 是声明的意思，声明语句是一种特殊的语句，它执行的逻辑是在作用域内声明一个变量、函数、class、import、export 等。

例如下面的例子

```js
const a = 1; // VariableDeclaration
function b() {} // FunctionDeclaration
class C {} // ClassDeclaration

import d from "e"; // ImportDeclaration

export default e = 1; // ExportDefaultDeclaration
export { e }; // ExportNamedDeclaration
export * from "e"; // ExportAllDeclaration
```

##### Expression 表达式

Expression 是表达式的意思，特点是执行完以后有返回值，这是和语句 (statement) 的区别。





## 参考

[QuarkGluonPlasma (github.com)](https://github.com/QuarkGluonPlasma)

[AST explorer](https://astexplorer.net/)

[Babel 中文网 · Babel - 下一代 JavaScript 语法的编译器 (babeljs.cn)](https://www.babeljs.cn/)