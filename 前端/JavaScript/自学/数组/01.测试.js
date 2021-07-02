// // var obj = {name: "张三"}   
// //  obj["name"]
// //  console.log(obj)
// // console.log(obj.name)


// // 声明函数
// function sayHi() {
//     console.log("吃了没？");
//   }
//   // 调用函数
// //   sayHi();

//   // 求1-100之间所有数的和
//   function getSum() {
//     var sum = 0;
//     for (var  i = 0; i < 100; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   }
//   // 调用
//   getSum();

//   function fn() {}
// console.log(typeof fn);


// function f1() {
//     var num = 123;
//     function f2() {
//         console.log( num );
//     }
//     f2();
// }
// var num = 456;
// f1();




// console.log(null==null)


// var sum;
// console.log(typeof sum)
// console.log(undefined==0);
// console.log(NaN==0);



// var a=true;
// do {
//     console.log("11")
// } while (a=false);



// //数组去重
// // 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。
// //分析：
// //循环遍历数组，判断判断新数组中是否存在这个数据，如果不存在，就放到新数组中
// // 定义一个新的数组保存不重复的数
// var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7, 1, 1, 2, 2], arr2 = [];
// // 遍历有重复数字数组
// for (var i = 0; i < arr.length; i++) {
//     // 假设法：假设不存在
//     var flag = true;
//     //遍历新数组让arr数组的每个值都可以和与新数组的每个值作比较
//     for (var j = 0; j < arr2.length; j++) {
//         //如果没找到相等的，就放到新数组中有相等的就让不添加
//         if (arr[i] == arr2[j]) {
//             flag = false;
//         }
//     }
//     // 等循环结束后就知道是否要不要放入新数组中
//     // 如果flag为true，说明要放入新数组中，如果flag为false，说明有相同的数据，不要放入新数组
//     if (flag) {
//         arr2[arr2.length] = arr[i];
//     }
// }
// console.log(arr2)
// //注意！！！数组去重一定不能直接在判断是否相等中直接添加进去。因为当判断时arr【i】中只要他们任意一个值
// //不等于arr2【0】就会通过判断式添加到数组的后面


// var arr = [31,13,234,54,87];

// console.log(arr.sort())


var a='5'
for(var i=1 ; i<=5 ; i++)
{
    var b=''
    for(var j=5 ; j<i ; j--)
    {
    b=b+a
    }
}