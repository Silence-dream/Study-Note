public class 数组最大值 {
    public static void main(String[] args) {
        int[] arr = {52, 5, 600, 7, 8, 9, 200};
        int temp = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (temp < arr[i]) {
                temp = arr[i];
            }
        }
        System.out.println("temp:" + temp);
    }
}
