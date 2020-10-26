// 语法:字符串.slice(begIndex,[endIndex])
let str = "abhello worlaad";
let result = str.slice(2)
let result02 = str.slice(2, 10)//从index2开始截取，截取到endIndex-index个   
// 从索引2开始截取，截取到索引为10的地方，不包括10  ↑
console.log(result)//hello worlaad
console.log(result02)//hello wo
