// 判断参数 value 的数据类型是否是函数
export function isFunction(value) {
  return typeof value === "function";
}
export function isObject(value) {
  return typeof value === "object" && value !== null;
}