var md5 = require('md5');

let result = md5('123456'); //e10adc3949ba59abbe56e057f20f883e
let result2 = md5(result); // 14e1b600b1fd579f47433b88e8d85291
let result3 = md5(result2)//  c56d0e9a7ccec67b4ea131655038d604

let cc = md5(md5(md5('123456')));
console.log(result3); // 2+2+26  2^3 = 8