// 今日头条面试题

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')


// 执行顺序
// 1. 执行宏任务 script start
// 2.遇见了 setTimeout 放入宏任务队列中        此时宏任务队列: setTimeout
// 3.调用了 async1() 输出了 async start1
// 4.遇见了 await async2 将 await 之后的代码放入 微任务队列转移控制权      此时 微任务队列: log("async1 end")
// 5.执行 async2 函数 输出了 async2 
// 6.继续执行宏任务 遇见了 new Promist 执行内部代码 输出 promise1, 发现 then 内部还有代码加入到微任务队列 此时微任务队列 : log("async1 end") log('promise2')
// 7. 继续执行宏任务 输出 script end 宏任务结束.开始检查是否还有微任务未执行
// 8. 执行微任务队列,输出 async1 end 和 promise2  此时微任务队列为空
// 9.检查时候是否还有宏任务未执行,发现宏任务队列
// 10. 执行 settimeout

/* 
 * 
 *
 */

// 总结执行顺序
// script start
// async start1
// async2 
// promise1
// script end
// async1 end
// promise2
// settimeout



// 执行栈在执行完同步任务后，查看执行栈是否为空。如果执行栈为空，就会去检查微任务队列是否为空，如果为空的话，就执行宏任务，否则就一次性执行完所有微任务。
// 每次单个宏任务执行完毕后，检查微任务队列是否为空，如果不为空的话，会按照 “先入先出” 的规则全部执行完微任务后，然后再执行宏任务，如此循环。
// setTimeout 属于宏任务
// Promise 本身是同步的立即执行函数，Promise.then 属于微任务
// async 方法执行时，遇到 await 会立即执行表达式，表达式之后的代码放到微任务执行