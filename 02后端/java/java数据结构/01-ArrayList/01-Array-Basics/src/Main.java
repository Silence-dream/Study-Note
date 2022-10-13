public class Main {
    public static void main(String[] args) {
        // 数组创建方式
        // 方式一
        int[] arr1 = new int[5];
        // 方式二
        int[] arr2 = new int[]{1, 2, 3};
        // 方式三
        int[] arr3 = {3, 2, 1};
        // 增强 for 循环
        for (int i : arr3) {
            System.out.println(i);
        }
        // 得到数据
        System.out.println("得到是数据是" + arr2[0]);
        // 删除索引处的值

    }
}
