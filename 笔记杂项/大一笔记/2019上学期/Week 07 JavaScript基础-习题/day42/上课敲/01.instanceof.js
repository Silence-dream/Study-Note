let str = "hello world";
let str2 = new String("哈哈")
let arr = [564, 1, 5]
//判断str是不是字符串
console.log(str instanceof String);//false
console.log(`------------------------------`)
console.log(str2 instanceof String);//true
console.log(`------------------------------`)
console.log(typeof str2)//object
console.log(`------------------------------`)
console.log(str instanceof Object);//false
console.log(`------------------------------`)
console.log(str instanceof Array);//false
console.log(`------------------------------`)
console.log(arr instanceof Array);//true