// 宠物编号 宠物名称    售价   产地
// p01      拉布拉多    2399   美国
// p02      京巴        1999   中国
// p03      金刚鹦鹉    6999   非洲 
// p04      蓝孔雀      1599   非洲
// p05      田园犬      109    中国
// p06      德牧        3000   德国

// 创建一个宠物对象，
// 包含四个属性，分别是 宠物编号pid 宠物名称pname  售价price  
// 产地addr，值为上面的数据。
// 创建一个数组中，将对象添加到数组中。
// 1.创建函数 获取价格最低的宠物对象   function getMinPricePet(arr) // arr是宠物数组
// 2.创建函数 获取指定产地的宠物的平均价格 function getChinaAvgPrice(arr, addr) // arr是宠物数组 addr为产地名称

let Obj = function (pid, pname, price, addr) {
    this.pid = pid;
    this.pname = pname;
    this.price = price;
    this.addr = addr;
}

let labuladuo = new Obj("p01", "拉布拉多", 2399, "美国");
let jingba = new Obj("p02", "京吧", 1999, "中国");
let jingangyingwu = new Obj("p03", "金刚鹦鹉", 6999, "非洲");
let lankouque = new Obj("p04", "蓝孔雀", 1599, "非洲");
let tianyuanquan = new Obj("p05", "田园犬", 109, "中国");
let demu = new Obj("p06", "德牧", 3000, "德国");


let arr = [labuladuo, jingba, jingangyingwu, lankouque, tianyuanquan, demu]

// 1.创建函数 获取价格最低的宠物对象   function getMinPricePet(arr) // arr是宠物数组

function getMinPricePet(arr) {
    //设定一个最低价格
    let min = arr[0]["price"]
    // 遍历数组寻找最低的价格
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]["price"]) {
            min = arr[i]["price"]
        }
    }
    //遍历寻找对象
    for (key in arr) {
        if (arr[key].price == min) {
            return arr[key];
        }
    }
    // return min
}
let result = getMinPricePet(arr)
console.log(result)




// 2.创建函数 获取指定产地的宠物的平均价格 function getChinaAvgPrice(arr, addr) // arr是宠物数组 addr为产地名称

function getChinaAvgPrice(arr, addr) {
    //定义除数
    let temp = 0;
    // 定义求和
    let sum = 0
    // 遍历数组寻找产地是addr的,并把价格加在一起求平均值
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]["addr"] == addr) {
            sum += arr[i]["price"]
            temp++;
        }
    }
    return `产地是${addr}的宠物的平均价格是：${sum / temp}`;
}
let result02 = getChinaAvgPrice(arr, "中国")
console.log(result02)