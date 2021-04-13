package 抽象类案例;

public class Coder extends Employee {
    public Coder() {
        super();
    }

    public Coder(String name, double wages, String jobNumber) {
        super(name, wages, jobNumber);
    }

    public void getAll() {
        System.out.println("姓名 : " + super.getName() + "\n工资 : " + super.getWages() + "\n工号 : " + super.getJobNumber());
    }

    @Override
    public void work() {
        System.out.println("程序员在摸鱼");
    }
}
