# 一、选择题
## 1、分析下段代码输出结果是（B）

~~~js
var arr = [2, 3, 4, 5, 6];
var sum = 0;
for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
~~~

A．20     B．18     C．14     D．12  

1、以下关于 Function函数对象的说法不正确的是（D ）

A．函数可有可无返回值   

B．调用函数时传递的参数是实参 

C．函数调用时候，可以用一个变量来接收函数返回值 

D．函数必须要有形式参数 

## 2、以下代码运行的结果是输出( B)
~~~js
var a = b = 10;
(function () {
    var a = b = 20
})(); 
console.log(b); 
~~~

A．10     B．20     C．报错     D. undefined 

## 3、以下代码运行后的结果是输出( A  )

~~~js
var a = new Object();
a.name = "admin";
console.log(a.name); 
~~~

A． admin   B． a    C．“admin”     D．[a] 

## 4、在 JS 中，’1555’+3 的运行结果是(  C )

 A．1558     B．1552     C．15553     D．1553 

## 5、以下代码运行后弹出的结果是(  B )
~~~js
var a = 888;
++a;
console.log(a++);
~~~

A．888     B．889     C．890     D．891  

## 6、关于变量的命名规则，下列说法正确的是（  ABCDE ） 

A．首字符必须是大写或小写的字母，下划线（_）或美元符（$） 
B．除首字母的字符可以是字母，数字，下划线或美元符 
C．变量名称不能是保留字 
D．长度是任意的 
E．区分大小写  

## 7、下列的哪一个表达式将返回值为假（ B   ） 
A．!(3<=1) 
B．(4>=4)&&(5<=2) 
C．(“a”==“a”)&&(“c”!=“d”) 
D．(2<3)||(3<2)  

## 8、下面代码，k的运行结果是（  B  ）
~~~js
var i = 0, j = 0;
for (i < 10; j < 6; i++ , j++) {
    k = i + j;
}
~~~

A．16     B．10     C．6     D．12  

## 9、下面代码的输出结果为（ D ）

~~~js
var x = 1;
function fn(n) {
    n = n + 1;
};
y = fn(x);
console.log(y);
~~~

 A．2     B．1     C．3     D． undefined 

## 10、[1, 2, 3, 4].join("0").split("");的执行结果是（  C ）
A．"1,2,3,4"

B．[1,2,3,4]   

C．[“1”,“0”,“2”,“0”,“3”,“0”,“4”]

D．”1,0,2,0,3,0,4" 



## 11、下面代码的运行结果是（   C）
~~~js
function fn1() {
    alert(1);
}
console.log(fn1);
~~~

A．1

B． alert(1);      

C． function fn1() { alert(1); } 

D． Undefined

## 12、以下代码运行后，结果为（  B ）

~~~js
fn1();
var  fn1 = function (a) {
    console.log(a);
} 
~~~

A．1     B．程序报错     C． alert(1);      D ．undefined  

## 13、n的值为：（A) 

~~~js
var n = "miao wei ke tang".indexOf("wei", 6);
~~~

A．-1     

B．5     

C．程序报错     

D．-10  

## 14、下面对 substring() 方法描述不正确的是（  C ） 

A．一共有两个参数，省略第二个参数表示从参数开始位置提、截取到字符串结束。
B．提取之前会比较两个参数的大小，并根据大小调整位置。
C．可以接收负数参数，负数表示从后往前数字符位置。
D．如果没有设置参数，直接返回整个字符串。



## 15、回答以下代码，alert的值输出分别是多少?( B)
~~~js
var a = 100;
function test(){
alert(a);
var a = 10;
alert(a);
}
test();
~~~

A、100 ，10  B、undefined，10    C、10，10     D、报错

## 17、 回答以下代码，alert的值输出分别是多少？( A)

~~~html
<script>
  var a = 100;
  function test() {
    alert(a);
    a = 10;
    alert(a);
  }
  test();
  alert(a);
</script>
~~~

A.100  10  10          B. 10  100  10   

C .10  10  100         D.100  100  100

## 18、以下程序运行结束正确的是（B）

