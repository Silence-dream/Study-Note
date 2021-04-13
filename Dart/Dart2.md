# 变量与常量

## 变量

1.使用 **var** 声明变量,默认值为 **null**

```
var a;//null
a = 10;
```

2.显示类型声明

```
int a;//null
a = 10;
```

3.使用 **var** 声明，可赋予不同类型的值

```
var a; //null
a = 10; //int
a = "Dart"; //string
```

4.使用 **final** 声明只能赋值一次的变量

```
final a = 30;
a = 10; //Error
```

## 常量

使用 **const** 声明编译期常量

```
const a = 10;
```

# 数据类型

## 数值型

Dart 中使用 **num** 表示数值型，子类只有两种：**int** 和 **double**，分别表示整型和浮点型。 1.使用 **num** 声明的类型既可以接收整型，也可以接收浮点型；

```
num a = 10; //int
a = 12.5; //double
```

2.使用 **int** 声明整型；

```
int a = 10;
```

3.使用 **double** 声明浮点型

```
double a = 10.5;
```

4.常用属性和方法（更多可查看相关 api）

```
int a = 30;
a.isEven;//是否偶数
a.isOdd; //是否奇数
a.abs();// 绝对值
a.toDouble();//转换为浮点型
...

int b = 10.5;
b.toInt();//转换为整型
b.round(); //四舍五入，11
b.floor(); //不大于b的最大整数，10
b.ceil(); //不小于b的最小整数，11
...
```

## 字符串

Dart 中使用 **String** 表示字符串。 1.使用 **单引号** 或 **双引号** 创建字符串；

```
String str = "Dart";

String str = 'Dart';
```

2.使用 **三个单引号** 或 **三个双引号** 创建多行字符串；

```
String str = '''Hello
                  Dart''';

String str = """Hello
                  Dart""";
```

3.使用 **r** 创建原始字符串

```
String str = r'Hello \n Dart'; // "\n"不会被转义
```

4.插值表达式
使用 **\${ }** 表示插件表达式，单个变量可省略 **{ }**。

```
int a = 1;
int b = 2;
print("a + b = ${a + b}");
```

5.常用属性和方法（更多可查看相关 api）

```
str.length;//字符串长度
str.isEmpty;//是否为空
...

str.contains('xxx');//是否包含xxx
str.substring(0,3);//截取前三个字符
str.startsWith('xxx‘);//是否以xxx开头
str.split(",");//以,分隔字符串，返回数组
...
```

## 布尔型

Dart 中使用 **bool** 表示布尔型。布尔型的值只有 **true** 和 **false**。

```
bool isTrue = true;
bool isFalse = false;
```

 List body ol,body ul{margin:0;padding:0;}body .list-paddingleft-1{padding-left:0} body .list-paddingleft-2{padding-left:20px} body .list-paddingleft-3{padding-left:40px}

Dart 中使用 **List** 表示列表，它和数组是同一概念。

## List

1.创建 List,使用 **const** 创建不可变的 List

```
var list = [1, 2, 3];

//创建不可变的List
var list = const[1, 2, 3];

//使用类创建
var list = new List();
```

2.常用属性和方法（更多可查看相关 api）

- 获取元素个数

```
list.length;
```

- 判断是否为空

```
list.isEmpty;

list.isNotEmpty;
```

- 添加元素

```
list.add('xxx');

list.insert(index,'xxx'); //在下标位置添加元素
```

- 删除元素

```
list.remove('xxx');

list.clear(); //清空list
```

- 修改元素

```
list[0] = 'xxx'; //修改下标为0的元素值为xxx
```

- 查询元素

```
list[0];//获取第一个元素，下标从0开始
```

- 其它

```
list.indexOf('xxx');//查询元素xxx,返回下标，不存在返回-1

list.sort(); //排序

list.subList(start,end);//获取从子列表

list.forEach(); //遍历list
...
```

## Map

Dart 中使用 **Map** 表示 key-value 键值对。

1.创建 Map,使用 **const** 创建不可变的 Map

