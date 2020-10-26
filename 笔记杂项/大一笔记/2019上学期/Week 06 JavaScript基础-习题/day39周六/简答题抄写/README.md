# 简答题

## 1、javascript数据类型有哪些(中英文都要写)

- javascript的数据类型分为两大类:基本数据类型和复杂数据类型
  - 基本数据类型有：number(数字类型)、string(字符串类型)、boolean(布尔值)、null(空)、undefined(未定义)
  - 复杂数据类型有：Array(数组)、Object(对象)等

## 2、请说出目前你在哪些情况下会碰到undefined的情况？ 
- 声明变量没有赋值就会返回undefined
- 当下标超过数组或字符串的范围返回undefined
- 当对象调用不存在的属性的时候就会返回undefined
- 函数之内没有return返回值的时候就会返回undefined

## 3、怎么判断js变量的数据类型？

- 判断javascrpit的数据类型可以通过typeof，但是typeof仅仅能判断的是简单的数据类型，不能判断复杂的数据类型。

## 4、数据类型转换涉及的转换是哪些,分别有什么方式实现转换?

- 转数字：Number()、+、-、*、/、parseInt()、parseFloat()
- 转字符串：String()、tostring()
- 转布尔：Boolean()、!!()

## 5、写出javascript中typeof返回的所有数据类型?

- console.log(typeof undefined) //undefined
- console.log(typeof 123) // number
- console.log(typeof true) //boolean
- console.log(typeof "123") //string
- console.log(typeof null) //object
- console.log(typeof [1,2]) //object
- console.log(typeof { }) //object

## 6、let和var的区别是什么?

- 使用let声明变量的作用域不会升---而var会自动提升
- let在相同的作用域下不能有相同的变量，否则会报错---而var中则可以出现相同变量名，且不会报错
- let作用域只能限制当前代码块{ }---var的作用域则是函数体function( ){ }
- let的for循环体现父子作用域

## 7、使用toString有哪些限制?

- undefined和null不能调用toString方法，调用会报错

## 8、其他数据类型转布尔类型是false有且只有哪些？

- null、" "、undefined、0、NaN

## 9、说出2种隐式类型转换和4种显示转换

- 2种隐式类型的转换有：!!,算术运算符(+、-、*、/)
- 4种显示转换：Number()、boolean()、String()、parseInt()

## 10、如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？ 
- 判断一个变量是否是数字，可以通过isNaN(变量名),输出true代表不是一个数字,输出false代表变量是一个数字

## 11、 100+100结果是200，那100+‘100’结果是什么，为什么？

- 结果是100100因为+号右边是字符串，当+号和字符串同时出现的时候+号起拼接字符串的作用

## 12、请写出JavaScript的逻辑运算符，规则分别是什么？

- js的逻辑运算符有&&(与)、||（或）、 ！（非）
- &&的规则是：只有符号两边有一个为假就是假
-  ||的规则是：只要符号两边有一个为真就是真
-  ！的规则是：如果变量为真，那么！之后的结果就是假，如果变量为假，！之后的结果就是真

## 13、判断flase || !true && false 和 !false && true||true的结果分别什么，并写出具体过程？

```javascript
false || !true && false 
先运算 !true 等于 false 然后
运算 false && false 等于 false 最后
运算 false || false 等于 false 
所以 false || !true && false 的答案是 false
```



```javascript
!false && true || true 
先运算 !false 等于 true 然后运算
true && true 等于 true 最后
true || true 等于 true 所以
!false && true || true 的答案是true
```



##  14、NaN==NaN判断的结果是什么？为什么？

- NaN==NaN的结果是假，因为NaN不与任何值相等，包括它本身



## 15、请说明 == 和 === 的区别是什么？

- == 只比较值，如果等号两边的数据类型不同，会进行隐式转换，然后进行比较
- === 既然比较值也比较数据类型

## 16 、== 和`===`的区别是什么？console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么？

