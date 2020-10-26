## js简答题

1. arguments对象和数组的相同点和不同点有哪些？

- 都可用下标访问每个元素 都有 length 属性
- 数组对象的类型是 Array，类数组对象的类型是 Object； 伪数组对象不能直接调用数组 API； 数组遍历可以用 for in 和 for 循环，伪数组只能用 for 循环遍历；


2. rest参数作为函数的形参只能是最后一个参数，谈谈你的理解

- 因为 rest 参数搭配的变量是一个数组 该变量会将多余的参数放入数组中 所以 rest 参数只能是最后一个


3. 什么是函数表达式？

- 是一段可以被执行或调用任意次数的JavasScript代码


4. 谈谈你对自调用函数的理解，格式是什么？

- 函数定义完后会立即运行的函数

~~~js
(function 函数名(){})()
~~~




## js编程题
1. 写一个函数，求出`3`在数组 var arr = {3,4,3,5,7,9};中出现的次数
 ```js
var arr = [3, 4, 3, 5, 7, 9];

function getCount(num, arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      count++;
    }
  }
  return count;
}

var result=getCount(3, arr);

console.log(result
           );
 ```


2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
```js
function getnum(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
var result=getnum(3)
console.log(result);
```


3. 写一个函数，求任意一个数的阶乘
```js


function getFactorial(num) {
  var sum = 1;

  for (var i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

var result= getFactorial(10);

console.log(result);
```


4. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
```js
function getSum(num) {
  var sum = 0;

  for (var i = 0; i <= num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum;
}
var result=getSum(6)
console.log(result);
```