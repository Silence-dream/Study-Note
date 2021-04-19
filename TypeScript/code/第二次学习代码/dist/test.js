"use strict";
function getLength(str) {
    return str.length; // 此时报错 str 上不存在 length 属性
}
let result = getLength("123");
console.log(result);
