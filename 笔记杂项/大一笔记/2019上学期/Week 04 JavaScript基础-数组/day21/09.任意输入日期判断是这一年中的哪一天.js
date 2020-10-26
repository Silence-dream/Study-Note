// 需求:输入某年，某月，某日，判断这一天是一年中的第几天？


// 分析：
//     1.定义四个变量一个存年，一个存月，一个存日期,一个存天数。
//     2.用数组统计月份的大小月
// 2.1判断年是不是闰年，如果是就把2月改成29

// 1.定义三个变量一个存年，一个存月，一个存日期。
var year = 2019;
var moon = 4;
var date = 25;
var moon_all_sum=0;  //月份暂存
var date_all = 0;//日子暂存
var date_all_date = 0; // 月份之前的天数和
//2.用数组统计月份的大小月
var moon_all = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 2.1判断年是不是闰年，如果是就把2月改成29
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    moon_all[1] = 29;
}
// console.log(moon_all[1])   //测试验证是否变化数值
for (var i = 0; i < moon-1; i++) {
    moon_all_sum = moon * moon_all[i];
    date_all_date+=moon_all[i]
}
// console.log(`${moon}月份总数是${moon_all_sum}天`)  //测试输出是否成功

console.log("当前月份之前的天数和是"+date_all_date);
date_all=date_all_date+date;
console.log(`${year}年${moon}月${date}日是${year}年中的第${date_all}天`)



