package interface接口;

public class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }
}
