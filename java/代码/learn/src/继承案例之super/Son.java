package 继承案例之super;

public class Son extends Father {
    boolean flag = false;

    public void hide() {
        int flag = 100;
        System.out.println(flag); // 100
        System.out.println(this.flag); // false
        System.out.println(super.flag); // super
    }
}
