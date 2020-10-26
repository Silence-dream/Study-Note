// 10.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//  示例:
//  给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//定义数组
var nums = [2, 7, 11, 15];
//定义target输入
var target = 13;
//定义新数组将满足条件的存进去
var arr = [];
//遍历数组,找第一个索引
for (var i = 0; i < nums.length; i++) {
    //遍历数组，找第二个索引
    for (var j = i + 1; j < nums.length; j++) {
        //判断数组中的元素相加是否等于target
        if (nums[i] + nums[j] == target) {
            // arr.push(nums[i]);//测试正确使用
            // arr.push(nums[j]);//测试正确使用
            arr.push(i)
            arr.push(j)
        }
    }
}
console.log(arr)
