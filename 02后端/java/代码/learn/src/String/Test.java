package String;

/*
 * - 简介
 * 字符串。每一个字符串对象都是常量。
 * 构造方法
 * - String（byte [ ]）：构造一个 String对象，将指定字节数组中的数据转化成字符串
 * - String（char [ ]）：构造一个 String对象，将指定字符数组中的数据转化成字符串
 * 成员方法
 * - boolean equals（String判断当前字符串与给定字符串是否相同，区分大小写
 * - boolean equalslgnoreCase（String）：判断当前字符串与给定字符串是否相同，不区分大小写
 * - boolean startsWith（String）：判断是否以给定字符串开头
 * - boolean isEmpty() 判断字符串是否为空
 * */
public class Test {
    public static void main(String[] args) {
        byte[] a = {97, 98, 99};
        String s1 = new String(a);  // String（byte [ ]）：构造一个 String对象，将指定字节数组中的数据转化成字符串
        System.out.println(s1);

        char[] b = {'h', 'i'};
        String s2 = new String(b);
        System.out.println(s2);

        String s3 = "abc";
        System.out.println(s3.equals("abc"));
        System.out.println(s3.equals("abC"));
        System.out.println("--------------------");
        System.out.println(s3.equalsIgnoreCase("abC"));
        // 是否以 ab 开头
        System.out.println(s3.startsWith("ab"));
        System.out.println(s3.isEmpty());
    }
}
