# 什么是运算符

1. 简单来说运算符就是我们从小学到高中所学习的加减乘除的符号，不过在计算机中使用”+“ ”-“ ” * “ ” / “所替代了我们习惯的手写样式。

### 算术运算符

#### 加法 "+"

~~~js
var a=1;
var b=2;
var c;
c=a+b;
console.log(c) //输出结果为3
~~~

#### 连字符 result

~~~js
var a =2;
var b =5;
var result=a+b;
console.log(result);//输出结果为7

var a = "床前明月光";
var b = "疑是地上霜";
var result= a+b;
console.log(result); // 床前明月光疑是地上霜

~~~

#### 减法    " - "

~~~ js
var a=5;
var b=2;
var result=a-b;
console.log(result);//3
~~~

#### 乘法 " * "

~~~js
var a=22;
var b=10;
var result=a*b;
console.log(result);//220
~~~

#### 除法  " / "

~~~js
var a=50;
var b=2;
var result=a/b;
console.log(result);//25
~~~

#### 求余数(取模) " % "

~~~ js
var a=5;
var b=7;
var result=b%a;
console.log(result);//2
~~~

#### 自（增）加运算符 "i++   ++i"

~~~js
//i++和++i的具体区别

//++

var a=3;
var b=6;
var result=a++ +b;
console.log(result); //9
console.log(a);//4

//a++是a先参与运算后a再自增1.
//++a是先自增1后，再参与运算.


//++i

var a=3;
var b=6;
var result=++a + b;
console.log(result); //10
console.log(a); //4
~~~



#### 自减运算符

~~~js
//i--和--i的具体区别

//i--

var a=3;
var b=6;
var result=a-- +b;
console.log(result); //9
console.log(a);//2

//a--是a先参与运算后a再自增1.
//--a是先自增1后，再参与运算.


//--i

var a=3;
var b=6;
var result=--a + b;
console.log(result); //8
console.log(a); //2
~~~



### 赋值运算符

#### 减后赋值 " -= "

~~~js
var a= 7 ;
a-=5; // 等于 a=a-5
console.log(a);
~~~

#### 乘后赋值  " *= "

~~~js
var a = 7;
a*=2;//等于a=7*2
console.log(a);
~~~

#### 整除后赋值 " /= "

~~~js
var a = 5;
a/=2;// a=5除以2
console.log(a); 
~~~

#### 取模(余数)后赋值  " %= "

~~~js
var a= 7;
a%=5; //等于a=a%5
console.log(a);
~~~

### 比较运算符

#### 相等于 " == "

~~~js	
var a=5;
var b=5;
var c=3;
console.log(a==b,a==c);    // true  false

~~~

#### 绝对等于 " === "

~~~js
var a = 500;
var b = 500;
var c = "500";
console.log(a===b,a===c);//ture false
~~~

#### 不等于  " != " 

~~~js
var a=1;
var b=2;
var c=2;
console.log(a!=b,b!=c); // true false
~~~

#### 小于  "＜"

~~~js	
var a=5;
var b=5;
var c=4;
var d=6;
console.log(a<b , a<c , a<d); // false false true

~~~

#### 大于 ">"

~~~js
var a=5;
var b=5;
var c=4;
var d=6;
console.log(a>b , a>c , a>d); // false true false

~~~

#### 小于等于 "<="

~~~js
var a=5;
var b=5;
var c=4;
var d=6;
console.log(a<=b , a<=c , a<=d);// true false true

~~~

#### 大于等于 ">="

~~~js
var a=5;
var b=5;
var c=4;
var d=6;
console.log(a>=b , a>=c,a>=d);// true  true  false

~~~

### 逻辑运算符 

1. 如果有空的或者否定的为假 0 "" null undefined NaN 其余是真的

   

   #### 短路运算（逻辑终断）

   1. 短路运算的原理：当有多个表达式（值）时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值；

   

#### 与逻辑 "&&"

