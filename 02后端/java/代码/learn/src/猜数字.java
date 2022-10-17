import java.util.Random;
import java.util.Scanner;

public class 猜数字 {
    public static void main(String[] args) {
        Random random = new Random();

        int 随机数 = random.nextInt(100) + 1;
        System.out.println("产生的随机数是 : " + 随机数);
        Scanner sc = new Scanner(System.in);
        // 死循环猜数字
        while (true) {
            System.out.println("请输入一个整数");
            int 用户输入 = sc.nextInt();
            if (用户输入 == 随机数) {
                System.out.println("猜中了");
                break;
            } else if (用户输入 > 随机数) {
                System.out.println("猜大了");
            } else if (用户输入 < 随机数) {
                System.out.println("猜小了");
            }
        }
    }
}
