import java.util.Arrays;


public class 数组 {
    public static void main(String[] args) {
        // 1.数据类型[] 数组名 = new数据类型[长度];
        int[] arr = new int[1];
        System.out.println(arr);
        // 2.数据类型[]数组名 = new 数据类型[]{ 元素1，元素2，元素3.};
        int[] arr2 = new int[]{1, 2};
        System.out.println(arr2); //这样打印是的是数组的首地址
        System.out.println(Arrays.toString(arr2)); // 这样就可以打印整个数组出来了
        // 3. 数据类型[]数组名 = {元素1，元素2，元素3..};
        int[] arr3 = {1, 2, 3};
        System.out.println(arr3);
    }
}
