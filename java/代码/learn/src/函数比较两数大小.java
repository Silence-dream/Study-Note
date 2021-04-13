public class 函数比较两数大小 {
    public static void main(String[] args) {
        boolean flag = 比较大小(3, 2);
        System.out.println(flag);
    }

    public static boolean 比较大小(int a, int b) {
        boolean flag = a > b ? true : false;
        return flag;
    }
}
