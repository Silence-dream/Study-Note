public class Student {
    String name;
    String pwd;

    public Student(String name, String pwd) {
        this.name = name;
        this.pwd = pwd;
    }

    public Student() {
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }
}
