import java.util.Random;

public class Random随机数 {
    public static void main(String[] args) {
        Random r = new Random();
        // 生成 [0,10) 的随机数
        for (int i = 0; i < 10; i++) {
            int a = r.nextInt(10);
            System.out.println(a);
        }
    }
}
