package interface的特点;

public class Mouse implements USB {

    @Override
    public void open() {
        System.out.println("连接鼠标");
    }
}
