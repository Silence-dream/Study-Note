---
tags :
- JavaScript
- null和undefined的区别
---

undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。

null 作为一个基本数据类型为什么会被 typeof 运算符识别为 object 类型呢？ 这是因为 javascript 中不同对象在底层都表示为二进制，而 javascript 中会把二进制前三位都为 0 的判断为 object 类型，而 null 的二进制表示全都是 0，自然前三位也是 0，所以执行 typeof 时会返回'object。 ----引用自《你不知道的 javascript（上卷）》