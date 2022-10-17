public class 打印数组方法 {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4};
        printArray(arr);
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println("数组的值是" + arr[i]);
        }
    }
}
