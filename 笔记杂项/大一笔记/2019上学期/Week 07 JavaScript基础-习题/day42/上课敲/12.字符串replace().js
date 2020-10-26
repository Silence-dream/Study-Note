// 替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符
// 语法：字符串.replace("要替换的字符","替换为的字符")
let str = "abhello worlaad";
console.log(str)//abhello worlaad
let result = str.replace("a", "哈哈哈");//将字符串str中的第一个a(从index开始)替换为w
console.log(result)//哈哈哈bhello worlaad
let result5 = str.replace(/a/g, "哈哈哈");//将字符串str中的全部a替换为w
console.log(result5)//哈哈哈bhello worl哈哈哈哈哈哈d
