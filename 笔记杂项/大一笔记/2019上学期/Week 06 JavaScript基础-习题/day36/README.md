# **一、**选择题

## **1**、不属于js的基本数据类型的是(B)

A、null   B、float   C、string     D、number

## **2**、以下哪个值放在if中被隐式类转换后不会变成false(C)

A、数字-1   B、数字0    C、null   D、空字符串

## **3**、以下程序运行结果正确的是(B)

**var i =10;**

**i++;**

**console.log(i);**  

**var y = i++;**

**console.log(y);**

**y = ++i;**

**console.log(y)**

**y += 10;**

**console.log(y)**

A、10 11 13 23 

B、11 11 13 23 

C、10 12 13 23  

D、11 12 13 23

## **4**、以下程序运行结束正确的是(B)：

  var a = 3;

  var b = 4;

   var c = 5;

  console.log(a>b&&c>b||a<c); 

A.1  B.true  C.false   D.报错

## **5**、以下程序运行结束正确的是(C)：

  var a = 3;

   var b = 4;

  var c = 5;

  console.log(a>b?a:c); 

A.3  B.4   C.5   D.报错

##  6、以下程序运行结束正确的是(B)：

var str1 = null;

var str2 = false;

console.log(str1 === str2?"相等":"不相等"); 

A.相等   B.不相等  C.true   D.false

## **7**、以下对方法的解释错误的是(B)

A、 pop：数组尾部删除

B、 unshift：数组头部删除

C、 push：数组后面添加元素

D、 join：将数组转成字符串

## **8**、以下代码运行结果输出(D)

var a = [1,2,3]

alert(a.join())

A、123    B、1,2,3   C、 1  2  3    D、[1,2,3]

## **9**、在JS中，‘1555‘+3的运行结果是（C）

A、1558    B、1552     C、15553     D、1553

## **10**、if…else语句的if和else两个句子里的代码同时被执行吗?(B)

 A、可以，因为条件是并立的

 B、不可以，因为两个条件不同

## **11**、表达式‘200’===200的值为（B）

A、true   B、false   C、 0      D、1

## **12**、关于JavaScript变量的生命周期，下面说法是错误的是（B）

A、JavaScript的变量的生命周期都是从其声明开始

B、全局变量和局部变量的声明周期是一样长的

C、局部变量在函数执行完成后就会被删除

D、全局变量在脚本执行完成后（页面关闭）会被删除 

## **13**、下列语句中，（A）语句是根据表达式的值进行匹配，然后执行其中的一个语句块。如果找不到匹配项，则执行默认语句块

A、switch   B、if-else   C、for    D、字符串运算符

## **14**、增加一个新值到数组的最后，下面哪一个选项是正确的？（C）

A、arr[value] = length;    B、arr[arr.length()] = value;

C、arr[arr.length] = value  D、arr.lenght = value;

## **15**、数组var arr = [‘a’,’b’,’c’,’d’,’e’];arr.slice(2,4);alert(arr)，弹框应弹出（D）

A、b,d,c   B、c,d   C、c,d,e    D、a,b,c,d,e

## **16**、下列JavaScript的循环语句中,正确的是(D)

A、if(i<10;i++)      B、for(i=0;i<10)

C、for i=1 to 10     D、for(i=0;i<=10;i++)

## 17、(B)

for(x=0;x<5;x++) {

var y= x*x;

console.log(y)

}

输出的结果为(B)

A、 0,1,2,3,4           B、0,1,4,9,16

C、0,1,9,4,16           D、以上答案都不对

## 18、数组下标出界，将返回（D）

A、缺省值，如0          B、给浏览器回报错误

C、数组中第一个数或最后一个数     D、undefined

## 19、看以下JavaScript程序(D)

var num;

num=5+true;

问：执行以上程序，number的值为（）

 A、true     B、false

C、5         D、6

## 20、在JavaScript中运行下面的代码后的返回值是（B）

var num = 10;

num = 20;

function getOK(num) {

​    var num = 30;

​    alert(num);

}

alert(num);

getOK();

A、20, 30  B、10, 30  C、 20, 40    D、 10, 40 

# 二、简答题

## 1、js数据类型有哪些？怎么判断一个变量的数据类型？

 1、js数据类型有number、string、boolean、null、undefined、object

2、使用语句typeof 变量名  判断变量的数据类型

 

## 2、列举数组的5个方法，并且说明每个方法的作用？

1、 sort()排序数组

2、shift()删除数组最前面的元素

3、unshift()向数组最前面添加元素

