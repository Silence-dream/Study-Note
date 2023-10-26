package 抽象类案例;

public class Test {
    public static void main(String[] args) {
        // 程序员类测试
        Coder coder = new Coder("张三", 50000, "程序员01");
        coder.getAll();
        
        System.out.println("---------------------");

        // 经理类测试
        Manager manager = new Manager("李四", 90000, "经理01", 2000);
        manager.getAll();

    }
}
