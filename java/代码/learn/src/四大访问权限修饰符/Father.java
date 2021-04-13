package 四大访问权限修饰符;

public class Father {
    private void fn1() {
        System.out.println("fn1 private");
    }

    void fn2() {
        System.out.println("fn2 默认");
    }

    protected void fn3() {
        System.out.println("fn3 protected");
    }

    public void fn4() {
        System.out.println("fn4 public");
    }

    // 在本类中访问
    public static void main(String[] args) {
        Father father = new Father();
        father.fn1();
        father.fn2();
        father.fn3();
        father.fn4();
    }
}
