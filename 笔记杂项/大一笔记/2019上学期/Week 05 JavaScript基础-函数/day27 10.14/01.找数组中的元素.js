// 1. 已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
//     请查找出数组中是否有孙妍姿、汪菲。 
//     如果有，请给出索引；
//     如果没有给出-1。

var arr=["周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"];
var wang=arr.indexOf("王菲")
var sun=arr.indexOf("孙妍姿")
console.log("孙妍姿在呢"+sun);
console.log("她可能不在了"+wang);

//下面写是傻逼
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]=="孙妍姿")
//     {
//         console.log(arr.indexOf(arr[i]));
//     }
//     if(a==Number)
//     {
//         console.log(arr.indexOf(arr[i]));
//     }
// }
// console.log(arr.indexOf("汪菲"));