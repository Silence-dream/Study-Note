// 7.将字符串变成驼峰法var str = "get-element-by-id"， 结果是 "getElementById"

var str = "get-element-by-id";

//将字符串分隔，然后将第一个字母大写就行
function getTuoFeng(str) {
    let result = str.split("-");
    for (let i = 1; i < result.length; i++) {
        //        数组re里面索引为1的字符串里面的第一个字母,变成大写 加上 截取re数组下标为1的元素中的字符串中索引1后面的字母
        result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }
    // console.log(result)
    return result.join("")
}
let result = getTuoFeng(str)
console.log(result)