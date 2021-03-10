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

-   String不是基本数据类型，而是一个类（class），是Java编程语言中的字符串。String对象是char的有序集合，并且该值是不可变的。因为java.lang.String类是final类型的，因此不可以继承这个类、不能修改这个类。为了提高效率节省空间，我们应该用StringBuffer类。

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

- 简介
- 扫描器。能够解析字符串（String）和基本数据类型的数据构造方法 ( 下面的xxx代表数据类型 )
  - Scanner（inputStream）：构造一个扫描器对象，从指定输入流中获取数据参数System.in，对应键盘录入成员方法
  - hasNextXxx () ：判断是否还有下一个输入项，其中Xxx可能是任意基本数据类型，返回结果为布尔类型
  - nextXxx () ：获取下一个输入项，其中Xxx可能是任意基本数据类型，返回对应类型的数据
  - String nextLine () ：获取下一行数据。以换行符作为分隔符。
  - String next () 获取下一个输入项，以空白字符作为分隔符空白字符：空格、tab、回车等



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



## 面向对象之继承

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



### super 关键字

-   可以让子类访问父类中的重名变量（父类内存空间的标识）
-   案例

```java
package 继承案例之super;

public class Father {
    boolean flag = true;
}
/*------------------------------*/
package 继承案例之super;

public class Son extends Father {
    boolean flag = false;

    public void hide() {
        int flag = 100;
        System.out.println(flag); // 100
        System.out.println(this.flag); // false
        System.out.println(super.flag); // super
    }
}
/*---------------------------------*/
package 继承案例之super;

public class Test {
    public static void main(String[] args) {
        Son son = new Son();
        int a = 100;
        son.hide();
    }
}

```

### 子类调用父类中的方法

-   子父类中定义了同名的成员方法，如何使用？

```java
package 继承案例之子类调用父类中的方法;

public class Father {
    public void hello() {
        System.out.println("我是父类 hello");
    }

    public void hi() {
        System.out.println("我是父类 hi");
    }
}
/*---------------------------------*/
package 继承案例之子类调用父类中的方法;

public class Son extends Father {

    @Override
    public void hello() {
        // 重写父类方法
        //System.out.println("我是子类 hello");

        // 如果我想要把父类的方法全部继承下来并且继续扩展那怎么写呢？
        super.hello();
        System.out.println("我是子类 hello\n--------");
    }
}

/*---------------------------------*/
package 继承案例之子类调用父类中的方法;

public class Test {
    public static void main(String[] args) {
        Son son = new Son();
        son.hello();
        son.hi();
    }
}

```

### 子父类构造方法的使用

```java
package 继承案例之子父类构造方法的使用;

public class Father {
    public Father() {
        System.out.println("father");
    }
}
/*--------------------------------*/
package 继承案例之子父类构造方法的使用;

public class Son extends Father {
    public Son() {
        super(); // 如果不写 super 调用父类构造函数，java 也会自动帮你加上的
        System.out.println("son");
    }
}

/*--------------------------------*/
package 继承案例之子父类构造方法的使用;

public class Test {
    public static void main(String[] args) {
        Son son = new Son();
    }
}

```



### 方法重写

-   定义：

    -   子类中出现和父类方法定义相同的方法的现象

-   解释：

    -   方法重写也叫方法的复写、覆盖方法名、参数列表、返回值类型都相同

-   注意事项：

    -   父类私有方法无法重写

    -   子类方法访问权限不能小于父类方法

        -   权限从小到大分别是 : private、默认（啥也不写）、protected、public
        -   具体代码实现就是

        ```java
        public class Father {
            private void fn() {
                System.out.println("fn");
            }
        }
        /*------------------*/
        public class Son extends Father{
            // void 之前的修饰符不写即可重写父类中的方法
            void fn() {
                System.out.println("fn");
            }
            /* or */
            //protected void fn() {
            //    System.out.println("fn");
            //}
            
            /* or */
            //public void fn() {
            //    System.out.println("fn");
            //}
        }
        ```

        

    -   子类不能比父类方法抛出更大的异常（了解）

-   使用场景：扩展父类功能

    -   父类功能过时，重新实现父类功能



### 继承的特点

