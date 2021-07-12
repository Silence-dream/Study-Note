// 1.导入包

import java.util.Scanner;

public class Scanner的使用 {
    public static void main(String[] args) {
        // 2. new Scanner实例对象
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个整数");
        // 3. 接收数据
        int i = sc.nextInt();
        System.out.println(i);
    }
}
