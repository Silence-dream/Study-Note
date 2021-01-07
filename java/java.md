## 什么是Java
[百度百科](https://baike.baidu.com/item/Java/85979)

## 数据类型
### 基本类型的存储


| 数据类型       | 大小/字节 | 封装类    | 默认值(零值)                    | 可表示数据范围                           |
| -------------- | --------- | --------- | ------------------------------- | ---------------------------------------- |
| byte(字节)     | 1-Byte    | Byte      | (byte)0                         | -128~127                                 |
| short(短整数)  | 2-Byte    | Short     | (short)0                        | -32768~32767                             |
| int(整数)      | 4-Byte    | Integer   | 0                               | -2147483648~2147483647                   |
| long(长整数)   | 8-Byte    | Long      | 0L                              | -9223372036854775808~9223372036854775807 |
| float(单精度)  | 4-Byte    | Float     | 0.0F                            | 1.4E-45~3.4028235E38                     |
| double(双精度) | 8-Byte    | Double    | 0.0D                            | 4.9E-324~1.7976931348623157E308          |
| char(字符)     | 4-Byte    | Character | '\u0000'（对应数字0，输出为空） | 0~65535                                  |
| boolean(布尔)  | 1-Byte    | Boolean   | flase                           | true或false                              |



## 数据类型转换

-   自动（隐式）类型转换
    -   小转大
-   强制（显式）类型转换
    -   大转小
    -   转换格式 : 小类型 变量名 = (小类型) 大类型数据;

```java
        int a = 10;
        byte b = 20;
        System.out.println(a + b); // 在计算过程中变量 b 被隐式自动类型转换提升为 int 之后和变量 a进行了计算
        // byte sum = a + b; //这里报错就是第 5 行的解释
        // 可以如果我们就是想要用 byte 来接收 a+b 的和呢? 那么就需要用到强制类型转换
        byte sum = (byte)(a + b);
        System.out.println("sum = " + sum);
```



-   数据类型从小到大

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a68a07d029644d69bd63df34ec631a5~tplv-k3u1fbpfcp-watermark.image)



## Scanner的使用

-   什么是Scanner
    -   简单来说就是接收用户输入的值
-   使用

```java
// 1.导入包

import java.util.Scanner;

public class Scanner的使用 {
    public static void main(String[] args) {
        // 2. new Scanner实例对象
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个整数");
        // 3. 接收数据
        int i = sc.nextInt();
        System.out.println(i);
    }
}

```

## Random随机数

- 一个用于产生随机数的类
- 使用
```java
// 1.导入包

import java.util.Random;

public class Random随机数 {
    public static void main(String[] args) {
        // 2. 使用包
        Random r = new Random();
        for (int i = 0; i < 10; i++) {
            // 3. 生成 [0,10) 的随机数
            int a = r.nextInt(10);
            System.out.println(a);
        }
    }
}
```

## 方法 || 函数
- 完成特定功能的代码块
- 语法
```java
/*
修饰符 返回值类型 方法名（参数类型参数名1，参数类型参数名2..）{
	//方法体语句;
	return 返回值;
}
*/
    // 定义了一个求和的函数
    public static int sum(int a, int b) {
        return a + b;
    }
```
- 修饰符
	- public static
### 定义方法的注意事项
- 方法必须定义在类中
- 方法之间是平级关系，不能嵌套
- return 语句后的数据类型必须和返回值类型匹配
- return 之后不能放语句了,因为执行不到

### 方法重载
- 什么是方法重载?
	- 在同一个类中的多个方法，它们的方法名相同，参数列表不同，这样的情况，称为方法重载。方法重载与返回值类型无关。
	- 参数列表不同：
		- 参数的个数不同
		- 对应位置的参数类型不同
	- 方法签名
        	- 方法名+参数列表
- 为什么需要方法重载?
	- 当实现的功能相同，但具体的实现方式不同时，我们可以通过定义名称相同，参数（条件）不同的方法，来更好的识别和管理类中的方法。

## 数组

- 语法
```java
import java.util.Arrays;

public class 数组 {
    public static void main(String[] args) {
        // 1.数据类型[] 数组名 = new数据类型[长度];
        int[] arr = new int[1];
        System.out.println(arr);
        // 2.数据类型[]数组名 = new 数据类型[]{ 元素1，元素2，元素3.};
        int[] arr2 = new int[]{1, 2};
        System.out.println(arr2); //这样打印是的是数组的首地址
        System.out.println(Arrays.toString(arr2)); // 这样就可以打印整个数组出来了
        // 3. 数据类型[]数组名 = {元素1，元素2，元素3..};
        int[] arr3 = {1, 2, 3};
        System.out.println(arr3);
        int[] arr4 = new int[5];
    }
}
```

## 关于

[Java Web基础入门 ](https://www.cnblogs.com/woshimrf/p/java-web-springboot.html)

[哔哩哔哩大学](https://www.bilibili.com/video/BV1Wx411f7qN?p=21)

## 进度

https://www.bilibili.com/video/BV1Wx411f7qN?p=76