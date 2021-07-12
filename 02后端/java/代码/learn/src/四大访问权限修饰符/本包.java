package 四大访问权限修饰符;

public class 本包 {
    public static void main(String[] args) {
        // 在本包中访问
        Father father = new Father();
        //father.fn1(); 报错
        father.fn2();
        father.fn3();
        father.fn4();
    }
}
