package static关键字;

public class Developer {
    String name;
    String work;

    //static String developer = "研发部";
    final static String developer = "研发部";

    public void info() {
        System.out.println("我是" + developer + "的" + name + ",我是干" + work + "的");
    }

    public static void reverse(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }

}
