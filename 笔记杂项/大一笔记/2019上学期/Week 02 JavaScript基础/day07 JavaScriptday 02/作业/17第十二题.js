// 12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
// 要求：
// 1.	输出第二个对象里面的属性name的值
// 2.	将第一个对象里面的属性gender的值修改成数字18
// 3.	算出2个对象里面属性是age的和

var DX = [
    {
        name:"XiaoMing",
        age:19,
        gender:"男",
        studentId:01,
    }
    ,
    {
        name:"XiaoHome",
        age:18,
        gender:"女",
        studentId:02,
    }
]
console.log(DX[1].name);
DX[0].name=18;
console.log(DX[0].name);//验证修改18
var age;
age = DX[0].age+DX[1].age;
console.log(age);