- == 是不全等用于一般比较，需将两边转换成相同数据类型，进行比较，再判断值是否相同
- ===是全等用于严格比较，需判断两边的数据类型和值是否都相等

- console.log(1 ==“1”)结果是true，转成相同的数据类型后，值相等 
- console.log(1 === fasle) 结果是false，数据类型不相等直接返回false



## 17、前++和后++的区别是什么？

- 前++是先自增再赋值运算
- 后++是先赋值运算再自增

## 18、在网页中运用JS，有哪些弹出框 ？

- prompt()
- alert()
- comfirm()

## 19、循环有哪些？

- 循环有for、while、do...while三种



## 20、while循环和do...while循环的区别是什么？

- while 循环需要满足条件才会执行循环
- do...while 循环无论是否满足循环条件都会执行一次循环体

## 21、break和contiue的区别是什么？

- break是跳出整个循环
- contiue是跳出本次循环，执行下一次循环

## 22、定义数组的方式有哪些?

- 定义数组的方式有：

  - 对象字面量的方式

    ```javascript
    var arr=[]
    ```

  - 使用Array构造函数的方式

    ```javascript
    var arr=new Array();
    ```

## 23 、怎么知道数组的长度？长度和索引有关系吗？如果有，有什么关系？
- 通过数组.length属性获取数组的长度
- 有关系，数组的索引最大值是数组的长度-1

## 24、怎么获取数组中某个位置的值?

- 获取数组中某个位置的值，可以通过`数组名.[索引]`来获取



## 25、数组中只有添加和删除功能的方法是哪些，功能分别是什么？ 怎么查找某元素在某数组中的位置，查找结果有什么？

- 数组能够添加元素的方法是push,unshift,pop,shift

  push是从数组末尾添加元素，返回值是新数组的长度

  unshift是从数组的最前面开始添加内容，返回值是新数组的长度

  数组能够删除元素的方法是pop,shift

  pop是从数组末尾删除元素，返回值是删除的末尾的那个元素

  shift是从数组最前面删除元素，返回值是删除的最前面的那个元素

- 通过数组的方法indexOf()可以查找数组中某元素的位置,如果有这个元素则返回元素的下标，没有就返回-1

## 26、从索引1到索引3如何使用方法拷贝它们并自动组成数组？

- 可以通过数组的方法slice()方法,数组名.slice(1,4)，返回的值就是索引从1到3的新数组

## 27、怎么使用方法将数组的所有元素都用‘&’连接成一个字符串

- 使用数组的方法join()可以将数组元素通过指定的分隔符进行分隔，返回的结果是`字符串`

- 使用方法是：数组名.join("&");

## 28、怎么使用方法将数组颠倒？

- 使用数组的方法reverse()返回的值是翻转之后的数组
- 使用方法：数组名.reverse()

## 29、数组的方法有哪些，作用分别是什么，至少写5个？
- push是从数组末尾添加元素，返回值是新数组的长度

- unshift是从数组的最前面开始添加内容，返回值是新数组的长度

- 数组能够删除元素的方法是pop,shift

- pop是从数组末尾删除元素，返回值是删除的末尾的那个元素

- shift是从数组最前面删除元素，返回值是删除的最前面的那个元素

- indexOf是查找某个元素在数组中的位置，如果数组中有这个元素，则返回元素对应的索引，如果没有这个值，则返回-1



##  30、var arr = [[1,2],[3,4],[5,6]]，怎么得到里面的元素5

```javascript
console.log(arr[2][0])
```



## 31、定义函数的两种方式分别是什么？写出格式？

- 方式一：

  ```javascript
  function ( ){ }
  ```

- 方式二：

  ```javascript
  let result = function ( ) { }
  ```

## 32、函数声明与函数表达式的区别？

- 在预解析的时候，函数表达式只提升的是变量的声明，函数声明是函数整体的提升



