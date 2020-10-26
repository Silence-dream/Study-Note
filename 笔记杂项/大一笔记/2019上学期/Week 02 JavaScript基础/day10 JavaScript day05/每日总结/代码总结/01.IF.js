// var age= 10;
// if (age>=10) {
//     console.log("我the fuck");
// };


//双向分支

// var gander="男"
// console.log("请进:")
//// if...else ... 如果条件为true就执行第一段代码块，否则就执行第二段代码块
// if (gander=="男") 
// {
//     console.log("左转");
// } 
// else 
// {
//     console.log("右转");
// }

// //练习

// var name="帅哥"
// if(name=="帅哥")
// {
//     console.log("小女子愿以身相许,以谢大恩。");
// }
// else
// {
//     console.log("小女子来世再报~")
// }



// //练习、定于一个变量，随便给一个数字代表年代
// //计算这个年份是否是闰年
// // 判断今年是否为闰年；满足以下条件之一
// //          1.能被400整除
// //          2.被4整除但是不能被100整除

// var year=1204
// var Demo1=year%400//能被400整除,求余数，余数是0就是能整除
// var Demo2=year%4  //能被4整除
// var Demo3=year%100

// if(Demo1==0 || (Demo2==0 && Demo3!=0))
// {
//     console.log("闰年")
// }
// else
// {
//     console.log("不是")
// }



//3.多向分支：有多段代码，每段代码都有一个条件，满足哪个条件就执行某个代码，
            //  如果多段代码的条件都满足，只执行第一个满足条件(多选一)
/* if(表达式)
{

}
else if(表达式)
{

}
else if(表达式)
{

}
...
else
{
    //如果前面的条件都不满足，那么执行这个else中的代码
    //也可以不写
} */


// var score = 99
// if(score>90)
// {
//     console.log("优秀");
// }
// else if(score>80 && score<=90)
// {
//     console.log("niece");
// }
// else if(score<50 && score>=40)
// {
//     console.log("垃圾")
// }
// else
// {
//     console.log("垃圾吧")
// }




//练习、利用JavaScript
//如果a>60,则b=1;如果a>70,则b=2;如果a>80,则b=3;如果a>90,则b=4
//打印最后b的值


// var a=81;
// var b;
// if(a>90)
// {
//     b=4
// }
// else if(a>80)
// {
//     b=3
// }
// else if(a>70)
// {
//     b=2
// }
// else if(a>60)
// {
//     b=1
// }
// console.log(b)


