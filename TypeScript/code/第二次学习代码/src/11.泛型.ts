// 创建一个函数,它可以创建一个指定长度的数组,同时将每一项都填充一个默认值：
function createArray<T>(length: number, value: T): T[] {
  return new Array(length).fill(value);
}

let result = createArray(5, false);
console.log(result[0]);

// 写法二

let createArray2 = function <T>(length: number, value: T): Array<T> {
  return new Array(length).fill(value);
};

// 泛型约束 

// 用泛型创建一个函数返回传入字符串的 length
interface LengthI {
  length: number;
}
// 泛型 T 继承 LengthI 让传入数据类型必须有 length 属性
function getLength<T extends LengthI>(str: T): T {
  console.log(str.length);
  return str;
}

let result2 = getLength("123");
let result3 = getLength(123); // Argument of type 'number' is not assignable to parameter of type 'LengthI'.
console.log(result);

export {};
