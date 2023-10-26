package static关键字;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        Developer developer = new Developer();

        //Developer.developer;
        developer.name = "小铪";
        developer.work = "写代码";
        developer.info();

        Developer developer2 = new Developer();
        developer2.name = "小链";
        developer2.work = "996";
        developer2.info();

        // 反转数组
        int[] arr = {1, 2, 3, 4, 5};
        Developer.reverse(arr);
        System.out.println(Arrays.toString(arr));
    }
}