```
var map = {'first':'Java','second':'Dart'};

//创建不可变的Map
var map = {'first':'Java','second':'Dart'};

//使用类创建
var map = new Map();
```

2.常用属性和方法（更多可查看相关 api）

- 获取元素个数

```
map.length;
```

- 判断是否为空

```
map.isEmpty;

map.isNotEmpty;
```

- 添加元素

```
map['third'] = 'JavaScript'; //添加key为thrid,value为JavaScript的元素
```

- 删除元素

```
map.remove('third'); //删除key为third的元素

map.clear(); //清空map
```

- 修改元素

```
map['first'] = 'C++'; //修改key为first的value为C++
```

- 查询元素

```
map['first'];//获取key为first的value
```

- 其它

```
map.keys; //获取map所有的key

map.values; //获取map所有的value

map.containsKey('first'); //map是否包含key为first的元素

map.containsValue('Java'); //map是否包含value为Java的元素

map.forEach(); //遍历map
...
```

# 运算符

Dart 中的很多运算符和其它语言是相似的，个别不同用法会详细说明。

## 算术运算符

- 加减乘除: **+ , - , \* , / , ~/ , %**

> “/” 运算符结果为浮点型；
> "~/" 运算符为求整，类似 Java 中的"/"；
> "%"运算符为求余；

- 递增递减: **++var , var++ , --var , var–**

## 关系运算符

关系运算符包括：**== , != , > , < , >= , <=**

> "=="运算符只是判断内容是否相同。

## 逻辑运算符

逻辑运算符包括：**! , && , ||**

## 赋值运算符

- 基础运算符: **= , ??=**

> “??=” 表示左侧变量为空时进行赋值，否则不赋值

```
int a;
a ??= 5; // a = 5

int a = 10;
a ??= 5; //a = 10
```

- 复合运算符: **+= , -= , \*= , /= , %= , ~/=**

## 条件运算符

- 三目运算符: **condition ? expr1 : expr2**
- ??运算符: **expr1 ?? expr2**

> "??"运算符表示如果 expr1 为 null，则使用 expr2 的结果，否则使用 expr1

```
String a = "Dart";
String b = "Java";
String c = a ?? b; //c = "Dart"

String a;
String b = "Java";
String c = a ?? b; //c = "Java"
```

# 控制流

## if 语句

if 语句和其它语言类似。

```
if(condition1){
	//...
	if(condition2){
		//...
	}
} else if(condition3){
	//...
} else {
	//...
}
```

## for 语句

```
var list = [1,2,3,4,5];

for(var index = 0;index < list.length;index++){
  print(list[index]);
}
```

## for…in 语句

```
for(var item in list){
  print(item);
}
```

## while 语句

```
int count = 0;

while(count < 5){
  print(count++);
}
```

## do…while 语句

```
do{
  print(count--);
}while(count > 0 && count < 5);
```

## break 和 continue

> break：终止当前循环；
> continue:跳出当前循环，继续下一次循环；

## switch 语句

switch 语句支持 num、String、编译期常量、对象和枚举。

```
switch(language){
  case "Dart":
    print("Dart is my favorite");
    break;
  case "Java":
    print("Java is my favorite");
    break;
  case "Python":
    print("Python is my favorite");
    break;
  default:
    print("None");
}
```

支持使用**continue**跳转标签：

```
switch(language){
  Test:
  case "Dart":
    print("Dart is my favorite");
    break;
  case "Java":
    print("Java is my favorite");
    continue Test;
  case "Python":
    print("Python is my favorite");
    break;
  default:
    print("None");
}
```

## assert 语句

assert 条件表达式为 false 时会抛出异常。

```
assert(str != null);
```

# 方法

## 方法声明

```
返回类型   方法名（参数1，参数2,....）{
方法体…
return 返回值
}
```

- 方法也是对象，并且有具体类型**Function**；
- 返回值类型、参数类型都可省略；

```
void printPerson(String name,int age){
  print("name=$name,age=$age");
}

printPerson(name,age){
  print("name=$name,age=$age");
}
```

- 方法都有返回值。如果没有指定返回类型，默认 return null 最后一句执行；

