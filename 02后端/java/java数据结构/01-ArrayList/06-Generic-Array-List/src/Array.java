import java.util.Arrays;

// 扩展泛型
public class Array<E> {
    //1.数组
    private E[] data;
    //2.元素个数
    private int size;

    public Array() {
        // 构造函数调用构造函数
        // 默认是10
        this(10);
    }

    public Array(int capacity) {
        // 创建一个长度是 capacity 的数组
        // Type parameter 'E' cannot be instantiated directly
        // java 中 new 后面跟的是 class,E 不是 class
        // 在 java 中 Object 能接收任何类型
        data = (E[]) new Object[capacity];
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
    public void add(int index, E e) {
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
        return "[" +
                "data=" + Arrays.toString(data) +
                ", size=" + size +
                ']';
    }

    // 添加元素到数组开头
    public void addFirst(E element) {
        add(0, element);
    }

    // 添加元素到数组结尾
    public void addLast(E element) {
        add(size, element);
    }

    // 根据索引查找元素
    public E find(int index) {
        return data[index];
    }

    // 查找元素是否存在?
    public boolean contains(E element) {
        for (int i = 0; i < size; i++) {
            if (data[i].equals(element)) {
                return true;
            }
        }
        return false;
    }

    //修改：给索引，给新值，修改位置的值
    public void set(int index, E element) {
        //index一定要在0  到  size-1的返回以内
        if (index < 0 || index >= size) {
            throw new RuntimeException("索引非法");
        }
        data[index] = element;
    }

    //删除:给定索引，删除指定位置的值
    public E remove(int index) {
        //1 index必须在0-size范围以内
        if (index < 0 || index >= size) {
            throw new RuntimeException("索引非法");
        }
        E oldValue = data[index];

        // 挪动元素
        for (int i = index + 1; i < size; i++) {
            data[i - 1] = data[i];
        }
        data[size - 1] = null;
        size--;
        return oldValue;
    }

    //删除头部元素
    public E removeFirst() {
        return remove(0);
    }

    //删除尾部元素
    public E removeLast() {
        return remove(size - 1);
    }

    public static void main(String[] args) {
        Array<Student> studentArray = new Array<>();
        studentArray.add(0, new Student("张安", "123"));
        studentArray.add(0, new Student("梨花", "456"));
        System.out.println(studentArray);

    }
}
