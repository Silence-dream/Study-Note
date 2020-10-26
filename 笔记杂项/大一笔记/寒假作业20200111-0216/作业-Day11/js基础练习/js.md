## js 编程题

1. 使用一个 for 循环按顺序打印出：`10，8，6，4，2，0，-2`

   ```js
   var num = 10;
   for (var i = 0; i < 6; i++) {
     num -= 2;
     console.log(num);
   }
   ```

2. 使用一个 while 循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

   ```js
   var num = 2;
   var i = 1;
   while (i <= 7) {
     console.log(num);
     num -= 2;
     i++;
   }
   ```

3. 使用一个 do...while 循环打印出：`100`

   ```js
   var num = 100;
   do {
     console.log(num);
   } while (false);
   ```

4. 使用一个 for 循环实现：1-100 之间所有偶数的打印
   要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

   ```js
   //方法一
   for (let i = 0; i <= 100; i++) {
     if (i % 2 == 0) {
       console.log(i);
     }
   }

   //方法二
   for (let i = 0; i <= 100; i++) {
     if (i % 2 != 0) {
       continue;
     }
     console.log(i);
   }
   ```

5. 找出 1-1000 中能被 6 整除的偶数，且个位数不能为 0

   ```js
   for (let i = 0; i <= 1000; i++) {
     if (i % 10 != 0 && i % 6 == 0) {
       console.log(i);
     }
   }
   ```
