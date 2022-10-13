/*
 *
 * 使用顺序结构实现线性表
 * 使用数组实现线性表
 * 换种说法：手写 Arraylist
 *
 * 本类中需要有哪些属性?哪些方法?
 * 1.数组:存放元素
 * 2. size:元素的个数
 *
 * 3.构造方法:空参构造
 *             带参构造
 *
 * 4.容量 getCapacity: 房子的大小
 * 5.元素个数 getSize: 房子可以放的物品个数
 * 6.判断是否为空 size == 0
 *
 *
 * */
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
}
