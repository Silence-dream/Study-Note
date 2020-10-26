for (let i = 0; i < studentArr.length; i++) {
    //判断是否存在这个用户名
    if (userName == studentArr[i].name) {
        //让用户输入要修改的东西
        let userX = prompt("1、修改学号 2、修改姓名 3、修改年龄 4、修改成绩");
        if (userX == 1) {
            let userSid = prompt("请输入要修改的学号");
            studentArr[i].sID = userSid;
        }
        if (userX == 2) {
            let userName = prompt("请输入要修改的姓名");
            studentArr[i].name = userName;
        }
        if (userX == 3) {
            let userAge = prompt("请输入要修改的年龄");
            studentArr[i].age = userAge;
        }
        if (userX == 4) {
            let userScore = prompt("请输入要修改的成绩");
            studentArr[i].score = userScore;
        }
        //输出
        let str = "学号 姓名 年龄 分数\n"
        for (let i = 0; i < studentArr.length; i++) {
            str += `  ${studentArr[i].sID}    ${studentArr[i].name}  ${studentArr[i].age}    ${studentArr[i].score} \n`;
        }
        alert(str);
        temp = false;
        break;
    }
    else {
        alert("这个用户名不存在");
    }



    for (key in studentArr) {
        //如果存在就输出有
        if (userName == studentArr[key].name) {
            alert(`有  ${userName}  这个用户`);
            break;
        }
        else {
            alert(`没有  ${userName}  这个用户，请重新输入`);
            break;
        }
    }