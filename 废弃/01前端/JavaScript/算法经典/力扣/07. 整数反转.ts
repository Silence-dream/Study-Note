/* 7. 整数反转
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。


示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0

https://leetcode-cn.com/problems/reverse-integer/

*/
const MAX_INT = 2 ** 31 - 1;
const MIN_INT = -(2 ** 31);
var reverse = function (x: number): number {
  let result = 0;
  // x = 1234
  while (x !== 0) {
    // 得到个位数
    let ge = x % 10; // 4 3
    // 求得剩下的位置
    x = ~~(x / 10); // 123 12
    result = 10 * result + ge; // 4 43
  }

  if (result > MAX_INT || result < MIN_INT) return 0;
  return result;
};

function reverse2(x: number): number {
  // 转字符串
  let str = x.toString();
  // 转数组
  let arr = str.split("");
  arr.reverse();
  if (arr[arr.length - 1] === "-") {
    arr.pop();
    arr.unshift("-");
  }
  let num = Number(arr.join(""));
  console.log(num);
  if (num > MAX_INT || num < MIN_INT) return 0;
  return num;
}
reverse2(-123);
