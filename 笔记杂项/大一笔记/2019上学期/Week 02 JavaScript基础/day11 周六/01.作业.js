// 21.	录入月份，输出对应的季节
//     (1)键盘录入一个整数(代表月份,范围1-12)
//     (2)输出该月份对应的季节
//    	   3,4,5春季
//    	   6,7,8夏季
//    	   9,10,11秋季
//    	   12,1,2冬季
//     (3)演示格式如下:
//    	   请输入一个月份:3
//    	   控制台输出:3月份是春季"

// var number1=3;

// if(number1==3)
// {
//     console.log("3月份是春季")
// }
// else if(number1==4)
// {
//     console.log("4月份是春季")
// }
// else if(number1==5)
// {
//     console.log("5月份是春季")
// }
// //3,4,5春季
// else if(number1==6)
// {
//     console.log("6月份是春季")
// }
// else if(number1==7)
// {
//     console.log("7月份是春季")
// }
// else if(number1==8)
// {
//     console.log("8月份是春季")
// }

// //9,10,11秋季
// else if(number1==9)
// {
//     console.log("9月份是春季")
// }
// else if(number1==10)
// {
//     console.log("10月份是春季")
// }
// else if(number1==11)
// {
//     console.log("11月份是春季")
// }

// //12,1,2冬季
// else if(number1==12)
// {
//     console.log("12月份是春季")
// }
// else if(number1==1)
// {
//     console.log("1月份是春季")
// }
// else if(number1==2)
// {
//     console.log("2月份是春季")
// }



// 22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// var num=12325;
// var num01W,num02W,num03W,num04W,num05W;
//     num01W=num%10;                      //个
//     num02W=parseInt(num%100/10);        //十
//     num03W=parseInt(num%1000/100);      //百
//     num04W=parseInt(num%10000/1000);    //千

//     num05W=parseInt(num%100000/10000)   //万

//     if(num01W==num05W && num02W==num04W)
//     {
//         console.log("回文数");
//     }
//     else{
//         console.log("不是回文数");
//     }

// 23. 利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几

// var today = 6;
// var date = 1000;
// var x = date % 7;

// console.log("一千天之后是星期"+ (today + x - 7));


// 24.一个加油站为了鼓励车主多加油，所以加的多有优惠。
//       92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
//       95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
//       编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。


// var number=95;
// var litre=300;
// var price;
// //92号汽油
// if (number==92&&litre<=20  )
// {
//     console.log(price=6*20)
// }
// else if (number==92&&litre>20)
// {
//     console.log(price=6*20+(litre-20)*5.9);
// }
// //95号汽油
// else if (number==95 && litre<=30)
// {
//     console.log(price=7*30+(litre-20)*5.9);
// }
// else if (number==95 && litre>30)
// {
//     console.log(price=7*30+(litre-20)*6.95);
// }


// 25. 收先接收用户输入的用户名，判断该用户名是否是admin,如果不是直接程序终止，
// 如果是那么再次提示让用户输入密码,如果密码是88888,那么提示登录成功，否则提示登录失败

//请看25题.html

// 26. 100以内7的倍数的总和
// var sum=0;
// for (var i = 1; i <= 100; i++) {
//     if (i%7==0) {
//         sum+=i;
//     }
// }
// console.log(sum);

// //不能被7整除或者不带7的数字输出
// for(var i=1;i<=100;i++){
// if(i%7!=0&&i%10!=7&&(parseInt(i/10)!=7)){
// console.log(i);
// }
// }

// 27.求1!+2!+3!+...+10!的和

// var sum = 0;
// for (var i = 1; i <= 10; i++) 
// {
//     var sum02 = 1;
//     for (var t = 1; t <= i; t++) 
//     {
//         sum02 *= t;
//     }
//     sum += sum02;
// }
// console.log("1到10的阶乘是:" + sum);


// //方法二？
// var num = 1;
// var i = 0;
// var sum = 0
// for (i = 0; i < 10; i++) 
// {
//     num = num * (i + 1)
//     sum +=num;
// }
// console.log("1到10的阶乘是："+sum)

// // 28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
// var tou = 35;
// var jiao = 94;
// for (var i = 1; i < tou; i++) {
//     if (i * 2 + (tou - i) * 4 == jiao) {
//         console.log("鸡有" + i + "只")
//         console.log("兔有" + (tou - i) + "只")
//     }
// }

//29.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出1000以内的所有完数。
// for (i = 1; i <= 1000; i++) 
// {
//     var sum = 0;
//     for (j = 1; j <= i/2; j++) 
//     {
//         if (i % j == 0) 
//         {
//             sum += j;
//         }
//     }
//     if (sum == i) 
//     {
//         console.log(sum);;
//     }
// }

// 30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）
// for (var i = 2; i < 200; i++) 
// {
//     var b = false;
//     for (var k = 2; k < i; k++) 
//     {
//         if (i % k == 0) 
//         {
//             b = true;
//         }
//     }
//     if (!b) 
//     {
//         console.log(i);
//     }
// }

// // 31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3。
// var sum=0;
// for (var  i = 101; i <= 200; i++) {
//         var ge=i%10;
//         var shi=(i-ge)/10%10;
//        if (ge==3&&shi==3) {
//            sum+=2
//        }else if(ge==3||shi==3){
//         sum+=1
//        }
//     }
// console.log('101到200之间的整数一共有'+sum+'个');


// 32.某同学参加计算机大赛：
// 		如果获得第1名，将参加清华大学组织的1个月夏令营；
// 		如果或得第2名，将奖励联想笔记本电脑一部；
// 		如果获得第3名，将奖励移动硬盘一个；
// // 否则没有任何奖励；

// var num=1;
// if(num==1)
// {
//     console.log("将参加清华大学组织的1个月夏令营")
// }
// else if(num==2)
// {
//     console.log("将奖励联想笔记本电脑一部")
// }
// else if(num==3)
// {
//     console.log("将奖励移动硬盘一个")
// }

// 33.利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，
// 并在控制台输出这些数字

// for (var  i = 1; i <= 1000; i++)
//  {
//     if (i%5==0||i%6==0) 
//     {
//         console.log(i);
//     }
// }

// // 34.求任意一个数字的约数有哪些

// var num = 100; 
// for(var i = 1; i <= num; i++) 
// {
//     if(num % i == 0)
//     {
//        console.log(i);
//     }
// }

// 35.1-100之间所有数的总和 与 平均值
// var sum=0;
// for (var  i = 1; i <= 100; i++) 
// {
//    sum+=i;
// }
// console.log("1-100之间所有数的总和"+ sum);
// console.log("1-100之间所有数的平均值"+ sum/100);


// 36.求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
// var sum=0;
// for(var i=1;i<=100;i++){
//     // sum+=i
//     if(i%3==0 && i%5==0){
//         sum+=i;
//     }
// }
// console.log(sum)

//  37.要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。
//圆的面积公式S=π*r^2

// var S,r;
// const P=3.14;
// S=P*r*r;
// for(r=1;r<=100;r++)
// {
//     if(P*r*r<50)
//     {
//         console.log(r);
//     }
// }


// // 38.遍历1到100之间（包含1和100）的所有数字，
//统计能被5整除的偶数的个数，最后将个数打印在控制台
// var num;
// for(var i=1;i<=100;i++)
// {
//     if(i%5==0 && i%2==0)
//     {
//         console.log(i);
//     }
// }