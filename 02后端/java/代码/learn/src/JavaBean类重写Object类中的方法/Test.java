package JavaBean类重写Object类中的方法;

public class Test {
    public static void main(String[] args) {
        //需求：定义一个标准的JavaBean类并在测试类中进行测试学生类：Student属性：id（简号），name（含字），score（成绩）

        Student sc = new Student(1, "张三", 66);
        Student sc2 = new Student(1, "张三", 66);
        // 默认调用 toString 方法,重写 toString 方法之后再运行一次
        System.out.println(sc);
        System.out.println(sc.toString());
        // equals 原版方法比较的是对象的地址值重写之后根据 key 和 value 来比较
        System.out.println(sc.equals(sc2));
        System.out.println(sc.getClass());
    }
}
