// // 一、编程题
// // 1.定义若干个js变量，需表现出js中的各种数据类型，并在页面中输出每个变量的值和其对应类型。

// var num=123;
// var string="11";
// var boolean=true;
// var  un;
// var not=null;
// var arr=[1,2,3,4,5];
// var obj={
//     name:'zs',
//     age:18
// };

// console.log(num);
// console.log(typeof num);
// console.log(string);
// console.log(typeof string);
// console.log(boolean);
// console.log(typeof boolean);
// console.log(un);
// console.log(typeof un);
// console.log(not);
// console.log(typeof kong);
// console.log(arr);
// console.log(typeof arr);
// console.log(obj);
// console.log(typeof obj);




// // 2.用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
// // 1
// // 19
// // 比如，用户输入21，那么控制台显示
// // 1
// // 3
// // 7
// // 21

// var num = 19
// for (var i = 1; i < num+1; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }


// // 3.	读程序，写结果：
// (1)
// var v1 = "abc";
// var v2 = v1;
// var v2 = '123' + v2;
// console.log(v1);    //abc
// console.log(v2);    //123abc

// (2)
// var a = { name: '张三', age: 22 }
// var b = a;
// console.log(b.age); ///22
// b.age = 23;
// console.log(a.age);     //23



// // 4.已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长
// var a = 5;
// var b = 12;
// for (var i = 1; i < a+b; i++) {
//     if (i * i == a * a + b * b) //勾股定理的逆定理
//     {
//         console.log('这个直角三角的形斜边长是:' + i);
//     }
// }

// // 5.一个小球从空中掉下来，求如下问题：
// // 如果已知小球掉落时高度（1000m），求其触地瞬间的速度；
// 如果已知小球落地瞬间的速度（1000m/s），求其掉落时的高度）
// 附自由落体公式：自由落体运动的规律：2gh=v^2。；（其中g是重力加速度，在地球上g≈9.8m/s2；v是速度，h高度)

//求V
// (1)
// var height=1000;
// const g=9.8;
// for(var v=0;v<=height;v++)
// {
//     if(2*g*height==v*v)
//     {
//         console.log(`触底瞬间的速度为${v}m/s`);
        
//     }
// }


// (2)
// 求高度
// var v=1000;
// const g=9.8;
// var time=v/g;
// var height=0.5*g*time*time;
// var height=height.toFixed(2)
// console.log(`当落地的瞬间速度为${v}m/s时，其掉落时的高度为${height}m`);


//  6.	写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“abcde”。
// for(var i=1;i<101;i++)
// {
//         if(i%3==0 && i%5==0)
//         {
//                 console.log("abcde");
//         }
//         else if (i%3==0){
//                 console.log("Fizz");
                
//         }
//         else if (i%5==0){
//                 console.log("Buzz");
                
//         }
// }


// // 7.求两个正数的最大公约数
// var a=4;
// var b=6;
// var c = 1;
// for(var i = 1; i <= a && i <= b; i++ ){
//   if(a%i == 0 && b%i == 0 ){
//     c = i;
//   }
// }
// console.log(c);

// // 8.求两个正数的最小公倍数
// var a=4;
// var b=6;
// var c = 1;
// for(var i = 1; i <= a && i <= b; i++ ){
//   if(a%i == 0 && b%i == 0 ){
//     c = i;
//   }
// }
// console.log(a*b/c);

// // 9.水果店LED屏幕
// // 模拟LED屏幕显示内容
// //                       图二
// // 要求 1）商品编号 商品名称  单价 和品质 都定义成变量
// //      2）在控制台出各种水果的信息，如图二所示

// var arr=[
//     {num:1,name:"榴莲",price:32.0, unit :"公斤",quality:"A"},
//     {num:2,name:"苹果",price:6.5, unit :"公斤",quality:"B"},
//     {num:3,name:"猕猴桃",price:6.0, unit :"公斤",quality:"A"},
// ]
// arr[0].price=32.0.toFixed(1)
// arr[2].price=6.0.toFixed(1)

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);



// // 10、超市购物小票V2  
// // 展示超市所有的商品信息到控制台，如图三所示:

// //           图三

var num1=15.50*22.00;
var num2=16.00*55.00;
var num3=14.50*24.00;

console.log("少林寺酥饼核桃:"+num1+"元");
console.log("然光Q移:"+num2+"元");
console.log("尚康杂粮杜丹饼:"+num3+"元");
console.log("总计"+ (num1+num2+num3)+"元");
// 二、简答题
// //  1. 数据类型有几种,分别是哪些
// // 有七种数据类型
// 1.number
// 2.string
// 3.boolean
// 4.undefined
// 5. null
// 6.object
// 7.symbol


// //2. 怎么判断一个变量的数据类型
// typeof 变量名


// // 3. 怎么判断一个变量是否是数字

// console.log(typeof 变量名);//如果输出的不是number就不是数字



// // 4. 怎么将其他数据类型转换成数字类型

// 使用即可转换Number(变量名)