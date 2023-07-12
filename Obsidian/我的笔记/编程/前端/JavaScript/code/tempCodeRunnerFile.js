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
