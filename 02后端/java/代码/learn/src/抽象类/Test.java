package 抽象类;

public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();

        Animal animal = new Dog();
        animal.eat();
    }
}
