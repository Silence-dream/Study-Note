/*
 *
 *
 * 假设有3个班级，每个班级有35个同学，现在要将100个橙子分别发放给每位同学，每人只能拿一个。
 * 条件：如果该同学已经有了橙子，则不再发给该同学；如果橙子发完了，则发放活动终止。
 * 设编号是5的倍数的同学已经有橙子了
 */
public class 发橙子 {
    public static void main(String[] args) {
        int 班级人数 = 35;
        int 班级个数 = 3;
        int 橙子总数 = 100;
        int count = 0;
        A:
        // 循环标记
        for (int i = 1; i <= 班级个数; i++) {
            for (int j = 1; j <= 班级人数; j++) {
                if (j % 5 == 0) {
                    continue;
                } else {
                    System.out.println("正在给第" + i + "班的第" + j + "个同学发橙子");
                    count++;
                }
                // 如果橙子发完了那么跳出循环
                if (count == 橙子总数) {
                    break A;
                }
            }
        }
        System.out.println("一共发了" + count + "个橙子");
    }
}