4、push()向数组最后面添加元素

5、pop()删除数组最后的元素 

 

## 3、== 和`===`的区别是什么？console.log(1 == “1”)和console.log(1 `===` fasle)的结果是什么，并解释为什么？

 1、==会判断是否相等

 2、==== 不仅仅是比较两边数值是否相等还会进行数据类型的比较

3、 console.log(1 == “1”) 结果是true 因为== 还有隐式转换的作用会把字符串转成number类型 所以输出的true

4、console.log(1 === fasle) 结果是false 因为 = = = 不仅仅是比较两边数值是否相等还会进行数据类型的比较，因为1是number类型 false是boolean类型所以输出的是false

 

## 4、break和continue区别是什么？

 1、break会跳出当前的循环执行循环之外的代码

 2、continue会中断循环中的一的迭代然后继续运行下一个迭代

 

## 5、逻辑运算符有哪些，分别有哪些规则?

1、逻辑运算符有 与&&、或||、非！

2、与&&号，当两边是真的时候才输出真，有一边是假就输出假

 	 或||号 ，当两边是假的时候就输出假，有一边是真就输出真

​	   非！号，当输入的是真就输出的假，输入的假就输出真

 

## 6、定义函数的三种方式是什么?

 1、function创建函数

```javascript
function 函数名(){}
```

 2、字面量创建函数

```javascript
let 变量名=function (){}
```

 3、new创建函数

```javascript
let 函数名 = new function(){}
```

## 7、定义对象的三种方式是什么?

 1、字面量创建对象

```javascript
let 对象名={}
```

2、new方式创建对象

```javascript
let 变量名=new Object{}
```

3、构造函数创建对象

```javascript
function 构造函数名(){
    
}
```



## 8、数据类型转换涉及的转换是哪些，分别有什么方式实现转换？

 1、强制类型转换 如 Number(变量名)、String(变量名)

 2、隐式转换，利用+、-、*、/进行隐式转换,如

```javascript
var a=prompt("111")-0;//可以把string11换为number
```



## 9、null和undefined的区别是什么？

1、null代表空，是一个空对象，用typeof检测数据类型的是Object

2、undefined代表空的变量

10、let和var的区别是什么?

 1、let定义的变量是块级作用域

 2、var定义的变量是全局作用域

 

**三、****编程题**

1、例如101中没有4；104中有一个4；144中有两个4。你要做的是统计出101到200之间的整数一共有多少个4。

 ```javascript
// 定义累加变量存有多少个4
let conut = 0;
//定义循环
for (let i = 101; i <= 200; i++) {
    //求出个位十位
    let ge = i % 10;
    let shi = parseInt(i % 100 / 10);
    if (ge == 4 || shi == 4) {
        conut++;
    }
}
console.log(conut);
 ```

 

2、封装函数，实现数组去重，var arr = [9,10,6,6,1,9,3,5,6,4]

 ```javascript

//定义函数
function getQuChong(arr) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            //判断前后数组是否相等
            if (arr[i] == arr[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
//调用函数并赋值
let result = getQuChong([9, 10, 6, 6, 1, 9, 3, 5, 6, 4])
//输出
console.log(result)
 ```



3、定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。

```javascript

//定义一个函数实现任意4位数的翻转
function getReverse(num) {
    //分别求出各个位数的值
    let gw = num % 10;
    let sw = parseInt(num % 100 / 10);
    let bw = parseInt(num % 1000 / 100);
    let qw = parseInt(num / 1000);
    //返回逆序
    return [gw, sw, bw, qw]
}
//接收返回值并赋值给变量
let result = getReverse(1234);
//打印
console.log(result)

```



 

 

4、封装一个函数，实现数组var arr = [23,45,78,98,13,89,5]，从大到小排序。

 ```javascript
function getSort(arr) {
    //定义循环
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            //判断大小
            if (arr[j] < arr[j + 1]) {
                //交换数值
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
//用变量存储结果
let result = getSort([23, 45, 78, 98, 13, 89, 5])
console.log(result)
 ```



 

5、求300到400所有不能被3整除的整数的第一个大于2000的和。

 ```javascript
//定义变量保存和
let sum = 0
//循环300-400之间的数
for (let i = 300; i <= 400; i++) {
    //求出不能被3整除的数的和
    if (i % 3 != 0) {
        sum += i;
    }
    //当sum>2000的之后跳出循环
    if (sum > 2000) {
        break;
    }
}
console.log(sum)
 ```



 

​                                                                                                                                                                      