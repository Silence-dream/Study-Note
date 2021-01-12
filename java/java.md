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
- 基本类型的变量作为参数传递时传的是值
- 引用类型的变量作为参教传递时，传的是地址值

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





## 面向对象

-   语法

```java
package com.demo.类;

/**
 * 定义一个手机类
 * 它有品牌、型号和名称
 * 它可以打电话、发短信和玩游戏
 */
public class 手机 {
    // 成员变量 : 定义在类中，方法wait的变量

    String 品牌;
    String 型号;
    String 名称;

    // 成员方法
    public void 打电话(String name) {
        System.out.println("给" + name + "打电话");
    }

    public void 发短信() {
        System.out.println("发短信");
    }

    public void 玩游戏() {
        System.out.println("玩游戏");
    }
}

/*--------------------------------------------------------*/

package com.demo.类;

public class 测试手机类 {
    public static void main(String[] args) {
        手机 p = new 手机();

        p.品牌 = "小米牛逼";

        System.out.println(p.品牌);
        System.out.println(p.型号);
        System.out.println(p.名称);

        p.打电话("雷军");
        p.发短信();
        p.玩游戏();
    }
}

```

### 成员变量和局部变量的区别

-   定义位置
    
    -   成员变量：类中，方法外局部变量：方法中，或形式参数
    
- 初始化值
  
    -    成员变量：有默认初始化值局部变量：无默认初始化值，必须先赋值再使用
    
- 作用范围
    -    成员变量：在类中
    -    局部变量：在方法中
    
-   内存中的位置

    -   成员变量：堆内存局部变量：栈内存

-   生命周期

    -   成员变量：随着对象的创建而存在，随着对象的消失而消失

    -   局部变量：随着方法的调用而存在，随着方法调用完毕而消失

-   注意事项

    -   局部变量和成员变量重名时，采用就近原则

### private 关键字

-   private 的基本概念私有的，一种访问权限修饰符，用来修饰类的成员

-   特点
    -   被修饰的成员只能在本类中访问用法
-   语法
    -   private 数据类型 变量名；
    -   private 返回值类型 方法名（参数列表）{}

-   扩展
    -   public，公共的，访问权限修饰符，用来修饰类、成员变量、成员方法等，被修饰的内容可以在任意类中访问

-   案例

```java
package com.demo.类;

public class PrivateStudent {
    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }
}

/*-----------------------------------------------------------*/

package com.demo.类;

public class TestPrivateStudent {
    public static void main(String[] args) {
        PrivateStudent student = new PrivateStudent();
        student.setName("Hello");
        System.out.println(student.getName());
    }

}
```

### this 关键字

-   this的基本概念
    这，这个，表示本类对象的引用，本质是一个对象特点
-   每一个普通方法都有一个this，谁调用该方法，this就指向谁用法
-   this.属性名；this.方法名（参数）；

```java
/*
	为什么要使用 this? 
	请看下面的代码
*/

package com.demo.类;

public class PrivateStudent {
    private String name;
    private int age;

    public void setName(String name) {
        // 看这里 形参和成员变量重名了,要么修改形参但是这样就不能见名知意了,所以可以用this.属性名来表示成员变量
        // 左边 name 报错 The value name assigned to 'name' is never used 
        // 右边 name 报错 Variable 'name' is assigned to itself 
        name = name;
    }

    public void setAge(int age) {
        // 看这里 
        age = age;
    }

    public String getName() {
        return name;
    }
}

```



## JavaBean

### 构造方法

-   构造方法的定义
    格式
    修饰符 构造方法名（参数列表）（
    	// 方法体
    }

```java
public class Test{
   public Test(){
       // 构造方法名也就是类名,在这里例子中类名是 Test 没错就是第一行代码那个
   }
}
```



-   要求
    方法名必须与类名相同
    没有返回值
    没有返回值类型
-   注意事项
    若未提供任何构造方法，系统会给出默认无参构造若已提供任何构造方法，系统不再提供无参构造构造方法可以重载

-   标准 JavaBean 类代码
    -   Java语言编写类的标准规范。符合 JavaBean 标准的类，必须是具体的、公共的，并且具有无参数的构造方法，提供用来操作成员变量的 set 和 ge t方法

```java
package com.java.Bean;

public class Student {
    private String name;
    private int age;

    // 无参构造
    public Student() {
    }

    // 有参构造
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
/*------------------------------*/
package com.java.Bean;

public class TestStudent {
    public static void main(String[] args) {
        /*-------------------------------*/
        //Student student = new Student();
        //student.setName("123");
        //System.out.println(student.getName());

        /*--------------------------*/
        Student student = new Student("李四", 19);
        System.out.println(student.getName());
    }
}

```



## 继承

-   让类与类之间产生父子关系

    -   被继承的类叫做父类（基类、超类）

    -   继承的类叫做子类（派生类）

    -   格式（extends）

        ```java
        class 父类{
        // ..	
        	class 子类 extends 父类{
        	// ..
            }
        }
        ```

-   例子

    -   创建父类

        ```java
        package com.java.extendss;
        
        public class Father {
            private String name;
            private int age;
        
            public Father() {
            }
        
            public Father(String name, int age) {
                this.name = name;
                this.age = age;
            }
        
            public String getName() {
                return name;
            }
        
            public void setName(String name) {
                this.name = name;
            }
        
            public int getAge() {
                return age;
            }
        
            public void setAge(int age) {
                this.age = age;
            }
        }
        
        ```

    -   继承父类

        ```java
        package com.java.extendss;
        
        /**
         * son 子类,派生类
         * Father 父类,超类,基类
         */
        public class Son extends Father {
            
        }
        
        ```

    -   使用子类

        ```java
        package com.java.extendss;
        
        public class TestExtends {
            public static void main(String[] args) {
                Son son = new Son();
                son.setName("罗志祥");
                System.out.println(son.getName());
            }
        }
        ```

        

### 继承的使用场景

![image-20210112205854989](https://gitee.com/qianshilei/test/raw/master/img//image-20210112205854989.png)



## 关于

[Java Web基础入门 ](https://www.cnblogs.com/woshimrf/p/java-web-springboot.html)

[哔哩哔哩大学](https://www.bilibili.com/video/BV1Wx411f7qN?p=21)

## 进度

https://www.bilibili.com/video/BV1Wx411f7qN?p=95