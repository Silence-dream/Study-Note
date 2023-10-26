/* 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

          字符          数值
          I             1
          V             5
          X             10
          L             50
          C             100
          D             500
          M             1000

分析
当小值在大值的左边，则减小值，如 IV=5-1=4；
当小值在大值的右边，则加小值，如 VI=5+1=6；

确保输入的罗马数字一定是符合规则的

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/roman-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


function romanToInt(s: string): number {
  // 求和
  let sum: number = 0;
  let preNum = getRomanNumber(s.charAt(0));
  for (var i = 1; i < s.length; i++) {
    let num = getRomanNumber(s.charAt(i));

    if (preNum < num) {
      sum -= preNum;
    } else {
      sum += preNum;
    }
    preNum = num;
  }

  sum += preNum;
  return sum;
};
let result = romanToInt("IIILV");
console.log(result);

function getRomanNumber(key: string): number {
  switch (key) {
    case "I": return 1;
    case "V": return 5;
    case "X": return 10;
    case "L": return 50;
    case "C": return 100;
    case "D": return 500;
    case "M": return 1000;
    default: return 0;
  }
}



export { }