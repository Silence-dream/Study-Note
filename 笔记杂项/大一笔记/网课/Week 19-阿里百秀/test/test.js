// https://api.richasy.cn/pc//wfa/basic/cetusStatus

const request = require("request");
const Yurl = "https://api.warframestat.us/pc/arbitration?language=zh";

//get请求
request(Yurl, function (error, response, body) {
  if (!error) {
    console.log(body);
    console.log(JSON.parse(body).type);
    // console.log(response);
  }
});
