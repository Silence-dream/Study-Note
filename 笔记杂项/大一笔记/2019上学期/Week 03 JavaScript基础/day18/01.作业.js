// 41.入职薪水10K，每年涨幅5%，输出50年后工资多少
// var money=10000;

// for(var i=1;i<=50;i++)
// {
//     money+=money*0.05;
//     // money=money+money*0.05
//     //增幅的加上原有的
// }
// console.log("50年后的工资"+money)


// 42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）

/* 
    请让我去练习时长两年半再回来思考怎么算
 */

var a=1;
for(var i=2;i<=100;i++)
{
    if(i%2==0)
    {
        a-=1/i;
    }
    else if(i%2!=0)
    {
        a+=1/i;
    }
}
console.log(a);




// 43.用for循环求2+22+222+2222+22222的和

var a = 0
var sum = 0
for (var i=1; i<=5; i++)
{
    a = a*10 + 2
    sum = sum + a
}
console.log(sum);

// 44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)	通过2种方式给对象添加一个新的属性weight,值自己写
// 3)	删除属性名height

// var people={
//     name:"人",
//     age:12,
//     gender:"男",
//     height:190,
// }
// console.log(people.name)
// var a=people.weight=100;//方法一
//     // people.weight=200;//方法二
// console.log(people)
// delete people.height
// console.log(people)


// 45.定义一个数组，取出下标是3的值，
// 计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出

// var arr=[1,2,3,4,5,6,7]
// console.log(arr[3])
// var sum=arr[2]+arr[4]
// console.log(sum)


// 46.定义一个二维数组，var arr = [1,2,’3’,true,[22,33,55,66]],将55输出在控制台上

//  var arr=[1,2,"3",true,[22,33,55,66]]
//  console.log(arr[4][2])



// 47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，
// 以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？
    // var day = 1
    // for(var i=1;i<=9;i++){
    // day = (day + 1) * 2
    // }
    // console.log(day);


// 48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和
            /* 我去学习 */


// 49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
// var sum=1;
// for(var i=1;i<=20;i++)
// {
//     sum*=i;
// }
// console.log(sum)


// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？

// for(var i=100;i<=500;i++)
// {
//     if(i%10!=4&&parseInt(i%100)!=4&&parseInt(i/100)!=4)
//     {
//         console.log(i)
//     }
// }


// 二、简答题
// 1. 怎么将别的数据类型转换成字符串类型

// 使用 String(变量名)或者 变量名.toString转换成字符串类型，注意

// 2. 怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
    // 定义对象 var obj={}

    // 获取对象属性 对象名.对象中的属性名
    // 给对象添加属性  对象名.要添加的属性名
    // 删除属性   delete 对象名.要删除的属性名

// 3. == 和 === 的区别是什么？

    // ==有隐式转换的功能,只需要值相等就是等于
    // ===不仅需要值相等还要数据类型相等才是全等

// console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么

    // console.log(1=="1")   //true 因为==可以把string 1 转换成number 1
    // console.log(1 === fasle) //false 因为数据类型不一样

// 4. 前++ 后++的区别是什么

    // 前++是先自增再运算
    // 后++是先运算再自增
