package 多态的好处和弊端;

public class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }

    public void fn() {
        System.out.println("fn");
    }
}