~~~js
1. 如果第一个表达式1的值为真，则返回表达式2
2. 如果第一个表达式1的值为假，则返回表达式1
var a=5;
var b=3;
var c=2;
console.log(a>b && a>c);    // true  真真为真
console.log(a>b && c>a);    // false 真假为假 
console.log(a==b && a==c);  // false  假假为假

~~~

#### 或逻辑 "||"

~~~js
1. 如果第一个表达式1的值为真，则返回表达式1
2. 如果第一个表达式1的值为假，则返回表达式2
var a=5;
var b=3;
var c=2;
console.log(a>b || a>c);   // true     真真为真 
console.log(a>b || c>a);   // true     真假为真
console.log(a==b || a==c);  // false   假假为假

~~~

#### 非逻辑 " ! "

~~~js
var a=4;
var b=6;
console.log(a<b);      //  true
console.log(!(a<b));   //  false
console.log(a>b);      //  false
console.log(!(a>b));   //  true
console.log(a==b);     //  false
console.log(!(a==b));  //  true;
~~~

### 三目运算符

~~~js
(5>7)?console.log("error"):console.log("5小于7");  
// 如果5>7,那么冒号左边是真的，否则输出冒号右边

~~~

~~~js
var sex="男";
(sex=="男")?console.log("欢迎来到男士的天堂"):console.log("多喝岩浆0000000000000
//判断sex是否是男,如果是则输出冒号左边，如果不是则输出冒号右边.
~~~





## 数据类型的转换

### 七种数据类型

JS中有七种数据类型，包括：

五种基本数据类型（Number,String,Boolean,Undefined,Null）,

一种复杂数据类型（Object），

ES6引入了一种新的原始数据类型（Symbol）。



### Number()转换成Boolean

~~~js
var a= 10;
var b= 20;
a=Number(true);
b=Number(false)
console.log(a); //1
console.log(b);	//0
~~~



### undefind 转成 null

~~~js
var a= 10;
var b= 20;
a=Number(undefined);
b=Number(null)
console.log(a); //NaN
console.log(b);	//0
~~~

### parenlt()转换

~~~js
var num1= parseInt('123木头人');//123
var num2=parseInt("") //NaN
var num3= parseInt('12.5'); //12
var num4= parseInt("-100"); //-100
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
~~~

# 什么是逻辑终断(短路运算)？

当有多个表达式（值）时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值。

## 逻辑中断逻辑与

语法：表达式1 && 表达式2

如果第一个表达式的值为真，则返回表达式2

如果第一个表达式的值为假，则返回表达式1


# 问题:隐式转换的规则是什么

说起JS的隐式转换规则，我们可以说下JS的基础数据类型

# JS的七种数据类型

我们所熟知的JS，可以在大体上分类2种类型：基本数据类型、复杂数据类型（对象类型）

## 基本数据类型

JS再继续细分的话，简单类型包括：number、string、boolean、null、undefined、symbol

## 复杂数据类型

JS的复杂数据类型：object

# 三种隐式转换类型

`JS`中一个难点就是隐式转换，因为`JS`在一些操作符下其类型会做一些变化，所以`JS`灵活，同时也会造成一些错误，并且难以理解

这其中涉及隐式转换最多的两个运算符 `+` `==`

`+`运算符即可数字相加，也可字符串相加，所以比较麻烦，`==`不同于`===`,也存在隐式转换,`*` 、`/`、 `-`这些操作符都是针对`number` 类型的，所以转换的结果只能是转换成`number`

# 变量、属性、函数、方法的区别

## 1.变量和属性的相同点：他们都是用来存储数据的

```javascript
var num=10;
var obj={
    age:18;
}
```

变量 单独声明并赋值 使用的时候直接写变量名且`单独存在`。

属性 在对象里面的不需要声明，使用的时候必须 `对象.属性名`

## 2.函数和方法的相同点:都是实现某种功能,做某件事

```javascript
var num=10;
var obj={
    age:18;
    fn:function(){//在里面叫方法
        
    }
}
function fn(){}//在外面叫函数
```

函数是单独声明并且调用的 函数名() 单独存在

方法 在对象里面 调用的时候 对象.方法()

















