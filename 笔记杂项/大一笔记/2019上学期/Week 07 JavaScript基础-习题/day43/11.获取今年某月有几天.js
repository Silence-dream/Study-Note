
let date = new Date(2019, 6, 0).getDate()
console.log(date)


function getDate(year, month) {
    //                获取 年  月      中月份的天数
    let date = new Date(year, month, 0).getDate();
    return date;
}
let result = getDate(2019, 2)
console.log(result);