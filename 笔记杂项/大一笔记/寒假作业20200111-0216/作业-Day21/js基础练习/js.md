## js 简答题

1. 说一说你知道的 Math 对象（至少 5 个，不包括随机数）

- Math.abs(x) 求绝对值
- Math.ceil(x) 向上取整
- Math.floor(x) 向下取整
- Math.pow(x,y) x 的 y 次幂
- Math.radom() (0,1] 的伪随机数
- Math.round(x) 四舍五入

2. 随机数的默认输出范围是多少？

- (0,1]

3. 根据所学，写两个公式分别表示【两个数之间的随机数，不含最大值】【两个数之间的随机数，含最大值】

```js
var max = 100;
var min = 10;

//不含最大值
console.log(Math.ceil(Math.random() * (max - min) + min));

//含最大值
console.log(Math.ceil(Math.random() * (max - min + 1) + min));
```

4. 根据所学，写两个不同的公式都表示【两个数之间的随机整数，包括最大值】

```js
var max = 100;
var min = 10;

console.log(Math.ceil(Math.random() * (max - min + 1) + min));

console.log(min + Math.ceil(Math.random() * (max - min) + 1));
```

## js 编程题

1. 求 30 到 50 之间的随机整数 [包括 30 和 50]

```js
var num = Math.ceil(Math.random() * (50 - 30 + 1) + 30);
console.log(num);
```

2. 随机产生一个十六进制的颜色值 ,格式：#9ab353

```js
function getColor() {
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  var str = "#";

  for (var i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * 16)];
  }

  return str;
}

console.log(getColor());
```

3. 产生 5 个 20 到 30 之间的随机整数[包括 20 和 30]，并且通过 Math 方法，求出这 5 个数中的最大值和最小值

```js
var num1 = Math.ceil(Math.random() * (30 - 20) + 20);
var num2 = Math.ceil(Math.random() * (30 - 20) + 20);
var num3 = Math.ceil(Math.random() * (30 - 20) + 20);
var num4 = Math.ceil(Math.random() * (30 - 20) + 20);
var num5 = Math.ceil(Math.random() * (30 - 20) + 20);
//  测试用
// console.log(num1);
// console.log(num2);
// console.log(num3);

console.log(Math.max(num1, num2, num3, num4, num5));
```

4. 判断任意三个数组成的是否是直角三角形，(组成直角三角形的条件是，最大边的平方 = 其他 2 个边的平方的和),要求使用 Math.pow()求出某个数的平方

```js
function getSquare(a, b, c) {
  var as = Math.pow(a, 2);
  var bs = Math.pow(b, 2);
  var cs = Math.pow(c, 2);

  if (as + bs == cs || as + cs == bs || bs + cs == as) {
    return "是直角三角形";
  } else {
    return "不是直角三角形";
  }
}

var result = getSquare(3, 12, 5);
console.log(result);
```