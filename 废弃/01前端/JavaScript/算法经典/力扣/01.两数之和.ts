/* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number): number[] | undefined {
  // 1.循环数组找到符合 target 值要求的元素之和
  // 2.返回他们的索引也就是 i
  // 3.分别是 索引0与之后的索引一一相加看是否符合 target 的值
  /* 4.给定义个假定的数组 [0,1,2,3,5] 发现两两比较的次数是 10,分别呈现 4 3 2 1 的比较顺序,
   * 由于数组的长度刚好是 4 只需要双 for 循环就可以达到 4 3 2 1 的比较次数,所以使用此方法
   *
   */
  for (var i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
};

let result = twoSum([0, 1, 2, 3, 5], 5);
console.log(result);

export {};
