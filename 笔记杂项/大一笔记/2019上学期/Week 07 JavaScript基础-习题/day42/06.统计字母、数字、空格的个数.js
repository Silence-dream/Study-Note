// 6. var str="hello world 378nihao",分别统计出字符串中的英文字母、数字、空格的个数
// // 求出A的ASCII码
// let A = "A"
// console.log(A.charCodeAt(0))//65
// // 求出Z的ASCII码
// let Z = "Z"
// console.log(Z.charCodeAt(0))//90


// // 求出数字的ASCII码
// let n1 = "0"
// console.log(n1.charCodeAt(0))//48

// // 求出数字的ASCII码
// let n2 = "9"
// console.log(n2.charCodeAt(0))//57


// 求出空格的ASCII码
// let k = " ";
// console.log(k.charCodeAt(0));//32
// A - Z的ASCII码是65 - 90
// a - z的ASCII码是97 - 122
// 数字的ASCII码是48-57
// 空格的ASCII是32

var str = "hello world 378nihao"
function getZm(str) {
    // 定义字母累加
    let zmConut = 0;
    //定义数字累加
    let numConut = 0
    //定义空格累加
    let kCount = 0;
    //遍历字符串
    for (let key = 0; key < str.length; key++) {
        //判断字符的ACIll码是否在65 - 90和97 - 122范围内
        if ((65 <= str.charCodeAt(key) && str.charCodeAt(key) <= 90) || (97 <= str.charCodeAt(key) && str.charCodeAt(key) <= 122)) {
            zmConut++
        }
        //判断数字
        if (48 <= str.charCodeAt(key) && str.charCodeAt(key) <= 57) {
            numConut++;
        }
        //判断空格
        if (str.charCodeAt(key) == 32) {
            kCount++;
        }
    }
    //验证输出
    // console.log(zmConut)
    // console.log(numConut)
    // console.log(kCount)
    return `英文字母出现${zmConut}次,数字出现${numConut}次,空格出现${kCount}次`
}
let result = getZm(str);
console.log(result);


