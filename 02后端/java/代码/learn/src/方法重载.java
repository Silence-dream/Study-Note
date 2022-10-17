public class 方法重载 {
    public static void main(String[] args) {
        System.out.println(比较(1, 2));
        System.out.println(比较(1L, 2L));
        System.out.println(比较(1.1, 2.2));
    }

    public static boolean 比较(int a, int b) {
        System.out.println("这里是 int");
        return a == b;
    }

    public static boolean 比较(long a, long b) {
        System.out.println("这里是 long");
        return a == b;
    }

    public static boolean 比较(double a, double b) {
        System.out.println("这里是 double");
        return a == b;
    }
}