-   单继承
    -   Java只支持类的单继承，但是支持多层（重）继承Java支持接口的多继承，语法为：
        接口A extends接口B，接口C，接口D..
-   私有成员不能继承
    -   只能继承父类的非私有成员（成员变量、成员方法）
-   构造方法不能继承
    -   构造方法用于初始化本类对象。
    -   创建子类对象时，需要调用父类构造初始化该对象的父类内容，若父类构造可以被继承，该操作会造成调用的混乱。
-   继承体现了“is a”的关系子类符合"is a（是一个）“父类的情况下，才使用继承，其它情况不建议使用

## 四大访问权限修饰符

-   勾选表示为可以访问

|                     | 本类 | 本包 | 不同包下的子类 | 不同包下的其他类 |
| ------------------- | ---- | ---- | -------------- | ---------------- |
| private(私有的)     | √    |      |                |                  |
| 默认                | √    | √    |                |                  |
| protected(受保护的) | √    | √    | √              |                  |
| public(公共的)      | √    | √    | √              | √                |

-   总结
    -   private：强调的是给自己来使用。
    -   默认：强调的是给同包下的来来使用。
    -   protected：强调的是给子类使用。
    -   public：强调的是给大家使用。

### 方法重载(Overload)和方法重写(Override)的区别

![image-20210114172651522](https://gitee.com/qianshilei/test/raw/master/img//image-20210114172651522.png)



## 面向对象之多态

### 多态概述

-   多种状态，同一对象在不同情况下表现出不同的状态或行为

-   Java中实现多态的步骤
    -   要有继承（或实现）关系
    -   要有方法重写
    -   父类引用指向子类对象（is a关系）
    
#### 多态中调用成员方法

-   结论 : 多态中调用成员方法是编译看左（左边的类型有没有这个成员），运行看右（运行时具体用的是右边类中的该成员）

```java
    package 多态的实现步骤;
    
    public class Animal {
        private String name;
    
        public Animal() {
        }
    
        public Animal(String name) {
            this.name = name;
        }
    
        public String getName() {
            return name;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public void eat() {
            System.out.println("吃东西");
        }
    }
    
    /*-----------------------------*/
    package 多态的实现步骤;
    
    public class Dog extends Animal {
        //要有继承（或实现）关系
        @Override //要有方法重写
        public void eat() {
            setName("狗");
            System.out.println(getName() + "吃骨头");
        }
    }
    
    /*-----------------------------*/
    package 多态的实现步骤;
    
    public class Test {
        public static void main(String[] args) {
            /*
             *  Java中实现多态的步骤
             *
             *  要有继承（或实现）关系
             *  要有方法重写
             *  父类引用指向子类对象（is a关系）
             */
            // 多态
            // 结论 : 多态中调用成员方法是编译看左（左边的类型有没有这个成员），运行看右（运行时具体用的是右边类中的该成员）
            Animal dog = new Dog(); // 父类引用指向子类对象（is a关系）
            dog.eat();
            // 运行看右，虽然 dog 类中有 fn 方法 但是 父类 Animal 没有，所以无法调用
            //dog.fn();
        }
    }
    
```

#### 多态中调用成员变量

- 结论 : 使用成员变量，遵循编译看左，运行看左
    - 编泽看左：意思是在编译期间会看左边的类型有没有这个成员，没有就报错，有就不报。
    *  运行看左：意思是在运行期间使用的是左边的类型中的这个成员。

```java
package 多态中调用成员变量;

public class Father {
    String name = "Father";
}

/*--------------------------*/

package 多态中调用成员变量;

public class Son extends Father {
    String name = "Son";

    public static void main(String[] args) {
        /*
         *
         * 多态关系中，使用成员变量，遵循编译看左，运行看左。
         *  编泽看左：意思是在编译期间会看左边的类型有没有这个成员，没有就报错，有就不报。
         *  运行看左：意思是在运行期间使用的是左边的类型中的这个成员。
         */
        Father father = new Son();
        System.out.println(father.name); // Father
    }
}

```



### 多态的好处和弊端

-   多态的好处
    -   可维护性：基于继承关系，只需要维护父类代码，提高了代码的复用性，大大降低了维护程序的工作量
    -   可扩展性：把不同的子类对象都当作父类看待，屏蔽了不同子类对象间的差异，做出通用的代码，以适应不同的需求，实现了向后兼容
-   多态的弊端
    -   不能使用子类特有成员(方法)
-   类型转换
    -   当需要使用子类特有功能时，需要进行类型转换
    -   向上转型（自动类型转换）子类型转换成父类型
    -   Animal anima = new Dog（）；
    -   向下转型（强制类型转换）父类型转换成子类型
    -   Dog dog = (Dog) animal;
-   示例

```java
package 多态的好处和弊端;

public class Animal {

    public void eat() {
        System.out.println("吃东西");
    }
}
/*-----------------------*/
package 多态的好处和弊端;

public class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }

    public void fn() {
        System.out.println("fn");
    }
}

/*-----------------------*/
package 多态的好处和弊端;


public class Test {
    public static void main(String[] args) {

        Animal dog = new Dog();
        dog.eat();

        //dog.fn(); // 弊端无法调用 Dog 类中的独有方法

        // 如果想使用 Dog 类中的fn方法 那么就需要进行类型转换

        if (dog instanceof Dog) {
            Dog dog1 = (Dog) dog;
            dog1.fn();
        }

        if (dog instanceof Cat) {
            Cat cat = (Cat) dog;  // ClassCastException　报错
        } else {
            System.out.println("dododododo");
        }
        // 那么我为什么不直接声明一个 dog 类呢？
        Dog dog2 = new Dog();
        dog2.fn();
    }
}

```



### 抽象类概述

-   抽象类的概念
     包含抽象方法的类。用abstract修饰
-   抽象方法的概念
    -   只有方法声明，没有方法体的方法。用abstract修饰
-   抽象方法的由来
    -   当需要定义一个方法，却不明确方法的具体实现时，可以将方法定义为 abstract ，具体实现延迟到子类
-   案例

```java
package 抽象类;

// 父类 abstract 抽象 需要在 class 前声明
public abstract class Animal {
    // 抽象方法  让子类必需重写 eat 方法
    public abstract void eat();
}
/*-----------------------------------------*/
package 抽象类;

public class Dog extends Animal {

    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }
}

/*-----------------------------------------*/
package 抽象类;

public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();

        Animal animal = new Dog();
        animal.eat();
    }
}

```



### 抽象类的特点

-   修饰符：必须用 abstract 关键字修饰
    -   修饰符 abstract class 类名 { } 
    -   修饰符 abstract 返回类型 方法名 { }

-   抽象类不能被实例化，只能创建子类对象
-   抽象类子类的两个选择
    -   重写父类所有抽象方法
    -   定义成抽象类
-   抽象类成员的特点
    -   成员变量：
        -   可以有普通的成员变量也可以有成员常量（final）
    -   成员方法：
        -   可以有普通方法，也可以有抽象方法抽象类不一定有抽象方法，有抽象方法的类一定是抽象类（或接口）
    -   构造方法：
        -   像普通类一样有构造方法，且可以重载

### final关键字

-   final的概念
    -   最终的、最后的
-   final的作用
    -   用于修饰类、方法和变量
-   final的作用
    -   修饰类：该类不能被继承 如（String，System）
    -   修饰方法：该方法不能被重写，不能与 abstract 共存
-   修饰变量：最终变量，即常量，只能赋值一次不建议修饰引用类型数据，因为仍然可以通过引用修改对象的内部数据，意义不大

-   例子

```java
package final关键字;

public class Animal {
    public final void eat() {
        System.out.println("干饭了干饭了");
    }
}
/*-----------------------------------------*/
package final关键字;

public final class Cat extends Animal {
    /*@Override
    public final void eat() {  // 无法重写 final 关键字修饰的方法
        System.out.println("干饭了干饭了");
    }*/
}

/*-----------------------------------------*/
package final关键字;

public class Dog /*extends Cat*/ { //Cannot inherit from final
}

/*-----------------------------------------*/
package final关键字;

public class Test {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.eat();
    }
}

```





### static关键字

-   static的概念
    -   静态的
-   static的作用
    -   被它修饰的内容就不属于对象了而是属于类
    -   用于修饰类的成员：
        -   成员变量：类变量
        -   成员方法：类方法
-   调用方式
    -   类名.成员变量名；
    -   类名.成员方法名（参数）；
-   static修饰成员变量
    -   特点：被本类所有对象共享
-   static修饰成员方法
    -   静态方法：
        -   静态方法中没有对象this，所以不能访问非静态成员
    -   静态方法的使用场景
        -   只需要访问静态成员
        -   不需要访问对象状态，所需参数都由参数列表显示提供
    -   需求：定义静态方法，反转数组中的元素
-   案例

```java
package static关键字;

public class Developer {
    String name;
    String work;

    //static String developer = "研发部";
    final static String developer = "研发部";

    public void info() {
        System.out.println("我是" + developer + "的" + name + ",我是干" + work + "的");
    }

    public static void reverse(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }

}

/*-----------------------------------------*/
package static关键字;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        Developer developer = new Developer();

        //Developer.developer;
        developer.name = "小铪";
        developer.work = "写代码";
        developer.info();

        Developer developer2 = new Developer();
        developer2.name = "小链";
        developer2.work = "996";
        developer2.info();

        // 反转数组
        int[] arr = {1, 2, 3, 4, 5};
        Developer.reverse(arr);
        System.out.println(Arrays.toString(arr));
    }
}


```



### 接口概述

-   接口的概念
    -   接口技术用于描述类具有什么功能，但并不给出具体实现，类要遵从接口描述的统一规则进行定义，所以，接口是对外提供的一组规则、标准。
-   接口的定义
    -   定义接口使用关键字 
        -   interface 接口名 { }
    -   类和接口是实现关系，用 implements 表示 
        -   class 类名 implements 接口名
-   案例

```java
package interface接口;

public interface Animal {
    public abstract void eat();
}
/*--------------------------------*/
package interface接口;

public class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }
}
/*------------------------------------*/
package interface接口;

public class Test {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.eat();
    }
}

```



### 接口成员的特点

-   接口不能实例化通过多态的方式实例化子类对象

-   接口的子类（实现类）可以是抽象类，也可以是普通类

-   接口继承关系的特点
    -   接口与接口之间的关系
        -   继承关系，可以多继承，格式：
            接口 extends 接口1，接口2，接口3..
    -   继承和实现的区别
        -   继承体现的是“is a”的关系，父类中定义共性内容
        -   实现体现的是“like a"的关系，接口中定义扩展功能

- 接口成员变量的特点
  - 接口没有成员变量，只有公有的、静态的常量：
    public static final 常量名 = 常量值；
  - 成员方法
  - JDK7及以前，公有的、抽象方法：
    - 原因是所有方法都有默认修饰符：public abstract
  - JDK8以后，可以有带方法体的方法了。
    - 静态方法直接写，非静态方法要用 default 修饰
  - JDK9以后，可以有私有方法：
    - private 返回值类型 方法名() { }
- 接口构造方法的特点
  - 构造方法
    接口不能够实例化，也没有需要初始化的成员，所以接口没有构造方法

## Object 类

- 类层次结构最顶层的基类，所有类都直接或间接的继承自 Object 类，所以，所有的类都是一个 Object（对象）。

![image-20210308154310078](D:\02 OneDrive\OneDrive\01 My Code\01 CZXY\01 My Code\11 学习笔记\Study-Note\java\img\image-20210308154310078.png)



- 构造方法
  Object（）：构造一个对象。所有子类对象初始化时都会优先调用该方法
- 成员方法
  - int hashCode（）：返回对象的哈希码值，该方法通过对象的地址值进行计算，不同对象的返回值一般不同
  - Class<?> getClass）：返回调用此方法对象的运行时类对象（调用者的字节码文件对象）
  - String toString()：返回该对象的字符串表示
  - boolean equals()返回其它某个对象是否与此对象“相等"。默认情况下比较两个对象的引用，建议重写



## 关于

[Java Web基础入门 ](https://www.cnblogs.com/woshimrf/p/java-web-springboot.html)

[哔哩哔哩大学](https://www.bilibili.com/video/BV1Wx411f7qN?p=21)

## 进度

https://www.bilibili.com/video/BV1Wx411f7qN?p=133