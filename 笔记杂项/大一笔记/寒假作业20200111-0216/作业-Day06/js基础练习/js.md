## js解答题

1. 算数运算符都有哪些？
-   `+` 、 - 、 * 、 / 、 % 、 ++ 、 -- 
2. NaN和任何值比较的结果都是什么？包括和自身比较吗？
- false
- 不包括，和自身比较是NaN
3. == 和 === 的区别在哪？

- `==`比较的时候如何两边数据类型不同会先进行隐式转换然后再进行比较。
- `===`比较的时候会对两边进行数据类型的比较，如果数据类型不同就不会相等

4. 逻辑运算符有哪些, 逻辑运算的规则有哪些

- 取反(!),结果是真就取反为假，结果是假就取反为真
- 逻辑与(&&),只要有假就输出假，两边为真才输出真
- 逻辑或(||)，只要有真就输出真，两边为假才输出假
## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？
   ```js
   
   ```
   
2. 判断下面结果的布尔值

   ```js
    333 == '333'        //true
    666 == [666]        //true
    '999' == [999]      //true
    NaN == NaN          //false
    NaN === NaN         //false
    undefined == null   //true
    undefined === null  //true
    [] == []            //false
    [] === []           //false
    [] == 0             //false
    ![] == 0            //true
    [] == ![]           //true
   ```

3. 打印输出下面的结果

   ```js
     true && !true                      //false
     false || !false                    //true
     false || !true && !false           //false
     true && !false || false            //true
     undefined && true                  //undefined
     2+2 > 5 || 3-3 <=0 && !undefined   //true
   ```

4. 打印输出下面的结果

   ```js
    var a = 10;
    var b = a++;        //10
    console.log(b>=a);  //false
    var c = b + 'a';    //10a
    console.log(c);     //10a
    console.log(c == ('a' + b))//false
   ```