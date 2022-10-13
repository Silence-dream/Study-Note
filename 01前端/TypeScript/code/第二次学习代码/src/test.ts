interface iUser {
  name: string;
  age: number;
}

type A = Required<iUser>;

let a: A = { name: "123", age: 1 }
console.log(a);
