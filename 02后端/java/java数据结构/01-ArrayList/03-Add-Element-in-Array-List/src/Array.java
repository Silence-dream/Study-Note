import java.util.Arrays;

public class Array {
    //1.数组
    private int[] data;
    //2.元素个数
    private int size;

    public Array() {
        // 构造函数调用构造函数
        this(10);
    }

    public Array(int capacity) {
        data = new int[capacity];
        size = 0;
    }

    // 获取容量
    public int getCapacity() {
        return data.length;
    }

    // 获取元素个数
    public int getSize() {
        return size;
    }

    // 判断为空吗
    public boolean isEmpty() {
        return size == 0;
    }

    //向数组中新增元素
    //向index为2的位置新增元素e
    public void add(int index, int e) {
        //0 极端情况：数组满了，能添加吗？
        if (size == data.length)
            //扩容
            throw new RuntimeException("数组已满，请扩容");

        // index<0   || index > size
        if (index < 0 || index > size)
            throw new RuntimeException("索引非法");

        //数组为空，index=0，size=0


        //1 挪：从size-1的位置挪到index位置
        for (int i = size - 1; i >= index; i--) {
            data[i + 1] = data[i];
        }
        //2 赋值
        data[index] = e;
        //3 维护size
        size++;
    }

    public static void main(String[] args) {
        Array array = new Array(10);
        array.add(10, 2);
        System.out.println(array);
    }
}
