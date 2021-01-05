### 数据类型
#### 基本类型的存储



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

![image-20201120202921723](images/image-20201120202921723.png)



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



## 关于

[Java Web基础入门 ](https://www.cnblogs.com/woshimrf/p/java-web-springboot.html)

[哔哩哔哩大学](https://www.bilibili.com/video/BV1Wx411f7qN?p=21)

## 进度

https://www.bilibili.com/video/BV1Wx411f7qN?p=65