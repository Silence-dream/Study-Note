const fs = require("fs");
console.log(fs);
fs.readFile("./rede.js", "utf8", function (err, data) {
    // err代表错误对象,没错返回null,错了返回undefined
    if (err != null) {
        console.log("没有读取到");
        return;
    }
    // data代表数据对象,没错返回内容值,没有内容返回undefined
    console.log(data);
});