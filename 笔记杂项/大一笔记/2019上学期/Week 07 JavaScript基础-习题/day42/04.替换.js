// 4. var str= 'qweqweoeqweroqweqweodfsfdo'
//   1)查找字符串中所有字母 'o'出现的位置
//   2)把字符串中的所有字母'o'替换成 '-';


var str = 'qweqweoeqweroqweqweodfsfdo';
// o的ACIll码是113

//遍历字符串
for (let key = 0; key < str.length; key++) {
    if (str[key] == 'o') {
        console.log(key)
    }
}
//把字符串中的o替换成-
let result = str.replace(/o/g, '-');
console.log(result)
