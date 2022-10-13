// string
// boolean
// number
// null
// enum
// any
// never
// tuple

let arr: number[] = [1, 2, 3, 53];

let x: [string, number] = ["1", 2];

// 数字枚举
enum A {
  A,
  B,
  C,
}
// 字符串枚举
enum B {
  A = "1",
  b = "2",
  c = "3",
}

enum C {
  a = 0,
  b = "1",
}

// 异构枚举

// ts 类型断言有哪几种形式?语法写出来,你更推荐使用哪种?

// 1. <type>变量
// 2. 变量 as type
// 更推荐使用 as 语法
// 因为在 JSX/TSX中使用尖括号的断言语法,会存在歧义

function add(x: number, y: number) {
  return x + y;
}

function add2(x: number, y?: number) {
  return x + y!;
}
function add3(x: number, y: number = 6) {
  return x + y!;
}
function add4(x: number, ...y: number[]) {
  console.log(x, ...y);
}

// 类型保护: 指的是可执行运行时检查的一种表达式,用于确保该类型在一定的范围内
// 类型保护关键字: in 关键字 typeof instanceof
interface sas {}
class dddB implements sas {}

interface bbb extends dddB {}

// 在 ts 中,可通过接口对js中的类进行约束,要求被约束的类具有一定的结构,使得项目开发更贵方,提高代码的可读性与可维护性

// class 子类 extends 父类
// class 类名 implements 接口名

// 注意点
// 类可以继承类,接口也可以继承类
// 只要一个接口继承了某个类,那么就会继承这个类中所有的属性和方法,但是只会继承属性和方法的声明,不会继承属性和方法实现
// 如果接口继承的类中包含 protected 的属性和方法,那么久只有这个类的子类才能实现这个接口
// 子类想要调用父类的属性和方法,就必须使用 super 关键字,super 用于访问和调用一个对象的父对象上的函数

class Person {
  public name = "张胜男";
  private age = 19;
  protected sex = "男";
  readonly hi = "hi";
}
let person = new Person();
person.name;
person.hi;

class Son extends Person {
  constructor() {
    super();
    this.sex = "女";
  }
  getSex() {
    return this.sex;
  }
}
let son = new Son();
son.name;
son.hi;
son.getSex();

// public 公共修饰符 任何地方都可以使用,默认所有的属性和方法都是public
// private 私有修饰符 只能在自身类中使用
// protected 受保护的修饰符: 相比private,允许继承后在子类中使用
// readonly 只读修饰符 必须在声明时或构造函数里倍初始化且不可修改

// 接口 : 简单理解,接口就是用来描述对象或者类的具体结构,约束他们的行为
// 类型别名 : 类型别名会给一个类型起个新名字,类型别名不会新建一个类型,它只是创建了新名字来引用哪个类型
//

// 为什么需要泛型
// 在编写代码的时候我们既要考虑代码的健壮性,又要考虑代码的灵活性和可重用性通过 ts 的静态检查能让我们编写的代码变得更加健壮,但是在变得健壮的同时却丢失了灵活性和可重用性
//泛型的作用
//通过泛型不仅可以让我们的代码变得更加健壮,还能让我们的代码在变得健壮的同时保持灵活性和可重用性

// 交叉类型 & 联合类型 |

interface AA {
  a: number;
  b: string;
}

interface BB {
  c: number;
  d: boolean;
}

type CC = AA | BB;

let obj: CC = {
  a: 1,
  b: "1",
  c: 1,
  d: false,
};
let mergeFn = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res;
};
let res = mergeFn({ name: "lnj" }, { age: 18 });
console.log(res);
// 常量枚举 不会生成真是存在的对象,而是利用枚举成员的值直接替换使用到的地方
// 普通枚举 枚举在编译之后是一个真是存储的对象,所以可以在运行时使用 这样的枚举叫普通枚举

// 常量枚举和普通枚举区别

// 普通枚举会生成真是存在的对象
// 常量枚举不会生成真是存在的对象,而是利用枚举成员的值直接替换使用到的地方

// interface 使用 extends扩展
// 类型别用 type 使用交叉类型符号 & 扩展

// 一次性导入导出
/**
 * export {x,y,z}
 * import {x,y,z} from "path"
 * 
 * 分开导入导出
 * export xxx
 * import { } from "path"
 * 
 * 默认导入导出
 * export default xxx;
 * import xxx from "path"
 * 
 * commonJS 模块化
 * moudle.exports {} 
 * let xx = require("path")
 * 
 * 隔离不同的js 文件,仅暴露当前魔抗所需要的其他模块
 * commonjs 和 es6 模块化都不可以对引入的对象进行赋值,即对对象内部属性的值进行改变
 * 二者都可以添加属性
 * 
 */


