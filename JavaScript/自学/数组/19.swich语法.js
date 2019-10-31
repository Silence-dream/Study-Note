
function a (){//喝酒骚话集锦
    switch (num) {
        case 1:
            console.log("一帆风顺");
            break;
        case 2:
            console.log("二龙戏珠");
            break;
        case 3:
            console.log("三阳开泰");
            break;
        case 4:
            console.log("四季如春");
            break;
        case 5:
            console.log("五湖四海");
            break;
        case 6:
            console.log("六六大顺");
            break;
        case 7:
            console.log("七星高照");
        case 8:
            console.log("八仙过海");
            break;
        case 9:
            console.log("九九归一");
            break;
        default:
            console.log("你输入的什么玩意？？？");
            break;
    }
}
var num = 1;
while (num<=9) {
    a();
    num++;
}
