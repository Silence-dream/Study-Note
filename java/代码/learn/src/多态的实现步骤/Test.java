package 多态的实现步骤;


public class Test {
    public static void main(String[] args) {
        /*
         *  Java中实现多态的步骤
         *
         *  要有继承（或实现）关系
         *  要有方法重写
         *  父类引用指向子类对象（is a关系）
         */
        // 多态
        // 结论 : 多态中调用成员方法是编译看左（左边的类型有没有这个成员），运行看右（运行时具体用的是右边类中的该成员）
        Animal dog = new Dog(); // 父类引用指向子类对象（is a关Ω系）
        dog.eat();
        // 运行看右，虽然 dog 类中有 fn 方法 但是 父类 Animal 没有，所以无法调用
        //dog.fn();

    }
}
