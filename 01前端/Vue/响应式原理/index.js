import { observable, observe } from '@nx-js/observer-util';

const counter = observable({ num: 0 });
const countLogger = observe(() => console.log(counter.num));

// 这行代码将会调用 countLogger 这个函数并打印出：1
counter.num++;

// 什么是响应式?
// 当数据变化的时候会自动执行的函数就是响应式函数