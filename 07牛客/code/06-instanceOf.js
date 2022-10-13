function Person() {}

let p = new Person();
// instanceof 用于判断实例是否属于某种类型
console.log(p instanceof Person);

// 遍历左边隐式 proto 即可
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__;
  }
}

console.log(new_instance_of(p, Array));
