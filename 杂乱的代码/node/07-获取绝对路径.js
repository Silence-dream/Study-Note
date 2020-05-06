const path = require("path");

console.log(__dirname);
let finalPath = path.join(__dirname, "read1.txt");

const fs = require("fs");
let content = "我也不知道写什么"
fs.writeFile(finalPath, content, function (err) {
    console.log(err);
})

fs.readFile(finalPath, "utf8", function (err, data) {
    console.log(err);
    console.log(data);
})





// ``
// `javascript
// // 1.导入模块
// const fs = require('fs');
// const path = require('path');
// // console.log(fs);

// // 2.使用模块的读文件的方法来读文件
// // fs.readFile(路径,编码格式,callback)
// console.log(__dirname) // E:\FullStack\day77-Node基础\code\
// console.log(path.join(__dirname,'read.txt'))

// let finalPath = path.join(__dirname,'read.txt')
// // readFile是一个异步的方法 因为读文件是硬盘来做的，啥时候读完 没准儿 所以就用异步更好
// fs.readFile(finalPath, 'utf8', function (err, data){
//             // err代表错误对象, 如果没有错误 那么值为null
//             console.log(err); // no such file or directory 没有该文件或目录
//             // data代表数据对象,如果没有错误,那么值为内容
//             console.log(data);
// })
// `
// ``