## 33、在函数内部，return 某个结果，如何获得这个结果

- 通过定义变量去接收这个结果

  ```javascript
  let result = 函数名()
  console.log(result);//打印
  ```



## 34、在全局作用域和函数作用域中，全局变量和局部变量都可以使用吗？

- 全局变量全局作用域范围内起作用
- 局部变量知识在函数内部起作用

- 如果在函数外部访问函数内部通过var声明的变量就会报错

## 35、在函数内部没有var声明直接赋值的变量属于什么变量？在外部能否打印输出？

- 属于隐式全部变量，在函数调用的同时预解析的过程，会进行变量的声明和提升到全局，在全局作用域可以访问。

## 36、函数的形参可以看作是什么变量？

- 函数的形参可以看做是局部变量，只在函数内部起作用

## 37、Obj对象的F属性对象的值是函数，如何调用这个函数？

```javascript
Obj.F()
```

## 38、 设置对象属性的两种方式是什么？

```javascript
let obj={};

//第一种

obj.name="李四";

//第二种

obj["name"]="李四";
```



## 39、如何遍历对象？如何打印对象的属性和属性值？

- 遍历对象通过 for(key in obj)

```javascript
let obj={}
for(key in obj)
    {
        console.log(key)//打印属性
        console.log(obj[key])//打印属性值
    }
```

## 40、创建对象的三种方式是什么？语法结构分别是什么？

- 系统构造函数创建对象

```js
let obj=new Object();
```

- 工厂函数创建对象

```js
function fn (name,age){
    let obj= new Object()
    obj.name=name;
    obj.age=age;
    retrue obj;
}
let obj=fn("张三",18);
```

- 自定义构造函数创建对象

```js
function fn(name,age)
{
    this.name;
    this.age;
}
let obj=new fn("战士",15);
```



## 41、数组和伪数组的区别是什么?

- 伪数组的本质是一个对象，但是拥有length，可以通过for循环遍历，但是伪数组不能调用数组的方法，比如push(),pop()等方法。

## 42、null和undefined的区别是什么?

- 转为数值时，值不一样，null转number数据类型结果是0，undefined转number数据类型的结果是NaN
- 数据类型不一样,typeof null输出的是object,typeof undefined输出的结果是undefined，而且null不能调用方法和属性

## 43、js中的‘+’有几层含义，分别是什么？

- 当＋号两边都是number数据类型的时候就代表数据符号加法
- 当＋号的一边是string数据类型的时候，＋号就代表拼接字符串
- +号可以进行隐式转换，给string类型的数据前面加上+号，就会把这个字符串转成number类型

## 44、怎么删除对象的某个属性？

```js
delete 对象名.属性名
```


## 45、js的内置对象有哪些？

- Math 对象
- Date 日期对象
- Array数组对象
- srting 字符串对象

## 46、Math对象常用的一些方法有什么？

- Math.random()返回大于等于0小于1的随机数
- Math.ceil()向上取整
- Math.floor()向下取整
- Math.round()四舍五入
- Math.max() 返回最大值，如果没有参数则返回Infinity如果任意一个参数是NaN或不可转换为数字，则返回NaN
- Math.min(),　返回参数中最小值。如果没有参数则返回Infinity。如果任意一个参数是NaN或不可转换为数字，则返回NaN

## 47、Math.random()怎么产生一个20-50（包含20和50）的整数？

```js
parseInt(Math.random()*(51-10)+20)
```



## 48、Date对象常用的一些方法有哪些？
- 获取当前日期new Date()

```js


let date = new Date()
console.log(date.getFullYear())//返回当前年份
console.log(date.getMonth() + 1)//返回当前月份
console.log(date.getDate())//返回当前日期
console.log(date.getDay())//返回周几 周一返回1 周日返回0

console.log(date.getHours())//得到当前的时间
console.log(date.getMinutes());//得到当前分钟
console.log(date.getSeconds())//得到当前秒

```







