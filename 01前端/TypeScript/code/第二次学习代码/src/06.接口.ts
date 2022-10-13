interface Person {
  readonly id: number;
  name: string;
  age: number;
  gender?: string;
  // propName 不是固定的写法,可以随便写 比如你写个 aaa 什么的
  [propName: string]: any;
}

let obj: Person = { id: 1, name: "张安", age: 18 };
obj.id = 2; // Cannot assign to 'id' because it is a constant or a read-only property.

let arr: Person[] = [
  { id: 1, name: "张安", age: 18 },
  {
    id: 1,
    name: "荒芜",
    age: 20,
    gender: "男",
    p1: "我是任意属性",
    p2: 123,
    p3: "我是任意属性",
  },
];

export { };
