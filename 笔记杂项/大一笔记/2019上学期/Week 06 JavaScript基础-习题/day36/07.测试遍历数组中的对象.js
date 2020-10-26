let studentArr = [
    { sID: 1, name: "张三", age: 18, score: 80 },
    { sID: 2, name: "李四", age: 19, score: 80 }
]
for (key in studentArr) {
    console.log(studentArr[key].name)
}