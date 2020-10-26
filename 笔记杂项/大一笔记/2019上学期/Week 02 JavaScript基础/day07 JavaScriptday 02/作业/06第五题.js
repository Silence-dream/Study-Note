var myVarVariable = 666;
const myConstVariable = 2;
console.log(myVarVariable);//输出变量myVarVariable 666
console.log(myConstVariable);//输出常量myConstVariable 2
myVarVariable = 888;
myConstVariable = 5;  
console.log(myVarVariable); //已经定义常量所以无法输出
console.log(myConstVariable); // 第六行代码已经错误程序无法执行接下来的代码
