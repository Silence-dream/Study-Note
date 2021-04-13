let http = require("http");

let querystring = require("querystring");
let app = http.createServer();
app.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf8"
    })

    let postDate = "";
    req.on("data", function (chunk) {
        postDate += chunk;
        console.log(postDate);
    })

    req.on("end", function () {
        let finalDate = querystring.parse(postDate);
        console.log(finalDate);
    })
    res.end();
}).listen(80, function () {
    console.log("http://localhost");
})