// 9.已知字符串："this is a test of java"
// (1) 取出子字符串"test"
// (2) 将'java'替换为'JAVASE'

let str = "this is a test of java";

function getTest(str) {
    let test = str.slice(10, 14)
    return test;
    //或者
    // let test = str.substr(10, 4)
    // return test;
}
let result1 = getTest(str)
console.log(result1)


function getTiHuan(str) {
    let result = str.replace("java", "JAVASE")
    return result;
}
let result2 = getTiHuan(str)
console.log(result2)
