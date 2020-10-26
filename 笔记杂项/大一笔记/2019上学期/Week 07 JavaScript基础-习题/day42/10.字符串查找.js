// 10.. 字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//  a ="34",b="1234567"，返回2
//  a = '35', b= "1234567" 返回-1
//  a = "355", b = "12354355"  返回5


let b = "1234567";
let a = "34"
let c = '35';
//第一问
for (let i = 0; i < b.length - 1; i++) {
    if (b[i] + b[i + 1] == a) {
        console.log("2")
        break;
    }
}
//第二问
for (let i = 0; i < b.length - 1; i++) {
    if (b[i] + b[i + 1] == b) {
        console.log("有35")
        break;
    }
    else {
        console.log("-1")
        break;
    }
}
//第三问
let bb = "12354355";
let d = "355";
for (let i = 0; i < b.length - 1; i++) {

    if (bb[i] + bb[i + 1] + bb[i + 2]) {
        console.log("5");
        break;
    }
    else {
        console.log("我太难了");
    }

}
