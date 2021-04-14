interface Person {
  name: string;
  age: number; // Property 'age' of type 'number' is not assignable to string index type 'string'.ts(2411)
  gender?: string; // Property 'gender' of type 'string | undefined' is not assignable to string index type 'string'.ts(2411)
  // propName 不是固定的写法,可以随便写 比如你写个 aaa 什么的
  [propName: string]: string;
}

let obj: Person = { name: "张安", age: 18 }; //Type '{ name: string; age: number; }' is not assignable to type 'Person'.Property 'age' is incompatible with index signature.Type 'number' is not assignable to type 'string'.ts(2322)

export {};
