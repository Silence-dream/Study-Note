package Object类;

public class Test {
    public static void main(String[] args) {

        //- int hashCode（）：返回对象的哈希码值，该方法通过对象的地址值进行计算，不同对象的返回值一般不同
        //        - Class<?> getClass）：返回调用此方法对象的运行时类对象（调用者的字节码文件对象）
        //- String toString()：返回该对象的字符串表示
        //        - boolean equals()返回其它某个对象是否与此对象“相等"。默认情况下比较两个对象的引用，建议重写

        Object obj1 = new Object();
        Object obj2 = new Object();

        System.out.println(obj1.hashCode());
        System.out.println(obj2.hashCode());
        System.out.println("---------------------------");

        System.out.println(obj1.getClass());
        System.out.println(obj2.getClass());
        System.out.println("---------------------------");

        System.out.println(obj1.toString());
        System.out.println(obj2.toString());
        System.out.println("---------------------------");

        System.out.println(obj1.equals(obj2));

    }
}
