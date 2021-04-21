import java.util.Arrays;

public class Array {
    //1.数组
    private int[] data;
    //2.元素个数
    private int size;

    public Array() {
        // 构造函数调用构造函数
        // 默认是10
        this(10);
    }

    public Array(int capacity) {
        // 创建一个长度是 capacity 的数组
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

    @Override
    public String toString() {
        return "Array{" +
                "data=" + Arrays.toString(data) +
                ", size=" + size +
                '}';
    }

    // 添加元素到数组开头
    public void addFirst(int element) {
        add(0, element);
    }

    // 添加元素到数组结尾
    public void addLast(int element) {
        add(size, element);
    }

    // 根据索引查找元素
    public int find(int index) {
        return data[index];
    }

    // 查找元素是否存在?
    public boolean contains(int element) {
        for (int i = 0; i < data.length; i++) {
            if (data[i] == element) {
                return true;
            }
        }
        return false;
    }

    //修改：给索引，给新值，修改位置的值
    public void set(int index, int element) {
        //index一定要在0  到  size-1的返回以内
        if (index < 0 || index >= size) {
            throw new RuntimeException("索引非法");
        }
        data[index] = element;
    }

    //删除:给定索引，删除指定位置的值
    public int remove(int index) {
        //1 index必须在0-size范围以内
        if (index < 0 || index >= size) {
            throw new RuntimeException("索引非法");
        }
        int oldValue = data[index];

        // 挪动元素
        for (int i = index + 1; i < size; i++) {
            data[i - 1] = data[i];
        }
        data[size - 1] = 0;
        size--;
        return oldValue;
    }

    //删除头部元素
    public int removeFirst() {
        return remove(0);
    }

    //删除尾部元素
    public int removeLast() {
        return remove(size - 1);
    }

    public static void main(String[] args) {
        Array array = new Array(10);
        array.add(0, 1);
        array.add(0, 2);
        array.add(2, 3);
        System.out.println(array.toString());

        array.addFirst(100);
        System.out.println(array);
        array.addLast(222);
        System.out.println(array);
        System.out.println(array.find(2));

        System.out.println(array.contains(100));
        System.out.println(array.contains(109));

        array.set(0, 90);
        System.out.println(array);

        array.remove(0);
        System.out.println(array);

    }
}
