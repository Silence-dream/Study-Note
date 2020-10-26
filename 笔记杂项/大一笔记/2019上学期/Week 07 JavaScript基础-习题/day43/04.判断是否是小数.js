// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数

let a = 3.55;

if (a % 1 == 0) {
    console.log(a + "是整数");
} else {
    console.log(a + "是小数")
}