```
printPerson(String name,int age){
  print("name=$name,age=$age");
  //return null;
}
```

- **=> 语法**，适用于方法体只有一个表达式的情况；

```
printPerson(String name,int age) => print("name=$name,age=$age");
```

## 可选参数

- 可选命名参数,调用时使用名称传值。

```
printPerson(String name,{int age,String gender}){
  print("name=$name,age=$age,gender=$gender");
}

//方法调用
printPerson("李四",age: 20);
printPerson("李四",age: 20,gender: "Male");
```

- 可选位置参数，调用时根据参数位置传递对应类型。

```
printPerson2(String name,[int age,String gender]){
  print("name=$name,age=$age,gender=$gender");
}

//方法调用
printPerson2("张三",18);
printPerson2("张三",18,"Female");
```

- 如果存在具体参数，可选参数声明，必须在参数后面

## 默认参数值

在可选参数中可以使用默认参数值，默认参数值必须是编译期常量。

```
printPerson(String name,{int age = 30,String gender = "Female"}){
  print("name=$name,age=$age,gender=$gender");
}
```

## 方法对象

Dart 中一切都对象，包括方法。所以方法也可以作为对象赋值给其它变量，也可以作为参数传递给其它方法。

- 方法赋值给其它变量

```
void printHello(){
  print("Hello");
}

Function func = printHello;
func();
```

- 方法作为参数传递

```
//第二参数是一个方法
List listTimes(List list ,String t(str)){
  for(var index = 0;index < list.length;index++){
    list[index] = t(list[index]);
  }

  return list;
}


String times(str){
  return str*3;
}

//方法作为参数调用
var list2 = ["h","e","l","l","o"];
print(listTimes(list2, times));
```

## 匿名方法

匿名方法没有具体的名称，和方法有相同的特性，也是对象，也可作为变量赋值和参数传递。

- 匿名方法声明

```
(参数1，参数2,….）{
方法体…
return 返回值
}
```

- 匿名方法赋值

```
var func = (str){
  print("Hello---$str");
};

func(30);
```

- 匿名方法作为参数

```
List listTimes(List list ,String times(str)){
  for(var index = 0;index < list.length;index++){
    list[index] = times(list[index]);
  }

  return list;
}

//使用匿名方法传递参数
var result = listTimes(list2, (str){ return str * 3;});
```

## 闭包

- 闭包是一个方法(对象);
- 闭包定义在其它方法内部;
- 闭包能够访问外部方法内的局部变量，并持有其状态

```
//该方法返回一个闭包
a(){
  int count = 0;

  return (){
    print(count++);
  };
}

//闭包的调用可以访问局部变量count
var func = a();
func();
func();
func();
func();
```

作者：雷宇
链接：https://www.imooc.com/article/260329
来源：慕课网
本文原创发布于慕课网 ，转载请注明出处，谢谢合作

# 面向对象

##　类与对象

- 使用关键字class声明一个类
- 使用关键字new创建一个对象，new可省略
- 所有对象都继承于Object类

## 属性与方法

-   属性默认会生成getter和setter方法
-   使用final 声明的属性只有getter方法
-   属性和方法通过.访问
-   方法不能被重载(不能有两个一样的函数)



## 类及成员可见性

-   Dart中的可见性以library（库）为单位
-   默认情况下，每一个Dart文件就是一个库
-   使用_表示库的私有性
-   使用import导入库

## property计算属性

-   没有开辟新的内存空间

```dart
void main() {
    var rect = new Rectangle();
    rect.height = 20;
    rect.width = 10;

    print(rect.area);

    rect.area = 200;
    print(rect.width);

}

class Rectangle{
  num width,height;

  num get area => width * height;
      set area(value){
        width = value / 20;
      }
}
```

## 构造方法

-   如果没有自定义构造方法，则会有个默认构造方法
-   如果存在自定义构造方法，则默认构造方法无效
-   构造方法不能重载

