## js 简答题

1. 函数的基本声明及调用格式是什么？其作用是什么？

- function 函数名(形参){ return 返回值 }
- 函数名(实参)
- 将一段可重复使用的代码封装到一个函数内从而减少代码量

2. 说说你对函数形参和实参的理解，形参个数和实参必须相等吗？

- 形式参数是指函数名后括号中的变量。因为形式参数只有在函数被调用的过程中才实例化（分配内存单元），所以叫形式参数。形式参数当函数调用完成之后就自动销毁了。因此形式参数只在函数中有效。
- 真实传给函数的参数，叫实参。实参可以是：常量、变量、表达式、函数等。无论实参是何种类型的量，在进行函数调用时，它们必须有确定的值，以便把这些值传送给形参。
- 不一定，多传的实参会被存在 arguments 里面

3. 函数为什么需要 return 返回值？

- 执行函数的时候需要得到一个结果，这个结果就是返回值，如果没有返回值就会返回 undefined

4. 函数表达式和函数声明式有什么区别？

- 函数声明在 JS 解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用 而函数表达式的值是在 JS 运行时确定，并且在表达式赋值完成后，该函数才能调用

## js 编程题

1. 编写一个函数：判断任意三个数中的最大值和最小值

   ```js
   function getMax(num1, num2, num3) {
     var max = 0;

     max = num1 > num2 ? num1 : num2;
     max = num3 > max ? num3 : max;

     return max;
   }
   var result = getMax(1, 2, 3);
   console.log(result);
   ```

2. 编写一个函数：实现对 `n` 到 `m` 之间所有偶数的求和

   ```js
   function getSum(num1, num2) {
     var sum = 0;

     for (var i = num1; i <= num2; i++) {
       sum += i;
     }

     return sum;
   }
   var result = getSum(10, 20);
   console.log(result);
   ```

3. 编写一个函数：实现对传入的数组从小到大进行冒泡排序

   ```js
   function getArr(arr) {
     for (var i = 0; i < arr.length - 1; i++) {
       for (var j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
           var temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j + 1] = temp;
         }
       }
     }

     return arr;
   }

   var result = getArr([5, 4, 7, 8, 9, 2, 1]);

   console.log(result);
   ```

4. 编写一个函数：传入任意个数字，计算所有数之和

   ```js
   function getSum() {
     var sum = 0;

     for (var i = 0; i < arguments.length; i++) {
       sum += arguments[i];
     }

     return sum;
   }
   var result = getSum(1, 2, 3, 4, 5, 6, 8);
   console.log(result);
   ```
