// 1.导入包

import java.util.Random;

public class Random随机数 {
    public static void main(String[] args) {
        // 2. 使用包
        Random r = new Random();
        for (int i = 0; i < 10; i++) {
            // 3. 生成 [0,10) 的随机数
            int a = r.nextInt(10);
            System.out.println(a);
        }
    }
}
