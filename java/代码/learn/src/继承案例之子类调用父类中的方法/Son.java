package 继承案例之子类调用父类中的方法;

public class Son extends Father {

    @Override
    public void hello() {
        // 重写父类方法
        //System.out.println("我是子类 hello");

        // 如果我想要把父类的方法全部继承下来并且继续扩展那怎么写呢？
        super.hello();
        System.out.println("我是子类 hello\n--------");
    }
}
