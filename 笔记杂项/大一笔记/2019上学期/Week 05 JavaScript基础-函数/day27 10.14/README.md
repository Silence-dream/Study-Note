# 选择题

###### 1.null,undefined,”string”,20,true,false的共同点是(B)

A、都是对象

B、都有相同的实例属性

C、都是原始值

D、都是函数

###### 2.下列哪个符号不是逻辑运算符(A)

A、%

B、||

C、&&

D、！

###### 3.以下(C)为javascript声明变量的语句

A、Dim x;

B、Int x;

C、var x;

D、X

###### 4.如下代码输出的结果是(A)

 console.log(1+”2”+2)//122

 console.log(1+”2”+”2”)//122

 console.log(“A”-”B”+”2”)//NaN2

 console.log(“A”-”B”+2)//NaN

A、122122NaN2NaN

B、12232NaNNaN2

C、12232NaNNaN

D、12232NaN2NaN2

###### 5.哪个操作符根据值和类型比较变量(B)

A、==

B、===

C、=

D、这些都不是

###### 6.var a = false;var x= a?”A”:”B”;x的值是(B)

A、A

B、B

C、true

D、false

###### 7.哪个关键字用来定义条件语句的可选分支(B)

A、or

B、else

C、continue

D、break

###### 8.下列选项中哪一个等价于(CD)

If(a){

 x=b;

}else{

 x=c;

}

A、x=a?b,c;

B、x=a:b?c;

C、x=a?b:c;

D、x=a?b:c;

###### 9.执行以下程序段后，x的值是(C)

var x = 0;

switch(++x){

 case 0:++x;

 case 1:++x;

 case 2: ++x;

}

A、1  B、2  C、3  D、4

###### 10.Number(null);将此代码将返回(D)

A、null  B、1  C、undefined  D、0

###### 11.解读下面的js代码，计算的结果是(A)

var num = 10;

If(5==num/2 && (2+2*num).toString() == “22”){

   console.log(true)

}

A、true  B、false  C、5   D、22

###### 12.下面哪个变量类型在javascript中不存在(C)

A、object  B、boolean  C、integer  D、number

###### 13.以下不属于javascript的基本数据类型的是(C)

A、string  B、number  C、function  D、boolean

###### 14.下面语句:

 var x = -10,y;

 x=2*x;

 y = x+15;

 计算后y的结果是(C)

A、-15  B、10  C、-5  D、5

###### 15.分析下面的javascript代码，经过运算后m的值为(C)

 var x = 11,y=”number”;

 var m;

 m = x+y;

A、number

B、11.0

C、11number

D、程序报错

###### 16.结束本次循环，进入下一次循环的关键字是(A)

A、continue

B、break

C、return 

D、end

###### 17.以下程序运行结果正确的是(C)

var a = 3;

var b = 4;

var c =5;

console.log(a>b?a:c);

A、3  B、4  C、5  D、6

###### 18.下列javascript的循环语句中，正确的是(D)

A、for(i<10;i++){}

B、for(i=0;i<10){}

C、for i=1 to 10

D、for(var i=0;i<=10;i++){}

###### 19.下列不是分支语句使用的关键字是(D)

A、case  B、if  C、else  D、for

###### 20.    Javascript中，函数是(C)

A、循环

B、操作符

C、对象

D、总是全局的

###### 21.    如下代码段中，

var x =0; while(__A_)  x+=2;

要使while循环体执行10次，空白处的循环判断   

A、x<10

B、X<=10

C、X<20

D、X<=20

 ###### 22. 如下代码段中，

for(var i=0;j=1;i<3;i++){//语法错误应该是var i=0,逗号！！！j=1

 j +=i;

}    

当该循环结束之后，j的值是(D)

A、1  B、2  C、3  D、4

######  23.    下列不是循环语句关键字是(switch)

A、for

B、do

C、while

D、switch   

###### 24.    求数学表达式”10”-(12+5).toString()的值是(B)

A、3  B、-7  C、10125   D、抛出异常

###### 25.    运行下面的代码之后，x的值是(D)

A、1  B、0  C、NaN   D、undefined   //代码呢？

###### 26.    var x=’1’+2+3;x的值是(B)

A、123  B、15  C、6  D、语句会报错

###### 27.    向数组array追加一个元素10，正确的做法是(BC)

A、array.shift(10)

B、array.unshift(10)

C、array.push(10)

D、array.slice(10)

###### 28. var arr = [31,13,234,54,87];arr.sort()；对数组arr进行遍历数组返回(D)

A、13,31,54,87,234

B、13,234,31,54,87

C、234,87,54,31,13

D、87,54,31,234,13

###### 29.    以下定义数组语法错误的是(C)

A、var array = []

B、var array = new Array()

C、var array = new Array(10)

D、var array = [10,20,30]

###### 30.    var array = [1,2,3,4,5,6];

array .splice(2,3);

alert(array);

以上代码运行的正确结果是(A)

A、1,2,6   B、4,5,6

C、1,2,5,6   D、1,2,3

###### 31.    以下关于Array数组对象的说法不正确的是(C)

A、对数组理数据的排序可以用sort函数，如果排序效果非预期，可以给sort函数加一个排序函数的参数

B、reverse用于对数组数据的倒序排列

C、向数组的最后位置加一个新元素，可以用pop方法  //pop是删除最后一个

D、unshift方法用于向数组添加第一个元素

###### 32.    下列运算符，哪个是用来判断一个对象是不是数组(A)

A、typeof  B、break  C、instanceof  D、switch

###### 33.    var undefs= [];以下向数组添加元素的正确的是(BC)

A、a.pop(“zero”)

B、a.push(“one”)

C、a.join(“two”)

D、a.shift(“three”)

###### 34.以下代码运行后的结果是输出(A)

var a = [1,2,3];

console.log(a.join())

A、123  B、1,2,3  C、 1 2 3   D、[1,2,3]

###### 34.    下列的哪一个表达式将返回值为假(B)

A、!(3<=1)

B、(4>=4)&&(5<=2)

C、(“a”==”a”) &&(“c” !=”d”)

D、(2<3)||(3<2)

###### 35.    下面代码,k的运行结果是(A)

var i=0,j=0;	

for(;i<10,j<6;i++,j++){

 k = i+j;

}

A、16  B、10  C、6  D、12

###### 36.alert(“12”<”9”)的运行结果正确的是(B)

A、true    B、false

###### 37.下面的描述中不正确的是(B)

A、”==”在比较过程中，不但会比较两边的数据类型

B、NaN == NaN的结果是true

C、isNaN,判断传入的参数是否是数字，为数字返回true,否则返回false

D、字符串的length只可以获取，不可以设置

###### 38.下面关于数组的描述正确的是(A)

A、数组的length既可以获取，也可以修改

B、调用pop()方法，不会修改原数组中的值

C、shift()方法的返回值是新数组的长度

D、调用concat()方法， 会修改原数组的值

###### 39.分析下面的代码，输出的结果是(C)

var arr = new Array(5);

arr[1] = 1;

arr[5]=2;

console.log(arr.length);

A 、2   B、5  C、6   D、报错

 