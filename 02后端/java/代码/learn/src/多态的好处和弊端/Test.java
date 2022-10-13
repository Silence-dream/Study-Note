package 多态的好处和弊端;


public class Test {
    public static void main(String[] args) {

        Animal dog = new Dog();
        dog.eat();

        //dog.fn(); // 弊端无法调用 Dog 类中的独有方法

        // 如果想使用 Dog 类中的fn方法 那么就需要进行类型转换

        if (dog instanceof Dog) {
            Dog dog1 = (Dog) dog;
            dog1.fn();
        }

        if (dog instanceof Cat) {
            Cat cat = (Cat) dog;  // ClassCastException　报错
        } else {
            System.out.println("dododododo");
        }
        // 那么我为什么不直接声明一个 dog 类呢？
        Dog dog2 = new Dog();
        dog2.fn();
    }
}
