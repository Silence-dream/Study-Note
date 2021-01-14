package 继承案例之子父类构造方法的使用;

public class Son extends Father {
    public Son() {
        super(); // 如果不写 super 调用父类构造函数，java 也会自动帮你加上的
        System.out.println("son");
    }

    void fn() {
    }
}