```dart
void main() {
    var person = new Person("Tom",20,"Male");
    new Person.withName("John");
    new Person.withAge(20);
}

class Person{
  String name;
  int age;

  final String gender;

  Person(this.name,this.age,this.gender);

  Person.withName(String name){
    this.name = name;
  }

  Person.withAge(this.age);

  void work(){
    print("Work...");
  }
}
```



##  命名构造方法

-   使用命名构造方法，可以实现多个构造方法
-   使用类名.方法的形式实现

代码同上

## 常量构造方法

-   如果类是不可变状态，可以把对象定义为编译时常量
-   使用const 声明构造方法，并且所有变量都为final
-   使用const 声明对象，可以省略

```dart
void main() {
    const person = const Person("Tom",20,"Male");

    person.work();

}

class Person{
  final String name;
  final int age;

  final String gender;

  const Person(this.name,this.age,this.gender);

  void work(){
    print("Work...");
  }
}
```



## 工厂构造方法

-   工厂构造方法类似于设计模式中的工厂模式
-   在构造方法前添加关键字factory实现一个工厂构造方法
-   在工厂构造方法中可返回对象



## 初始化列表

-   初始化列表会在构造方法体执行之前执行
-   使用逗号分隔初始化表达式
-   初始化列表常用于设置final变量的值

```js
void main() {
    var person = new Person("Tom", 20, "Male");
}

class Person{
  String name;
  int age;

  final String gender;

  Person(this.name,this.age,this.gender);
						// 冒号后面的就是初始化列表 一般用来给final赋值			
  Person.withMap(Map map): name = map["name"],gender = map["gender"]{
    age = map["age"];
  }

  void work(){
    print("Work...");
  }
}
```

## 静态成员

-   使用static关键字来实现类级别的变量和函数
-   静态成员不能访问非静态成员，非静态成员可以访问静态成员
-   类中的常量需要使用static const声明

```dart
void main() {
  var page = new Page();

  Page.scrollDown(); //访问静态成员
}

class Page{

  static const int maxPage = 10;

  static int currentPage = 1; // 在静态对象里面也需要声明静态类型

  //下滑
  static void scrollDown(){
    currentPage = 1;
    print("ScrollDown...");
  }

  //上滑
  void scrollUp(){
    currentPage++;
    print("scrollUp...");
  }

}
```

## 对象操作符

-   条件成员访问：?.
-   类型转换：as
-   是否指定类型：is，is！
-   级联操作：..

```dart
void main() {
//  Person person = new Person();
//  person?.name;
//  var person;
//  person = "";
//  person = new Person();

//  (person as Person).work();

//  if (person is Person){
//    person.work();
//  }

  new Person()
      // 赖
    ..name = "Tom"
        ..age = 20
        ..work();
}

class Person{
  String name;
  int age;

  void work(){
    print("Work...$name,$age");
  }
}
```

## 对象call方法

```dart
void main() {
    var person = new Person();

    print(person("Test",30));

}

class Person{
  String name;
  int age;

//  void work(){
//    print("Name is $name,Age is $age");
//  }

  String call(String name,int age){
    return "Name is $name,Age is $age";
  }
}
```

# 面向对象扩展

-   继承，继承中的构造方法
-   抽象类
-   接口
-   Mixins，操作符的覆写

## 继承

-   使用关键字extends继承一个类
-   子类会继承父类可见的属性和方法，不会继承构造方法
-   子类能够复写父类的方法、gettter和setter
-   单继承，多态性

## 继承中的构造方法

-   子类的构造方法默认会调用父类的无名无参构造方法
-   如果父类没有无名无参构造方法，则需要显示调用父类构造方法
-   在构造方法参数后使用：显示调用父类构造方法

```dart
void main() {
  var student = new Student("Tom","Male");

  print(student.name);
}

class Person{
  String name;

  Person(this.name);

  Person.withName(this.name);
}

class Student extends Person{
  int age;

  final String gender;
	// 调用父类的构造方法
  Student(String name,String g) : gender = g, super.withName(name);
}
```

## 构造方法的执行顺序

-   父类的构造方法在子类构造方法体开始执行的位置调用
-   如果有初始化列表，初始化列表会在父类构造方法之前执行



## 抽象类

