const { say } = require("./app");
// 测试
test("测试SAY", () => {
  // 预期结果 输入你好 输出你好
  expect(say("你好")).toBe("你好");
});
