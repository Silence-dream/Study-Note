## js简答题

1. 什么是全局作用域？什么是函数(局部)作用域？

2. ES6新增了块级作用域，谈谈你对块级作用域的理解

3. 为什么需要 `let`定义变量，`let` 和 `const` 有什么共同点，`let` 和 `var` 有什么不同点

4. 全局变量和全局作用域，局部变量和局部(函数)作用域是否有关系？有什么关系？


## js编程题

1. 输出下面预解析的结果，并注释解题过程

    ```js
    1) var a = 10;
       function abc() {
         console.log(a); // ?   
         var a = 9;
       }
       abc();
       console.log(a) // ?   
    
    2) var color = "red";
       function outer() {
         var anotherColor = "blue";
       
         function inner() {
           var tmpColor = color;
           color = anotherColor;
           anotherColor = tmpColor;
           console.log(anotherColor); // ? 
         }
         inner();
       }
       outer();
       console.log(color); // ?    
    
    3) var a = 10;
       function fn1() {
         var a = b = c = 9;
         console.log(a); // ?  
         console.log(b); // ? 
         console.log(c); // ? 
       }
       fn1();
       console.log(a); // ?    
       console.log(b); // ?  
       console.log(c); // ?
    
    4) function a(b) {
       console.log(b); // ?  
       var s = b();
       console.log(s) // ?  
       }
       a(c);
      
       function c() {
         return 123
       }
    ```

2. 输出下面打印结果并说明理由

    ```js
    1) function test() {
       var x = 31; 
       if (true) {
         var x = 71; 
         console.log(x) // ?  
         }
         console.log(x) // ?    
       }
       test();
    
    2) function test() {
       let x = 31; 
       if (true) {
         let x = 71; 
         console.log(x) // ?  
         }
         console.log(x) // ?    
       }
       test();
    
    3) function fn() {
       if (2 > 1) {
         arr = 10;
         brr = 10;
         let arr; 
         var brr;
         console.log(arr); // ？  
         console.log(brr); // ？   
         }
        }
    fn();
    
    4) var a = [];
       for (var i = 0; i < 10; i++) {
         a[i] = function () {
           console.log(i);
         };
       }
       a[6](); // ?  
       a[7](); // ?  
       a[8](); // ?  
       a[9](); // ?  
    
    5) var a = [];
       for (let i = 0; i < 10; i++) {
         a[i] = function () {
           console.log(i); 
         };
         a[i]();
       }
       a[6](); // ?  
       a[7](); // ?  
       a[8](); // ?  
       a[9](); // ?  
    ```