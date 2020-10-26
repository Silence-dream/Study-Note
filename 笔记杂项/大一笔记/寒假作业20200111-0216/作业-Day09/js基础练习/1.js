var date = new Date();
var year = date.getFullYear();
if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
    console.log(year + "是闰年");
} else {
    console.log(year + "不是闰年");
}