function getE(user) {

    let userArr = user.split(" ")
    // 用空格分隔成数组
    console.log('第一步');
    console.log(userArr);

    let newArr = []

    for (let i = 0; i < userArr.length; i++) {
        for (let j = userArr[i].length - 1; j >= 0; j--) {
            // 字符倒叙存入数组
            newArr.push(userArr[i][j]);
            // console.log(userArr[i][j]);
        }
    }
    console.log('第二步');
    console.log(newArr);
    // 定义a数组用来临时存储切割的数据
    let a = []
    // 获取userArr数组每组字符的长度
    for (let i = 0; i < userArr.length; i++) {
        // console.log(userArr[i].length);
        a.push(newArr.splice(0, userArr[i].length))
    }
    console.log('第三步');
    console.log(a);
    // 将a二维数组里面的字符拼接在一起存入临时数组b
    let b = []
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].join(""))
    }
    console.log('第四步');
    console.log(b)

    // 最后将结果保存为newStr
    let newStr = b.join(" ");
    return newStr;
}

console.log(getE("how are you"));
// console.log(getE("how are y1ou kill"));