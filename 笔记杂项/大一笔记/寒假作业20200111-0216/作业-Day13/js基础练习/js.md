## js 简答题

1. 怎么定义一个二维数组？

- var arr=[1,2,[3,4]]

2. 数组的方法有哪些？请列举 10 个，并说明方法的作用

- join(): 将数组的元素组起一个字符串
- push(): 可以接收任意数量的参数 把它们逐个添加到数组末尾 并返回修改后数组的长度
- pop()：数组末尾移除最后一项 减少数组的 length 值 然后返回移除的项
- shift(): 删除原数组第一项 并返回删除元素的值 如果数组为空则返回 undefined
- unshift(): 将参数添加到原数组开头 并返回数组的长度
- sort(): 按升序排列数组项
- reverse()：反转数组项的顺序
- concat(): 将参数添加到原数组中
- slice(): 返回从原数组中指定开始下标到结束下标之间的项组成的新数组
- splice(): 可以实现删除、插入和替换

3. 怎么获取二维数组里面的某一个元素，自己定义数组

```js
var arr = [1, 2, [3, 4]];
console.log(arr[2][0]); //3
```

4. 数组的长度和数组的下标(索引)的对应关系

- 索引的最大值小于数组的长度

## js 编程题

1. 定义数组 var arr = [1,2,666,3,4],

- 1） 给数组最后添加 1 个元素
- 2）给数组最前面添加 1 个元素
- 3）将元素 666 删除之后，添加一个元素"拉拉"

```js
var arr = [1, 2, 666, 3, 4];

//1
arr.push(10);

//2
arr.unshift(80);

//3
arr.splice(2, 1, "拉拉");
```

2. 定义数组 var arr = [2,4,77,100,1]

- 1）在控制台输出数组的最大值
- 2）在控制台输出数组的最小值

```js
var arr = [2, 4, 77, 100, 1];

//1
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
  max = arr[i] > max ? arr[i] : max;
}

console.log(max);

// 2
var arr = [2, 4, 77, 100, 1];

var min = arr[0];

for (var i = 0; i < arr.length; i++) {
  min = arr[i] > min ? min : arr[i];
}

console.log(min);
```

3. 定义数组 var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用 2 种方式实现)

```js
// 1
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < i; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(i, 1);
    }
  }
}

console.log(arr);

// 2
var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2];

var set = new Set(arr);

console.log(set);
```

4. 现有二维数组，var array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
   - 1). 遍历打印二维数组的所有元素
   - 2). 计算二维数组中所有元素的和
   - 3). 求二维数组中所有元素的最大值。

```js
// 1
var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// 2
var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}

console.log(sum);

// 3
var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

var max = arr[0][0];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    max = arr[i][j] > max ? arr[i][j] : max;
  }
}

console.log(max);
```
