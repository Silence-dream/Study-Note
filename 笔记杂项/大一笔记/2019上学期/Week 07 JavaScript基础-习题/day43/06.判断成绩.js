// 6. 利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值

var a = 71;
let b;
if (a >= 90) {
    b = 4;
} else if (a >= 80) {
    b = 3;
} else if (a >= 70) {
    b = 2;
} else if (a >= 60) {
    b = 1;
}
else {
    console.log("你太菜了")
}
console.log(b)