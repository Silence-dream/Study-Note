// 4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var color = "red";
function outer() {
    var anotherColor = "blue";
    function inner() {
        var tmpColor = color;
        color = anotherColor;
        anotherColor = tmpColor;
        console.log(anotherColor);     // ? red
    }
    inner();
}
outer();
console.log(color);  // ?  blue

//过程
var color;
function outer() {
    var anotherColor;
    anotherColor = "blue";
    function inner() {
        var tmpColor;
        tmpColor = color; //tmpColor = red
        color = anotherColor; // color = blue
        anotherColor = tmpColor; // anotherColor =red
        console.log(anotherColor);     // ? red
    }
    inner();
}
color = "red"
outer();
console.log(color);  // ?  blue
