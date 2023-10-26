function getPerimeter (r){
    //定义PI
     const PI=3.14;
     //定义变量储存周长
     var perimter=2*PI*r;
     return perimter.toFixed(2);
}
//定义变量储存返回值
var resultPerimeter=getPerimeter(10)
//打印输出
console.log(resultPerimeter);