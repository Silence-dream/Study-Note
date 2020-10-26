// 8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';

var str = '   ab  cd    ';
// 空格的ASCII码是32
function Remove_the_blank_space(str) {
    // 定义新的空的字符串存入
    let newstr = ""
    //遍历字符串
    for (let key in str) {
        if (str.charCodeAt(key) != 32) {
            newstr += str[key];
        }
    }
    return newstr
}
let result = Remove_the_blank_space(str);
console.log(result);