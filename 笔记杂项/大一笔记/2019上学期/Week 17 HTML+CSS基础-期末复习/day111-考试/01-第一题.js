// 使用javascript 编写代码，在控制台中输出字符串”assdfscfwssseeeztmsa”中出现次数最多的字符，并统计出现的次数

let str = 'assdfscfwssseeeztmsa';
let count = 0;
let obj = {}
for (let i = 0; i < str.length; i++) {
    // for (let j = 0; j < str.length; j++) {
    if (obj[str[i]]) {
        obj[str[i]]++;
    }
    else {
        obj[str[i]] = 1;
    }
}
console.log(obj)



/* let obj = {
    name: "李四",
    age: 123,
}

let str = "112233"
console.log(str);

// console.log(obj);
// obj[0] = 1 + 1;
// console.log(obj); */










/* 打印输出 */
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (str[i] == str[j]) {
//             obj[str[i]]++;
//         }
//         else {
//             obj[str[i]] = 1;
//         }
//     }
// }
// console.log(obj)
