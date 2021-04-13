package 继承案例;

public class Test {
    public static void main(String[] args) {
        Pig pig = new Pig();
        pig.setName("猪猪");
        pig.eat();

        pig.snotre();

        Dog dog = new Dog();
        dog.setName("狗狗");
        dog.eat();
        dog.watch();

    }
}
