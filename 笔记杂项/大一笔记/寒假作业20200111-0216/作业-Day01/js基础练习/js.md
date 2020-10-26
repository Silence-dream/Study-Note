## js简答题

1. js中的单行和多行注释如何表示?

- 单行 使用 //
- 多行使用 /* */

2. 什么是变量,声明变量有哪几种方式？

- 可以改变数值的量

- 三种

  - ~~~js
    let a=10 //声明并赋值
    ~~~

  - ~~~js
    let a;//声明
    a=10;//赋值
    ~~~

  - ~~~js
    a=10;//全局变量
    ~~~

3. 变量名命名可以包含什么？其中不能以什么开头？

- 包含字母(A-Za-z)、数字(0-9)、下划线(_)、美元符号( $ )组成
- 不能以数字，标点符号开头

4. 变量名命名为什么区分大小写？不能拿什么用来命名？

- 大小写的Unicode不同
- 不能以数字，标点符号开头


## js编程题

1. 根据题意注释下面的内容

   ```js
   //( 使用单行注释注释小括号的内容 )
   /*
   【 使用
   多行注释
   注释大括号的
   内容 】
   */
   ···不要注释我···
   ```

2. 使用一个var同时定义：变量名为age变量值为18；变量名为name变量值无；变量名为num变量值为NaN

   ```js
   var age=18;
   var name=null;
   var num=NaN;
   ```

3. 作为一名程序员，请指出下面错误的变量命名方式，并说明原因

   ```js
    var ABC = "A123";
    var name1 = "杨";
    var _age$ = 3; 
    var 6Bu = 6;//不能以数字开头
    var this = "that";//保留字
    var is_Na& = "NO"//&不能用做变量
    var 呵呵 = 233//不能用中文开头
   ```

4. 指出下面代码的错误及原因，并给出你认为正确的修正

   ```js
   var num, age, name;
   const num1;//声明常量需要赋值
   const name = "杨";//前面用var定义了name这里又用const定义name
   const age1 = 3;
   age = age1 = 18;//常量不可变
   console.log(age);
   ```
   
   修正
   
   ~~~js
   var num, age;
   const num1 = 18;
   const name = "杨";
   const age1 = 3;
   age = age1;
   console.log(age);
   ~~~
   
   