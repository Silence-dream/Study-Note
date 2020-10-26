
//外层定义行
for (let j = 1; j <= 9; j++) {
    let str = ""
    for (let i = 1; i <= j; i++) {//内层定义列
        str += i + "*" + j + "=" + i * j + " "
    }
    console.log(str);
}