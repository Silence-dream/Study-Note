// 新建一个用户类型
type User = {
  name: string; // 姓名
  password: string; // 密码
  address: string; // 地址
  phone: string; // 联系电话
};

// 创建的用户类型我希望是只读的且不能改 User

let readonlyUser1: Readonly<User> = { name: "张三", password: "123456", address: "北京", phone: "12345678901" }
readonlyUser1.name = "李四"

// 如果不能使用Readonly<User>，可以使用下面的方式
type ReadonlyUser = {
  readonly [P in keyof User]: User[P];  // 这里是 in keyof 就相当于 JavaScript 里面的 for..in
}


// 举一反三 实现一个可选对象
type PartialUser = {
  [P in keyof User]?: User[P]
}


//#region 
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

// 在以上代码中，因为 keyof  T 返回的类型可能会包含 symbol 类型，而 Capitalize 工具类型要求处理的类型需要是 string 类型的子类型，所以需要通过交叉运算符进行类型过滤。
//#endregion


let a :Pick<User,"address"> = {address:"北京"}

// 实现一个 Pick

type MyPink<T,K extends keyof T>={
  [P in K]: T[P];
}

// 一些隐射类型
type Item = { a: string; b: number; c: boolean };

type T1 = { [P in "x" | "y"]: number }; // { x: number, y: number }
type T2 = { [P in "x" | "y"]: P }; // { x: "x", y: "y" }
type T3 = { [P in "a" | "b"]: Item[P] }; // { a: string, b: number }
type T4 = { [P in keyof Item]: Item[P] }; // { a: string, b: number, c: boolean }


// 参考 https://mp.weixin.qq.com/s/uhL9VZuKg1-CtnGlI0YO7A