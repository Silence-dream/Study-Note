package 四大访问权限修饰符之不同包;

import 四大访问权限修饰符.Father;

public class Son extends Father {
    // 不同包下的子类
    public static void main(String[] args) {
        Father father = new Father();
        //father.fn1();  // 报错
        //father.fn2();  // 报错
        //father.fn3();  // 报错
        father.fn4();

        Son son = new Son();
        //son.fn1();  // 报错
        //son.fn2();  // 报错
        son.fn3();  // 报错
        son.fn4();
    }
}
