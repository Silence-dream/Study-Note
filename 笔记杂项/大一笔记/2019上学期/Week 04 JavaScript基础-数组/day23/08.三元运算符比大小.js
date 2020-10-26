//需求: 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和(用三元运算符)


// 分析：
//     1.声明两个变量保存a和b


var a=10;
var b=50;

a>b? console.log(a+b-100):console.log(a+b);