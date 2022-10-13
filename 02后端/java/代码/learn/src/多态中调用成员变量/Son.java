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
