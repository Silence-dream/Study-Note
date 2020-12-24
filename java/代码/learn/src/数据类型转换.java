public class 数据类型转换 {
    public static void main(String[] args) {
        int a = 10;
        byte b = 20;
        System.out.println(a + b); // 在计算过程中变量 b 被隐式自动类型转换提升为 int 之后和变量 a进行了计算

        // byte sum = a + b; //这里报错就是第 5 行的解释

        // 可以如果我们就是想要用 byte 来接收 a+b 的和呢? 那么就需要用到强制类型转换
        byte sum = (byte)(a + b);
        System.out.println("sum = " + sum);
    }
}
