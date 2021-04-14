// hello 变量既可以是 number 类型也可以是 string 类型
let hello: number | string;
hello = 123;
hello = "123";

// 访问联合类型的共有属性
function getLength1(s: string | number): number {
  return s.length; //Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.ts(2339)
  // number 没有 length 这个方法所以报错
}
function getLength2(s: string | number): string {
  return s.toString();
  // string 和 number 里面都有 toString 方法所以没有报错
}

export {};
