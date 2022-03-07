// observe 方法是响应式原理的入口方法
import {
  isObject
} from '../utils';
export function observe(data) {
  //  判断 data 是否是对象
  // 不是对象不劫持
  if (!isObject(data)) return;

  // 开始执行劫持
  return new Observer(data);
}

class Observer {
  // 通过构造函数把 data 传递进来
  constructor(data) {
    // 使用 walk 方法来进行劫持
    this.walk(data)
  }
  walk(data) {
    // 遍历 data 选项中的所有数据
    Object.keys(data).forEach(function (key) {
      console.log(typeof data[key])
      // 为每一个数据添加 getter 和 setter
      // defineReactive(data, key, data[key]);
      //#region 不能这样直接调用 defineProperty 来设置 getter 和 setter，因为这样设置会导致获取值的时候被无限循环调用
      // 为什么 data[key] 会被无限调用？
      // 因为第一次循环的时候 data[key] 会被设置为 data[key]()所以 data[key]() 会被调用，然后调用 data[key]() 会调用 data[key]()
      // 如何解决？
      // 创建一个函数来返回确定的值 data[key]

      Object.defineProperty(data, key, {
        get() {

          return data[key];
        },
        set(newValue) {
          // 设置新值前, 先对新值进行修改, 如果新值是一个完全的新的引用数据, 它需要重新被重写
          // observe(newValue);
          // 重新赋值
          data[key] = newValue;
        },
      });
      //#endregion


      console.log(data[key])
    });
  }
}

// 数据劫持
function defineReactive(data, key, value) {
  // 通过递归为深层次结构的数据添加 getter 和 setter
  // Vue2 中的性能问题就在于此
  // observe(data[key]);
  // 此处为闭包, 注释文字所在作用域不会被销毁
  // 所以在 get 方法中获取 value 时是可以拿到值的, 在 set 方法中设置值也是生效的
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      // 设置新值前, 先对新值进行修改, 如果新值是一个完全的新的引用数据, 它需要重新被重写
      // observe(newValue);
      // 重新赋值
      value = newValue;
    },
  });
}