---
tags:
  - JavaScript
  - Promise
---
## promise 串行执行

```js
function request1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("request1");
      console.log("request1");
    }, 1000);
  });
}
function request2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("request2");
      console.log("request2");
    }, 1000);
  });
}
function request3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("request3");
      console.log("request3");
    }, 1000);
  });
}

const api = {
  request1,
  request2,
  request3,
};

const requestAry = [
  () => api.request1(),
  () => api.request2(),
  () => api.request3(),
];
async function fn(){
  for (const requestItem of requestAry) {
    await requestItem();
  }
}
fn()

const finallPromise = requestAry.reduce((currentPromise, nextRequest) => {
  return currentPromise.then(() => nextRequest());
}, Promise.resolve());
```



## async/await的另类用法

```js
const fn1 = async () => 1;
const fn2 = () => Promise.resolve(1);
```



## promise 实现请求共享

```js



```