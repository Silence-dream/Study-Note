package 多态的步骤;


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
        Animal dog = new Dog(); // 父类引用指向子类对象（is a关系）
        dog.eat();
    }
}
