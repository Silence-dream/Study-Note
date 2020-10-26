// 5.删除一个字符串中出现最多的字符, var str="assdfscfwssseee"


let str = "assdfscfwssseee";
function getStrSum(str) {
    /*
       /1.首先遍历字符串每一数据
       /2.把找到的数据放进对象中
       /3.if判断是否有重复数据,如果有就+1,没有就等于1
       /4.str.charAt(i) 返回当前下标对应的字符 列如let str=abc; str.charAt(1)获取的是b
       /5.把保存对象遍历,进行比对,取最大的值出来打印
       /6.找到最大值之后遍历字符串寻找出现次数最多进行替换
    */
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        // //判断字符在对象obj里面是否存在
        // if (obj[str.charAt(i)]) {
        //     //存在就属性值+1
        //     obj[str.charAt(i)]++;
        // } else {
        //     //不存在就让属性值等于1
        //     obj[str.charAt(i)] = 1;
        // }
        //判断字符在对象obj里面是否存在
        if (obj[str[i]]) {
            //存在就属性值+1
            obj[str[i]]++;
        } else {
            //不存在就让属性值等于1
            obj[str[i]] = 1;
        }
    }
    let sum = 0;
    let number;
    //对象
    for (let key in obj) {
        if (obj[key] > sum) {
            sum = obj[key];
            number = key;
        }
    }
    console.log(number + '出现了' + sum + '次');

    let str_0 = ""
    // 循环替换s
    for (let j = 0; j < str.length; j++) {
        if (str[j] != number) {
            str_0 += str[j]
        }
    }
    return (str_0)
}
let re = getStrSum(str);
console.log(re)

