var woman=new Array("乔碧萝","蔡徐坤","坦克");
var arr=new Array(5,19,23,6,14,8);
var newarr=[woman+arr];
//数组融合
var woman_and_arr=[].concat(woman+arr);
//第4行等于 woman_and_arr=[];
        // woman_and_arr.concat(woman+arr);
console.log(woman_and_arr);

console.log('第二种'+woman+arr);
console.log('第三种'+newarr);



console.log(typeof woman_and_arr);
console.log(typeof (arr+woman));
console.log(typeof newarr);

