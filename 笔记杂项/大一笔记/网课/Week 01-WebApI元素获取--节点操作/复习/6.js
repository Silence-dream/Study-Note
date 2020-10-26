var students = [{
        stuid: "S01",
        name: "周夏",
        gender: "男",
        score: 86
    },
    {
        stuid: "S02",
        name: "郑竹",
        gender: "男",
        score: 77
    },
    {
        stuid: "S03",
        name: "吴兰",
        gender: "女",
        score: 35
    },
    {
        stuid: "S04",
        name: "李云",
        gender: "男",
        score: 56
    }
];

function totalBySex(students) {
    let manSum = 0;
    let woManSum = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i]["gender"] == "男") {
            manSum++
        } else {
            woManSum++;
        }
    }
    return `男生人数${manSum}\n女生人数${woManSum}`;
}
console.log(totalBySex(students));


function getMaxScore(students) {
    let arr = [];
    for (let i = 0; i < students.length; i++) {
        arr.push(students[i]["score"]);
        // console.log(students[i]["score"])
    }
    // 保存最大分数
    let maxScore = Math.max(...arr);
    for (let i = 0; i < students.length; i++) {
        if (students[i]["score"] == maxScore) {
            return "成绩最高的学生姓名" + students[i]["name"]
        }
    }
}
console.log(getMaxScore(students))