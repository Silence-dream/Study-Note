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
export {};
