## js解答题

1. 系统构造函数创建对象的格式

```js
var obj = new Object();
```

2. 工厂函数创建对象的格式

```js
function obj(name, age, sex) {
　　var obj = new Object();
　　obj.name = name;
　　obj.age = age;
　　obj.sex = sex;
　　}
```

3. 自定义构造函数创建对象的格式

```js
function obj(name, age, sex) {
　　this.name = name;
　　this.age = age;
　　this.sex = sex;
　　}
```

4. 构造函数创建对象有什么好处？

- 可以批量创建对象
- 无需手工指定原型




## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

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
````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```js
    var a=54321;
    
    var g1=a%10;
    var g2=parseInt(a%100/10);
    var g3=parseInt(a%1000/100);
    var g4=parseInt(a%10000/1000);
    var g5=parseInt(a/10000);
    /* //测试代码
    console.log(g1);
    console.log(g2);
    console.log(g3);
    console.log(g4);
    console.log(g5);
    
    */
    
    if(g1==g5&&g2==g4)
    {
        console.log(a+"是回文数");
    }
    else{
        console.log(a+'不是回文数');
    }
    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    let sum = 1;
    for (let i = 1; i <= 10; i++) {
        sum *= i;
    }
    console.log(sum)
    
    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    // 1) 将1放到数组中2的前面
    // 2) 删除数组中的6
    // 3) 将数组的所有剩余元素求和
    // 4) 在 3) 的基础上通过length求出数组元素和的平均值
    // 5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false
    
    
    var arr = [2, 3, 4, 5, 6];
    var sum = 0;
    //1
    arr.unshift(1)
    console.log(arr);
    //2
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("和是" + sum);
    //3
    var mean = sum / arr.length;
    console.log("平均值是" + mean);
    
    //4
    console.log(arr.indexOf(6));
    ```