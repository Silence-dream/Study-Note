// 一、编程题
// 1. 定义一个数组，保存六种数据类型的名称？
// var arr = ['Number', 'String', 'Boolean', 'undefined', 'null', 'Object']

// 2. 定义一个对象，保存你自己的名字、年龄、爱好？
// var obj = {
//     name: '张三',
//     age: 20,
//     hobby: "装逼"
// };

// 3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？
// var arr = [12, 43, 54, 43];
// console.log(arr[0] + arr[2]);

// 4. 定义一个二维数组（随便放些数据进去）？

// var arr = [1, 2, 3, [4, 5, 6]]
// console.log(arr[3][0])

// 5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
// var a = 1;
// var b = 2;
// var c = a + b;
// a = c - a;
// b = c - a;
// console.log(a);
// console.log(b);

// 6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
// var obj = {
//     name: "tom",
//     age: 10,
//     books: ["水浒", "西游"]
// };
// console.log(obj.name);
// console.log(obj.books[1]);

// 7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？
// var num1 = 10;
// var num2 = 20;
// var num3 = num1 + num2;
// console.log(num3);

// 8. 定义一个包含多行和另一个变量值的字符串？
// var num1 = 111;
// var str = `asdasd
//     asfsdgsdg
//     sdgsd
//     gs${num1}
//     fhhjgfjgfh
//     dfhdfhgdgsgd`;
// console.log(str);

// // 9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？
// var arr = [
//     {
//         name: "jack",
//         age: 18
//     },
//     {
//         name: "rose",
//         age: 16
//     }
// ];

// console.log(arr[1].age);

// 10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上
// var arr = [13, 54, 65, 23, 54];
// arr[2] = arr[1] + arr[3];
// console.log(arr);


// 11.说出下面代码的运行结果,并且解释原因:
// var name = '张三';
// var age;
// const gender = "女";
// name = "李四";
// console.log(name);//李四
// console.log(age);//undefined
// gender = "男";
// console.log(gender);//gender被定义成了常量
// 12.下列变量名哪个不正确
// var sname; var 1age; var Name; //第二个不正确   变量名不能以数字开头


// 二、解答题
// 1、数据类型有几种？
    // 七种  分别是 数字(Number), 字符串(String), 布尔(Boolean), undefined, null, 对象(Object),Symbol
// 2、什么是对象？如何创建对象？
// 对象就是由多个键值对组合到一起形成的一种类型。
// 创建对象有两种方法
// 方法一
//  var obj={
//     属性名:属性值,
//     属性名:属性值,
//     属性名:属性值
// }

// 方法二
// var obj = new Object({
//         属性名:属性值,
//         属性名:属性值,
//         属性名:属性值
// });

// 3、如何读取和修改和删除对象中的值？
// 读取对象中的值
// console.log( obj.属性名 )
// 修改对象中的值
// obj.属性名=要修改的值
// 删除对象中的值
// delete obj.属性名

// 4、什么时候会出现 undefined？
//声明一个变量但没有赋值时,就会出现undefined.


// 5、什么是数组？如何创建数组？
// 数组就是把一类数据组成一组
// 创建数组有两种方法
// 方法一
// var arr =[1,2,3,4];
// 方法二
// var arr= new Array(1,2,3,4)

// 6、如何获取和修改数组中的某一个值？
// 获取数组中的某一个值
// console.log(数组名[下标]);
// 修改数组中的某一个值
// 数组名[下标]=要修改的值
// var arr=[0,1,2,3,4]
// console.log(arr[0])
// arr[2]=100;
// console.log(arr[2])

// 7、js变量命名有什么规范？
    // 变量名只能有数字,字母和下划线,变量名不能以数字开头
    // 变量名尽量用单词来命名   少用拼音  

// 8、如何定义多行字符串？有几种方法？

// 有两种方法
// 第一种方法
// 在每一行后面加上\
// 第二种方法
// 用``把字符串装起来

// 9、Boolean 类型有几个值？分别代表什么？
// Boolean只有两个值  true  false
// true代表1
// false代表0

// 10、字符串中能解析变量吗？怎么解析？
// 字符串中解析变量要用反引号``把字符串包起来,再在字符串中加上${变量名}就可以解析了;