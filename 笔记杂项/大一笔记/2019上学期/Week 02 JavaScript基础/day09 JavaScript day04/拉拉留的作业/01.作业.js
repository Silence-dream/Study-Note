// // 1.在控制台打印输出目前所学的所有数据类型的类型
// console.log(typeof 1);
// console.log(typeof "a");
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});

// // 2.数据类型的相互转换:
// Number(true)  // 1
// Number(false) // 0
// Number(" ") // 0
// Number([]) //NaN
// Number(['1', '2']) //NaN
// Number([1]) // 1
// Number({})   ///NaN
// Number({ a: 1 }) // /NaN
// Number("3.14") //3.14
// Number(null) // ?
// Number(undefined) //?
// Number("12456aaaa") ///NaN
// String({}) // ?
// String([]) // ?
// String(123) //'123'
// String(false) //'false'
// String(null) //?
// String(undefined) //?
// undefined.toString() //?
// null.toString()  //?
// Boolean(0) // false
// Boolean("") //false
// Boolean(undefined) //false
// Boolean(null) //false
// Boolean(NaN) / false
// Boolean({}) // trun
// Boolean([])  // trun
// // 3. 将下列结果打印出来下面的题的结果
// var num1 = 123;
// var num2 = "123"
// console.log(num1 + num2)  // '123123'  因为num2是字符串所以+起连接的作用
// console.log(num1 + +num2)  // 246      第二个+号会把string转成number
// console.log(num1 + !!num2)  // 124      !! 是将其他类型的值转换为boolean  num2转换为布尔为trun  ==num1+trun  因为两个值的类型不同  所以要转换为同有类型的值  将trun转换为数字1  所以结果是124
// console.log(num1 + Number(num2))  // 246   Number的作用是将其他类型的值转换为数字 所以num2 = 123
// 4. 求值
// var a = 1; var b = ++a + ++a; console.log(b);  // 5  a=1   然后++a是先自增在运算 所以第一个++a 的结果是2   因为现在a=2  所以 第二个++a的结果为3   2+3=5
// var a = 1; var b = a++ + ++a; console.log(b);  // 4  a=1   a++是先运算在自增 所以第一个a++ 的结果是1   然后在赋值 a=2  然后++a是先自增在运算 所以==a =3   1+3=4
// var a = 1; var b = a++ + a++; console.log(b);  // 3   a=1   a++是先运算在自增 所以第一个a++ 的结果是1   然后在赋值 a=2  第二个a++ 是先运算在自增 所以 a=2   1+2=3
// var a = 1; var b = ++a + a++; console.log(b);  // 4   a=1   然后++a是先自增在运算 所以第一个++a 的结果是2  第二个a++ 是先运算在自增 所以 a=2    2+2=4
// 5.输出下面的结果:
// console.log(NaN == NaN);//false           因为NaN和自身都不相等 
// console.log(NaN === NaN); //false         因为NaN和自身也不相等 
// console.log(undefined == null);//trun     因为==会把两个值转换为同一类型在比较  而undefined和null转换为布尔值都为false,而false=false
// console.log(undefined === null);//false   因为三个等号是全等 不会转换数据类型 
// console.log(1 + "true"); // 1trun         在这里+是字符串的拼接的作用   
// console.log(1 + true);  //2               因为两个值的类型不同 所以要转换为同有类型的值  将trun转换为数字为1  所以结果是2
// console.log("abc" > "b");     //false     因为js的字符串按字符在ascii中的码位来比较大小   a的码位是97  而b的码位是98   所以a不大于b  
// console.log("abc" > "aad");   //trun      因为js的字符串按字符在ascii中的码位来比较大小   a的码位是97  所以第一个相等   在比较第二位  而b的码位是98    所以b大于a
// console.log([] == []); //false            因为内存地址不同
// console.log([] === []); //false           因为内存地址不同
// console.log([] == ![]); // trun           [] == ! []   ->   [] == false  ->  [] == 0  ->   '' == 0   ->  0 == 0   ->  true
// console.log([] == 0);//trun               [] == 0  ->    0 == 0   ->  true
// console.log(![] == 0);//trun              0 ==[]  -> 0==0 ->trun

// 6.输出下面的结果:
// var a = (10 * 3 - 4 / 2 + 1) % 2,// a=1
//     b = 3;
// b %= a + 3;// == b=b%(a+3)==b=3%4===b=3
// console.log(a++); // 1
// console.log(--b); // 2
// 7.输出下面的结果:
// console.log(3 + 2 || 0 && true)  //    5            5||0&&true   5||00     5
// console.log(undefined && 5) //      undefined           
// console.log(1 && 2 && 3) //true        3
// console.log(1 && 0 && 3) //flase       0
// console.log(2 + 3 > 1 && 4 || 4 && 5 % 6) //   4    5>1&&4||4&&5        4||5   4
// console.log(5 + 10 / 2 && 4 > 3 || 7 - 4)  //true   15/2&&4>3||3       7.5&&true||3    true||3    true

// 8. 输出下面的结果:
// var num1 = 20;
// var num2 = 30
// console.log(num1 % num2);  // 20
// num1 += num2         // num1 = num1 + num2  =50
// console.log(num1);  //50
// num1 = num1 - num2;  // 将这段代码改写
// // num1 -= num2;
// console.log(num1);//20

// 9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
// //    利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
// var tem = 30;
// var htem = (9 / 5) * tem + 32;
// console.log("你所输入的摄氏度的对应的华氏度是"+ htem + "华氏度");



// 10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。

// var name="张三";
// var age=15;
// var from="地球"
// console.log("我是" + name + ",今年" + age + "岁了,我来自" + from);