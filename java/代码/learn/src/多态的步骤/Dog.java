package 多态的步骤;

public class Dog extends Animal {
    //要有继承（或实现）关系
    @Override //要有方法重写
    public void eat() {
        setName("狗");
        System.out.println(getName() + "吃骨头");
    }
}
