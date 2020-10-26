## js 简答题

1. 对象组成都是采用键值对的形式，我们是否能把函数放到对象的属性值当中？该怎么做？

- 能

```js
var obj = {
  name: "李四",
  hello: function() {
    console.log(666);
  }
};
```

2. 能够使用什么方法遍历对象？如何遍历打印对象的属性名和属性值？

- for...in

```js
var obj = {
  name: "李四",
  age: 18
};

for (let key in obj) {
  console.log(obj[key]); //遍历value
  console.log(key); //遍历key
}
```

3. 遍历对象的方法能否也拿来遍历数组？为什么？

- 能
- 从数据类型来说，数组也是 Object 类型的

4. 我们知道给对象添加属性有三种方式，那么删除对象的属性能否也有三种方式或者更多呢？请说说你认为删除对象属性的方式有哪些

```js
var obj = {
  name: "李四",
  age: 18
};

delete obj.age;
console.log(obj);
delete obj["age"];
console.log(obj);
```

## js 编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，

- 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
- 将对象得`年龄`这个属性删除
- 将对象的`身高`的值题换成"180cm"
- 给对象添加属性`学号`，通过两种方式

```js
let obj = {
  name: "李四",
  age: 19,
  sex: "男",
  height: 180,
  hobby: function() {
    return "能吃饭，能跑步";
  }
};
// 遍历
for (let key in obj) {
  console.log(key + ":" + obj[key]);
}
console.log(obj.hobby());

// 删除属性
delete obj.age;
// 替换value
obj.height = "180cm";

obj.num = 20; //方式一

/* 方式二 */
let key = "num";
let num = 30;
eval("obj." + key + "='" + num + "'");
console.log(obj);
```

2. 定义一个车的对象，属性有颜色，大小，型号，方法有：能行驶

- 获取对象的`颜色`，在控制台输出
- 调用方法，在控制台输出格式要求`马路上正在行驶的是一辆xx色的xx型号的车`

```js
let car = {
    color: "red",
    size: "100",
    type: "C",
    skill: function () {
        return `马路上正在行驶的是一辆${this.color}色的${this.type}型号的车`;
    }
}


console.log(car['color']);
console.log(car.skill());
```

3.  【冒泡排序】对下面的数组进行从小到大排序，不允许使用 sort

```js
var arr = [4, 2, 7, 5, 3, 1, 6, 9, 8];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        // 如第一个大于第二个就交换他们的位置
        if (arr[j] > arr[j + 1]) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}

console.log(arr);
```

4. 【冒泡排序】对下面的数组进行从大到小排序，不允许使用 sort

```js
var arr = [4, 2, 7, 5, 3, 1, 6, 9, 8];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        // 如第一个小于第二个就交换他们的位置
        if (arr[j] < arr[j + 1]) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}

console.log(arr);
```
