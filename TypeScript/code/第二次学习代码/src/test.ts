// 用泛型创建一个函数返回传入字符串的 length
interface LengthI {
  length: number;
}
function getLength<T>(str: T extends LengthI): T {
  return str.length; // 此时报错 str 上不存在 length 属性
}

let result = getLength("123");
console.log(result);