/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-12 16:29:56
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-12 17:08:45
 * @FilePath: \https\app.js
 */
const express= require("express")
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./https/4582581_ditingmeeting.top.key', 'utf8');
var certificate = fs.readFileSync('./https/4582581_ditingmeeting.top.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 3000;
var SSLPORT = 3001;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('这里是https');
    }
    else {
        res.status(200).send('这里是http!');
    }
});

