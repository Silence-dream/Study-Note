
/* 
 * 创建一个空数组 arr，用于存储后续生成的异步任务函数。
 * 使用 for 循环生成 100 个异步任务函数，并将它们推送到数组 arr 中。每个异步任务函数都是一个返回 Promise 的箭头函数，通过 setTimeout 来模拟异步操作，并在一定的延迟后输出 "done" 和对应的序号 i。
 * 定义了一个 parallelRun 函数，该函数返回一个 run 函数用于并行执行异步任务。
 * 在 parallelRun 函数内部，定义了两个辅助函数：
 * inqueue(totalTask, max)：用于将异步任务从 totalTask 中取出执行，并将其添加到 runingTask 数组中，直到 runingTask 数组达到最大长度 max 或 totalTask 数组为空。
 * run(totalTask, max)：调用 inqueue 函数执行异步任务，并在异步任务完成后再次调用 run 函数执行剩余的任务。
 * 在最后一行代码中，通过调用 parallelRun() 返回的 run 函数来执行异步任务。将之前生成的 arr 数组和并行执行的最大任务数 6 作为参数传递给 run 函数。
 */
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("done", i);
          resolve();
        }, 100 * i);
      })
  );
}
const parallelRun = () => {
  const runingTask = [];
  const inqueue = (totalTask, max) => {
    while (runingTask.length < max && totalTask.length) {
      runingTask.push(totalTask.shift());
    }
  };
  const run = (totalTask, max) => {
    inqueue(totalTask, max);
    while (runingTask.length) {
      runingTask
        .shift()()
        .finally(() => {
          run(totalTask, max);
        });
    }
  };
  return run;
};
parallelRun()(arr, 6);

