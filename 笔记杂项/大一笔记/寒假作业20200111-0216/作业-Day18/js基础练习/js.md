## js 简答题

1. 什么是全局作用域？什么是函数(局部)作用域？

- 在整个 js 内部都可以起作用

- 在一定的范围之内(花括号)才起作用

2. ES6 新增了块级作用域，谈谈你对块级作用域的理解

- ES6 允许块级作用域的任意嵌套。外层作用域无法读取内层作用域的变量

- 内层作用域可以定义外层作用域的同名变量

3. 为什么需要 `let`定义变量，`let` 和 `const` 有什么共同点，`let` 和 `var` 有什么不同点

- - 变量不提升
  - 暂时性死区，只能在声明的位置后面使用。
  - 不可重复声明。

- 
  - 关于变量提升,var 可以变量提升，let 不能

  - let 声明绑定的代码块内(如一对花括号)，不能重复声明同一个变量，var 可以

  - 类似 for 循环的代码块，let 只在代码块内部有效，var 在代码块外部也有效

4. 全局变量和全局作用域，局部变量和局部(函数)作用域是否有关系？有什么关系？

- 全局变量和全局作用域：都可以影响全局，一个变量的作用域如果是全局，那么他也可以叫全局变量

- 局部变量和局部(函数)作用域：只能影响局部 一个变量的作用域如果是局部，那么他也可以叫局部变量

## js 编程题

1. 输出下面预解析的结果，并注释解题过程

   ```js
   1) 
   	var a = 10;
      function abc() {
        console.log(a); // undefined  var a = 9;进行了变量提升
        var a = 9;
      }
      abc();
      console.log(a) // 10
   
   2) 
   	var color = "red";
   
   	function outer() {
   	    var anotherColor = "blue";
   
   	    function inner() {
   	        var tmpColor = color; //blue
   	        color = anotherColor; //blue   全局作用域且后执行覆盖第一行代码
   	        anotherColor = tmpColor;
   	        console.log(anotherColor); // red 作用域连没有的变量会依次往外寻找
   	    }
   	    inner();
   	}
   	outer();
   	console.log(color); // blue   
   
   3) 
   	var a = 10;
   	
   	function fn1() {
       	var a = b = c = 9; //这里产生全局作用域 b=9,c=9
       	console.log(a); // 9
       	console.log(b); // 9
       	console.log(c); // 9
   	}
   	fn1();
   	console.log(a); // 10 
   	console.log(b); // 9 
   	console.log(c); // 9 
   
   4) 
   function a(b) {
       console.log(b); // c 传参 b=c
       var s = b(); // 调用b()=c()
       console.log(s) // 123
   }
   a(c);
   
   function c() {
       return 123
   }
   ```

2. 输出下面打印结果并说明理由

   ```js
   1) 
   function test() {
       var x = 31;
       if (true) {
           var x = 71;
           console.log(x) // 71
       }
       console.log(x) // 71 代码从上往下执行
   }
test();
   
   2) 
   function test() {
       let x = 31;
       if (true) {
           let x = 71;
           console.log(x) // 71   因为用的let定义变量，所以let只在局部作用域内生效
       }
       console.log(x) // 31
}
   test();
   
   3)
   function fn() {
       if (2 > 1) {
           arr = 10;
           brr = 10;
           let arr;
           var brr;
           console.log(arr); // 报错   使用let定义变量，需要遵循先定义后赋值的操作
           console.log(brr); // ？
    }
   }
   fn();
   
   4) 
   var a = [];
   for (var i = 0; i < 10; i++) {
       a[i] = function () {
           console.log(i);
       };
   }

   a[6](); // 10 因为循环之中使用的是var定义变量在全局范围之内都可以被访问，每一次循环都会让后面的值覆盖掉前面的值
   a[7](); // 10 因为循环之中使用的是var定义变量在全局范围之内都可以被访问，每一次循环都会让后面的值覆盖掉前面的值
   a[8](); // 10 因为循环之中使用的是var定义变量在全局范围之内都可以被访问，每一次循环都会让后面的值覆盖掉前面的值
   a[9](); // 10 因为循环之中使用的是var定义变量在全局范围之内都可以被访问，每一次循环都会让后面的值覆盖掉前面的值
   
   5)
   var a = [];
   for (let i = 0; i < 10; i++) {
       a[i] = function () {
           console.log(i);
       };
       a[i]();
   }
   a[6](); // 6  for循环代码块构成一个作用域，里面的function形成闭包，function里面可以引用父作用域的变量，引用的是function被定义时的父作用域变量值，所以在每一次执行a[i] = function () { console.log(i);}时，function都保存了当时的i值。
   a[7](); // 7  
   a[8](); // 8  
   a[9](); // 9  
   ```
