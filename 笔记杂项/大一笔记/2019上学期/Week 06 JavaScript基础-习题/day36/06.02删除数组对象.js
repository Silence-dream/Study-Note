let studentArr = [
    { sID: 1, name: "张三", age: 18, score: 80 },
    { sID: 2, name: "李四", age: 18, score: 80 },
    { sID: 3, name: "王五", age: 18, score: 80 },
    { sID: 4, name: "赵六", age: 18, score: 80 },
    { sID: 5, name: "刘一", age: 18, score: 80 },
    { sID: 6, name: "陈二", age: 18, score: 80 }
];

// 遍历数组完成删除模块
for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].name == "张三") {
        studentArr.splice(i, 1)
    }
}
console.log(studentArr)