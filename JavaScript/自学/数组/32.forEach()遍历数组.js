var arr=new Array(5,19,23,6,14,8);

// forEach()
// 语法: 数组名.forEach(function(元素,索引){}); void代表没有返回值

//value参数   所代表的含义是数组中的每一项
//index参数   所代表的含义是索引
//function 函数
arr.forEach(function(value,index){
    console.log(`索引是${index}值是${value}`)
})