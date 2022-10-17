const fs = require("fs");
fs.mkdir("./目录/二级目录", {
    recursive: true
}, function (err) {
    if (err != null) {
        console.log(err);
        return;
    }
    console.log(err);
})