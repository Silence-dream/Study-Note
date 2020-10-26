# 一、选择题
## 1、‘5’+5的结果是什么（B）
A、	 10   B、 55    C、NaN     D、undefined
## 2、下列JS的判断语句中（A）是最正确的
A、	    if（i`==`0）
B、	    if(i=0)
C、	    if i`==`0 then
D、	if i=0 then
## 3、以下哪个在JavaScript中会报错（D）
A、	var a = ();    B、var a = []
C、var a = {}     D、var a = ‘’
## 4、分析下段代码输出结果是（B）
var arr = [2,3,4,,5,6];
var sum = 0;
for(var i = 1;i < arr.length; i++) {
	sum+=arr[i]
}
alert(sum)   `正常逻辑来说是18但是呢，有个undefined所以输出NaN                                                                                                                                                                                                                            `
A、	  20    B、  18    C、  14    D、 12
## 5、var a = [];以下像数组添加元素的方式正确的是（B）
A、a.pop(‘zero’)       B、a.push(‘one’)
C、a.join(‘two’)      D、a.shift(‘three’)
## 6、数组对象的length属性一直都是（D）
A、等于最后一个对象下表数加一   B、等于最后一个对象下表数减一
C、等于最后一个对象下表数      D、等于这个数组对象属性的数量

## 7、执行下列代码之后，数组myArr的值是（B）

var myArr = [1,2,3,4,5];
myArr.shift();
A、[1,2,3,4,5]    B、[2.3.4.5]   C、 []    D、 [1,2,3,4]

## 8、下列不是循环语句关键字的是(D)

A、	for   B、 do   C、while    D、swith

## 9、Number(null);此代码将返回（ D ）

A、 Null   B、1   C、 undefined    D、0

## 10、运行下面的代码(A)

var x = 1;
if(x`==`1) {
console.log(‘one’);
if(x`===`’1’) {
		console.log(‘two’)
	}
}
最后的执行结果是()
A、 one    B、1   C、 two    D、2

## 11、下列不是分支语句使用的关键字是(D)

A、 case   B、if   C、 else     D、for

## 12、如下面代码段(C)

var  x = 0; while(_____)x+=2;
要是while循环体执行十次,空白处的循环体判断式是()
A、x<10   B、x<=10   C、 x<20   D、x<=20

## 13、如下面代码中:(C)

for(var i = 0, j = i; i < 3; i++) {
	j+=i
}
当循环结束之后.j的值为()
A、 1   B、 2   C、3    D、4

## 14、var x = ‘1‘+2+3；x的值是（B）

A、123    B、15    C、6    D、语句会报错

## 15、向数组array追加一个元素，10，正确的做法是（BC）

A、array.shift(10)      B、array.unshift(10)
C、array.push(10)      D、array.slice(10)

## 16、以下关于Array数组对象说法0不正确的是（）

A、对数组里的数据排序可以用sort函数，如果排序效果非预效期，可以给sort函数加一个排序函数的参数
 B、reverse用于对数组的倒序排列
 C、向数组最后位置增加一个新元素，可以用pop方法
D、unshift方法用于向数组添加第一个新元素

## 17、以下代码运行后弹出的结果是（b）

var a = 888
++a;
alert(a++)
A、8888      B、889    C、890    D、891

## 18、以下不是关键字或保留字的是（c）

A、var   B、new   C、bool    D、Boolean

## 19、下面哪个选项实现了复制一个数组得到新数组，原数组保持不变（AD）

 A、 var newArray = oldArray
 B、 var newArray = new Array(oldArray)
 C、 var newArray = [oldArray];
 D、 var newArray = oldArray.slice(0)

## 20、var a = new Array(‘100’,’2111’,’41111’);(A)

for(var i = 0; i<a.length; i++) {
	alert(a[i]+’’)
}
A、100  2111  41111    B、0  1  2    C、1  2  3      D、1  2  4

## 21、下列哪个符号不是逻辑运算符（  A ）

A、%     B、||     C、&&       D、 ！

## 22、如下代码的输出结果为（   A ）

console.log(1+’2’+’2’)
console.log(1+’2’+’2’)
console.log（‘A’-‘B’+’2’）
console.log(（‘A’-‘B’+2）
A、122122NaN2NaN           B、 122122NaNNaN2
C、122122NaN2NaN2          D、12232NaN2NaN2

## 23、执行下列语句后c的值是（  4 ）

var a = 2，b =1，c=3;
if(a>b){
if(b<0){
c=0;
}
else{
   c++
}
}
A、1
B、2
C、3
D、0

## 24、var a=false;var x=a?”A”:”B”;x的值时（ B ）

A、 A    B、 B     C、 true   D、  false

## 25、哪个关键字用来定义条件语句的可选分支（  B ）

A、or   B、else    C、altenative    D、 next

## 26、下列选项中哪一个等价于下列代码（ C  ）

if (x==a) {
 x = b;
}else {
x = c
}
A、x == a?b,c;      B、x == a? b?c
C、x == a?b:c       D、x == a? c?b

二、编程题
1、定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组

```javascript

let arr = new Array(5)
// console.log(arr);//测试

for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(Math.random() * (101 - 10) + 10);
}
console.log(arr)//测试

// 遍历数组中的元素

for (key in arr) {
    if (arr[key] < 50) {
        arr[key] = 0
    }
}

```



2、打印图形

 ```javascript
for (let j = 5; j >= 1; j--) {
    let str = ""
    for (let i = j; i >= 1; i--) {
        str += j;
    }
    console.log(str);
}

// for循环打印下半部分


for (let j = 2; j <= 5; j++) {
    let str = ""
    for (let i = j; i >= 1; i--) {
        str += j;
    }
    console.log(str);
}
 ```



3、打印九九乘法表:

```javascript
//外层定义行
for (let j = 1; j <= 9; j++) {
    let str = ""
    for (let i = 1; i <= j; i++) {//内层定义列
        str += i + "*" + j + "=" + i * j + " ";
    }
    console.log(str);
}
```
















