package interface成员变量的特点;

public interface USB {
    // 接口没有成员变量，只有公有的、静态的常量
    int A = 10; // == public static final int A = 10;

    //- JDK7及以前，公有的、抽象方法：
    //- 原因是所有方法都有默认修饰符：public abstract
    public void open();
    public abstract void close();

    //JDK8以后，可以有带方法体的方法了。
    //静态方法直接写，非静态方法要用 default 修饰

    public static void method1(){}
    public default void method2(){}

    //JDK9以后，可以有私有方法：
    private void method3(){};
}
