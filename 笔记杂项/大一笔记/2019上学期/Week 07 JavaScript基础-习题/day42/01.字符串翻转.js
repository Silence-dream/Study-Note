// 1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"

var str = "abcdefgh";
let sum = ""
for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i]
    // console.log(str[i])
}
console.log(sum)