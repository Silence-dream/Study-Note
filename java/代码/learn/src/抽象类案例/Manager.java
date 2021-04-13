package 抽象类案例;

public class Manager extends Employee {
    // 奖金
    private double bonus;

    public Manager() {
        super();
    }

    public Manager(String name, double wages, String jobNumber, double bonus) {
        super(name, wages, jobNumber);
        this.bonus = bonus;
    }

    public void getAll() {
        System.out.println("姓名 : " + super.getName() + "\n工资 : " + super.getWages() + "\n工号 : " + super.getJobNumber() + "\n奖金 : " + this.bonus);
    }

    @Override
    public void work() {
        System.out.println("经理看着程序员写代码");
    }
}
