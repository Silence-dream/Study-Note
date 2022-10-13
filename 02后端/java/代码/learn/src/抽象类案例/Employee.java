package 抽象类案例;

public abstract class Employee {
    //姓名
    private String name;
    //工资
    private double wages;
    //工号
    private String jobNumber;

    public Employee() {
    }

    public Employee(String name, double wages, String jobNumber) {
        this.name = name;
        this.wages = wages;
        this.jobNumber = jobNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getWages() {
        return wages;
    }

    public void setWages(double wages) {
        this.wages = wages;
    }

    public String getJobNumber() {
        return jobNumber;
    }

    public void setJobNumber(String jobNumber) {
        this.jobNumber = jobNumber;
    }

    /**
     * 工作
     */
    public abstract void work();
}
