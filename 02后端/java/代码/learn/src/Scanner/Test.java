package Scanner;

import java.util.Scanner;
/*
 *
 * 扫描器。能够解析字符串（String）和基本数据类型的数据构造方法 ( 下面的xxx代表数据类型 )
 *
 * Scanner（inputStream）：构造一个扫描器对象，从指定输入流中获取数据参数System.in，对应键盘录入成员方法
 * hasNextXxx () ：判断是否还有下一个输入项，其中Xxx可能是任意基本数据类型，返回结果为布尔类型
 * nextXxx () ：获取下一个输入项，其中Xxx可能是任意基本数据类型，返回对应类型的数据
 * String nextLine () ：获取下一行数据。以换行符作为分隔符。
 * String next () 获取下一个输入项，以空白字符作为分隔符空白字符：空格、tab、回车等
 *
 * */

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入一个整数");
        if (scanner.hasNextInt()) {
            int a = scanner.nextInt();
            scanner.nextLine();
            System.out.println(a);
        } else {
            System.out.println("请输入一个整数");
        }

        System.out.println("请输入一个字符串");
        String b = scanner.nextLine();
        System.out.println(b);
        scanner.close();


    }
}
