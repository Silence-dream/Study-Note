// 5.编写一个add函数，实现如下效果:
//  // console.log(add(1, 2)); // 3
// // console.log(add(1)(2)); // 3 

function add(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    }
    else {
        return function (y) {
            return x + y;
        }
    }
}
console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3 






// var add1 = function (a, b) {
//     return a + b;
// }
// console.log(add1(1,2))

// var add2 = function (a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(add2(1)(2));