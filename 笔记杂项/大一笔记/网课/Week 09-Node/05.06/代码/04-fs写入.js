const fs = require('fs');
let content = "我写我写我写";
/* 如果没有write.txt会创建一个 */
fs.writeFile("./write.txt", content, function (err) {

    // 如果写入失败
    if (err != null) {
        console.log(err);
        return;
    }
    console.log("写入成功");
})