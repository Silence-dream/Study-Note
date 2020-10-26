// 补全函数完成功能，传入数组中找到任意3个数字(数字不能重复使用)的和是10的倍数，将所有组合打印下来

function printSumIs10MoM(arr) {

    //数组去重,让元素无法重复使用,例如5+5是10的倍数
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(i, 1)
                i--;
            }
        }
    }


    // 遍历数组求和
    let sum = ""
    //定义变量存和
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            for (z = 0; z < j; z++) {
                if ((arr[i] + arr[j] + arr[z]) % 10 == 0) {
                    sum += arr[i] + " "
                    sum += arr[j] + " "
                    sum += arr[z] + " " + "\n"
                }
            }
        }
    }
    return `${sum}三个数的和是10的倍数`;
}
let result = printSumIs10MoM([5, 5, 5, 5, 2, 6, 2, 4, 1, 6, 2, 3])
console.log(result)