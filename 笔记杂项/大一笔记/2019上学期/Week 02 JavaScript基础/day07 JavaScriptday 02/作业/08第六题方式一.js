// 6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
// 要求：
//   1. 通过2种方式定义对象
//   2. 通过2种方式给对象添加一个属性 gender,值是"男"
//   3. 获取属性姓名和年龄的值
//   4. 删除属性体重

var people01 = {
    name : '张三',
    age : 19,
    // gender: '男',
    height: '180',
    weight: '75KG',
    student_number: 01,
    phone_number:1383838438,
}
var people02 = {
    name:"李四",
    age:20,
    // gender:"男",
    height:"179",
    weight:"40KG",
    student_number:02,
    phone_number:1383838437,

}

var people03 = {
    name:"王麻子",
    age:70,
    // gender:"男",
    height:166,
    weight:"70kg",
    student_number:03,
    phone_number:1383838439
}


people01.gender="男";
people02.gender="男";
people03.gender="男";


console.log(people01,people02,people03);
console.log(
            people01.name,
            people01.age,
            people02.name,
            people02.age,
            people03.name,
            people03.age,
            );

delete people01.weight;
delete people02.weight;
delete people03.weight;

console.log(people01,people02,people03);//验证体重是否删除