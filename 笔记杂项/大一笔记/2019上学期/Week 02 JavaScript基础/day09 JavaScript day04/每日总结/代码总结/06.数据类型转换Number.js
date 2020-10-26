var n1 = "hello world";
var n2 = true;
var n3 = false;
var n4 = null;
var n5 ;
var n6 = {};//空对象
var n7 = {name:'yy'};
var n8 = [];//空数组
var n9 = ['1','2'];
var n10 = [5];
var n11 = [5,6,7];
var n12 = '';

console.log(Number("hello world"));//NaN
console.log(Number({name:'yy'}));//NaN
console.log(Number(['1','2']));//NaN
console.log(Number([5,6,7]));//NaN
console.log(Number("1bb"));//NaN
console.log(Number());//NaN
console.log(Number({}));//NaN

console.log(Number(false));// 0 
console.log(Number(null));// 0
console.log(Number([]));//0
console.log(Number(''));//0

console.log(Number(true));// 1
console.log(Number([5]));//5
console.log(Number("12"));//12


// // +等于number
// console.log(+("hello world"));//NaN
// console.log(+({name:'yy'}));//NaN
// console.log(+(['1','2']));//NaN
// console.log(+([5,6,7]));//NaN
// console.log(+("1bb"));//NaN
// // console.log(+());//NaN
// console.log(+({}));//NaN

// console.log(+(false));// 0 
// console.log(+(null));// 0
// console.log(+([]));//0
// console.log(+(''));//0

// console.log(+(true));// 1
// console.log(+([5]));//5
// console.log(+("12"));//12

