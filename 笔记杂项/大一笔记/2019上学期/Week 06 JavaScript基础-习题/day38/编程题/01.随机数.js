// 1、定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组

let arr = new Array(5)
// console.log(arr);//测试

for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(Math.random() * (101 - 10) + 10);
}
console.log(arr)//测试

// 遍历数组中的元素

for (key in arr) {
    if (arr[key] < 50) {
        arr[key] = 0
    }
}
