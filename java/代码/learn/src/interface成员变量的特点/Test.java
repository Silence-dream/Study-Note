package interface成员变量的特点;

/*- 接口成员变量的特点
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
*/
public class Test {

    public static void main(String[] args) {
        // 接口没有成员变量，只有公有的、静态的常量：
        // USB.a=20;
        System.out.println(USB.A);
    }
}