~~~js
var i = 10;
i++;
console.log(i);
var y = i++;
console.log(y);
y = ++i;
console.log(y);
y += 10;
console.log(y);
~~~

A.10 11 13 23      B. 11 11 13 23
C.10 12 13 23      D.11 12 13 23

## 19.下列代码的执结果是(  A )

~~~js
19. function funcSwitch(sFlag) { 
    switch (sFlag) 
    { 
    case 'Test1': alert('Test1'); break; 
    case 'Test2': alert('Test2'); break;
     default: ;
      } 
    }

    

funcSwitch('Test2');
~~~

A. Test2      B. Test1        C.undefined      D. null

## 20.下列代码的运行结果是( A)



~~~js
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 2, len = cars.length;
for (; i < len; i++) {
  console.log(cars[i]);
}
~~~



A、 SaabFord        B、 SaabVolvo
C、 VolvoBMW      D、FordBMW

# 二、简答题

1. js数据类型有哪些，怎么判断一个变量的数据类型？

   >JS数据类型有：Number、String、Boolean、Null、Undefined、Object
   >使用 typeof 变量 可以判断该变量的数据类型，但是typeof只能判断的是简单数据类型，不能判断复杂数据类型。

2. 列举数组中常用的5个方法，并说明各自的作用？

   >unshift(); 添加元素到数组的开头，返回值是新数组的长度
   >push(); 添加元素到数组的末尾，返回值是新数组的长度
   >shift(); 删除数组开头元素 ，返回值是删除的那个元素
   >pop(); 删除数组末尾元素，返回值是删除的那个元素
   >indexOf(); 查看某个元素在数组中的下标位置，有返回下标，无返回-1
   >splice(开始元素，删除个数，添加元素); 增删改作用集一身
   >slice(); 截取元素，返回的是截取之后元素组成的数组
   >concat(); 合并数组，返回值是合并之后的新数组


3. javascript中的循环有哪些，while循环和do...while的区别是什么？

   > for循环、while循环、do...while循环
   > 区别：while先判断条件再执行，do..while先执行一次再判断条件是否继续执行


4. javascript中的‘+’有几层含义，分别是什么？

   

   >第一层意义，当 + 号的两边都是number类型的时候，此时 + 号 代表数学符号加法
   >第二层意义，当 + 号的两边，只要有一边是string类型的时候，此时 + 号代表字符串的连接符
   >第三层意义，+可以进行数据类型的隐式转换，给一个string类型的数据前面加上+号，就会把这个字符串变成数字



5. js中break 和 continue 的区别是什么？

   > break：跳出整个循环执行下面的代码
   > continue：跳出本轮循环执行下一轮循环



6. 列举目前你遇到undefined的情况？

   > 1）变量只声明没有赋值，会返回undefined；
   > 2）当下标超过数组或字符串的范围 ，会返回undefined；
   > 3）当对象调用不存在的属性时，会返回undefined；
   > 4）当return没有返回值，会返回undefined；

7. 产生一个10-50的随机数(包含10也包含50)?

   > Math.random() * (50 - 10 + 1) + 10

>【注意通用公式是: 产生一个[n,m]的整数，包含（n和m）
>Math.ceil (Math.random()*(m-n)+n)】



8. 列举5个字符串的方法，并说明各自的作用？

   > charAt(索引); 返回对象字符
   > concat(); 拼接字符串
   > indexOf(); 查找某串字符在字符串内的索引，有返回索引无返回-1
   > trim(); 去掉字符串前后的空格
   > slice() 从start位置 截取到end位置
   > split() 选择字符分割成数组储存


9. join()和split()的区别是什么？

   > join()；是数组方法，把数组中的元素转成字符串连接
   > split(); 是字符串的方法，方法用于把一个字符串分割成字符串数组

10.定义一个人的对象，属性有：名字，年龄，性别，方法是：吃饭，把人的名字在控制台打印出来，将人的性别这个属性进行删除？

~~~js
let object = {
    name: "全栈",
    age: 3,
    sex: "男",
    skill: function () {
        console.log("吃饭");
    }
}
console.log(object.name);
console.log(object.skill());
delete object.sex;
console.log(object);
~~~

