## 变量

-   var 声明变量可赋予不同类型的值
    -   未初始化值为null
-   final声明只能赋值一次的变量



## 常量

-   使用const声明常量
-   使用const声明的必须是编译期常量



## 数据类型

-   数值型-Number
    -   num 关键字
        -   Int 整型
        -   double 浮点型
-   字符串-String
    -   String 创建字符串  """   xx """三引号多行字符串
    -   r 原始字符串(不会转义)

### 字符串方法

-   contains("str") 是否包含字符串,返回布尔 
-   substring(0,1) 返回[0,3)的字符串
-   startsWith("str") 返回布尔,哪个字母开头
-   endWith("str") 返回布尔,哪个字母结尾
-   布尔型-Boolean
    -   bool 创建布尔值 
-   列表(数组)-List
    -   List 创建数组	
    -   var list=[1,2,3] 创建list
    -   List var list = const[1,2,3] 创建不可变的
    -   var list = new List(); 构造创建
-   键值对-Map
    -   Map 创建对象
    -   var obj={"name":"123",age:9}
    -   var obj=const {"name":"123",age:9} 创建不可变的
    -   var obj= new Map(); 构造创建
-   Runes、Symbols
-   dynamic动态类型

```dart
void main(){
  var a;
  a = 10;
  a = "Dart";

  dynamic b = 20;
  b = "JavaScript";

  var list = new List<dynamic>();
  list.add(1);
  list.add("hello");
  list.add(true);
  print(list);
}
```

