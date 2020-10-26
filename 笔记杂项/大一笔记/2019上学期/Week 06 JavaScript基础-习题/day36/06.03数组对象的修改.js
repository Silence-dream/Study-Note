let studentArr = [
    { sID: 1, name: "张三", age: 18, score: 80 },
    { sID: 2, name: "李四", age: 18, score: 80 },
    { sID: 3, name: "王五", age: 18, score: 80 },
    { sID: 4, name: "赵六", age: 18, score: 80 },
    { sID: 5, name: "刘一", age: 18, score: 80 },
    { sID: 6, name: "陈二", age: 18, score: 80 }
];

//修改张三 
studentArr[0].name = "呵呵";
//输出验证
console.log(studentArr)