// 定义一个函数只能输入 number 和 string 如果输入的是 number 打印
function getValue(value: number | string): void {
  console.log((value as number).valueOf());
}
getValue(1);

export {};
