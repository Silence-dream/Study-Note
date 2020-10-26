var staffinfo = [{
        name: "刘备",
        post: "经理",
        district: "华北区"
    },
    {
        name: "诸葛",
        post: "职员",
        district: "华北区"
    },
    {
        name: "马谡",
        post: "职员",
        district: "华北区"
    },
    {
        name: "袁绍",
        post: "经理",
        district: "西南区"
    },
    {
        name: "曹操",
        post: "经理",
        district: "华中区"
    },
    {
        name: "许褚",
        post: "职员",
        district: "华中区"
    },
    {
        name: "张辽",
        post: "职员",
        district: "华中区"
    },
    {
        name: "徐晃",
        post: "职员",
        district: "华中区"
    },
]

function getManager(staffinfo) {
    let count = 0
    for (let i = 0; i < staffinfo.length; i++) {
        if (staffinfo[i]["post"] == "经理") {
            count++;
        }
    }
    return "经理总人数是" + count;
}
console.log(getManager(staffinfo));


function getAreaSum(staffinfo) {
    let countHB = 0
    let countXN = 0
    let countHZ = 0
    for (let i = 0; i < staffinfo.length; i++) {
        if (staffinfo[i]["district"] == "华北区") {
            countHB++;
        } else if (staffinfo[i]["district"] == "西南区") {
            countXN++;
        } else if (staffinfo[i]["district"] == "华中区") {
            countHZ++;
        }
    }
    return `
    华中区总人数:${countHB}
    西南总人数:${countXN}
    华中区总人数:${countXN}
    `
}
console.log(getAreaSum(staffinfo));