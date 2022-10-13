package 四大访问权限修饰符之不同包;

import 四大访问权限修饰符.Father;

public class 其他类 {
    public static void main(String[] args) {
        // 不同包下的其他类
        Father father = new Father();
        //father.fn1();  // 报错
        //father.fn2();  // 报错
        //father.fn3();  // 报错
        father.fn4();
    }
}