-   抽象类使用abstract表示，不能直接被实例化
-   抽象方法不用abstract修饰，无实现
-   抽象类可以没有抽象方法
-   有抽象方法的类一定得声明为抽象类

```dart
void main() {
  var person = new Student();
  person.run();
}

abstract class Person{

  void run();
}

class Student extends Person{
  @override
  void run() {
    print("run...");
  }

}
```





## 继承

-   类和接口是统一的，类就是接口
-   每个类都隐式的定义了一个包含所有实例成员的接口
-   如果是复用已有类的实现，使用继承（extends）
-   如果只是使用已有类的外在行为，使用接口（implements）

```dart
void main() {
  var student = new Student();
  student.run();
}

//class Person{
//  String name;
//
//  int get age => 18;
//
//  void run(){
//    print("Person run...");
//  }
//}

abstract class Person{

  void run();

}

class Student implements Person{

  @override
  void run() {
    print("Student run...");
  }

}
```

## Mixins多继承

-   Mixins类似于多继承，是在多类继承中重用一个类代码的方式
-   谁在with的最后面,就调用谁,后面覆盖前面的
-   作为Mixin的类不能有显示声明构造方法
-   作为Mixin的类只能继承自Object

```dart
main(List<String> args) {
  var d = new D();
  d.a();
  d.b();
  d.c();
}

class A {
  void a() {
    print("A.a()...");
  }
}

class B {
  void a() {
    print("B.a()...");
  }

  void b() {
    print("B.b()...");
  }
}

class Test {}

class C {
  void a() {
    print("C.a()...");
  }

  void b() {
    print("C.b()...");
  }

  void c() {
    print("C.c()...");
  }
}

class D extends A with B, C {}










// 高级用法
abstract class Engine{
  void work();
}

class OilEngine implements Engine{
  @override
  void work() {
    print("Work with oil...");
  }

}

class ElectricEngine implements Engine{

  @override
  void work() {
    print("Work with Electric...");
  }

}

class Tyre{
  String name;

  void run(){}
}

class Car = Tyre with ElectricEngine;

class Bus = Tyre with OilEngine;
```

## 操作符覆写

-   覆写操作符需要在类中定义
    返回类型operator 操作符（参数1，参数2..…）{
    实现体.…
    return 返回值

```dart
void main() {
  var person1 = new Person(20);
  var person2 = new Person(20);

  print(person1 > person2);

  person1.age;
  print(person1['age']);

  print(person1 == person2);
}

class Person {
  int age;

  Person(this.age);

  bool operator >(Person person) {
    return this.age > person.age;
  }

  int operator [](String str) {
    if ("age" == str) {
      return age;
    }

    return 0;
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Person && runtimeType == other.runtimeType && age == other.age;

  @override
  int get hashCode => age.hashCode;
}

```

## 枚举

-   枚举是一种有穷序列集的数据类型
-   使用关键字enum 定义一个枚举
-   常用于代替常量，控制语句等

## Dart枚举特性

-   index从0开始，依次累加
-   不能指定原始值
-   不能添加方法

```dart
void main() {
  var currentSeason = Season.autumn; //autumn 是第三个

  print(currentSeason.index); // so index==3

  switch (currentSeason) {
    case Season.spring:
      print("1-3月");
      break;
    case Season.summer:
      print("4-6月");
      break;
    case Season.autumn:
      print("7-9月");
      break;
    case Season.winter:
      print("10-12月");
      break;
  }
}

enum Season {
  spring, // 枚举index从0开始 spring 是 0
  summer,
  autumn,
  winter // index = 3
}

```

## 泛型

-   Dart中类型是可选的，可使用泛型限定类型
-   使用泛型能够有效的减少代码重复

## 泛型的使用

-   类的泛型
-   方法的泛型

```dart
void main() {
  var list = new List<int>();
  list.add(1);

//  var utils = new Utils<int>();
//  utils.put(1);

  var utils = new Utils();
  utils.put<int>(1);
}

class Utils {
  void put<T>(T element) {
    print(element);
  }

//  void putString(String element){
//    this.elementStr = element;
//  }
}

```

