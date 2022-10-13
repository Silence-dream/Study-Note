let lihua = {
  name: "李华",
  age: 18,
  career: "学生",
};
let zhangsan = {
  name: "张三",
  age: 18,
  career: "老师",
};

function createStudentInfo(name, age) {
  this.name = name;
  this.age = age;
}
// 处我们采用了 ES5 构造函数的写法，因为 ES6 中的 class 其实本质上还是函数，class 语法只是语法糖，构造函数，才是它的真面目。
let a = new createStudentInfo("李华", 18);
console.log(a);
