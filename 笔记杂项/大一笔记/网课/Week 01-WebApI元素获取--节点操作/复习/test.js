// abCDefG”转换后的结果是“ABcdEFg”
let str = 'abCDefG';

let strUp = str.toUpperCase();
let strLow = str.toLowerCase();
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 定义数组存小写字母的下标
let strUpNum = [];
// 定义数组存大写字母的下标
let strLowNum = [];

// 定义大写转换次数
let upNumCount = 0
// 定义小写转换次数
let lowNumNumCount = 0
for (let i = 0; i < str.length; i++) {
    // 求出原来是小写字母的下标
    if (str[i] != strUp[i]) {
        strUpNum.push(i)
        // console.log(i);
    } else { //求出原来是大写字母的下标
        strLowNum.push(i)
        // console.log(i);
        upNumCount++
    }
}
console.log("大写转换了" + upNumCount + "次");
console.log("小写转换了" + lowNumNumCount + "次");
console.log("要转换成大写字母的下标" + strUpNum)
console.log("要转换成小写字母的下标" + strLowNum)

// 字符串转数组 
let strArr = str.split("")
console.log(strArr)

// 把小写转大写
for (let i = 0; i < strUpNum.length; i++) {
    // 把要转换成大写字母的下标转成大写
    strArr[strUpNum[i]] = (strArr[strUpNum[i]]).toUpperCase()
}
// 把大写转小写
for (let i = 0; i < strLowNum.length; i++) {
    // 把要转换成小写字母的下标转成小写
    strArr[strLowNum[i]] = (strArr[strLowNum[i]]).toLowerCase()
}

console.log("答案" + strArr.join(""))