# Set集合和Array数组

- es5中Array数组有缺点,因此在es6中出现了set  Array中的数据可以重复 但是set中的数据不能重复

- set集合中不允许出现重复的元素 所以多数情况下被用来做数组去重

## set集合的语法

~~~js
let set=new Set([元素,元素,...])
~~~

## set中的常用属性和方法

### set.size 有几个元素(长度)

   ```js
    let set = new Set([1, 5, 6, 'l', 'fsa']);
    console.log(set.size);//5
   ```

### set.add(元素)添加

  ```js
    let set = new Set([1]);
    set.add(100);
    console.log(set);//Set {1,100}
  ```

### set.has(元素) 如果元素存在返回true没有就返回false

   ```js
    let set = new Set ([56]);
    console.log(set.has(56));//true
    console.log(set.has(056));//false
   ```

### set.delete(元素) 删除成功返回true 删除失败返回false

   ```js
    let set = new Set([10, 20, 30]);
    set.delete(10);
    console.log(set);//Set {20,30}
    console.log(set.delete(20));//true
    console.log(set);//Set {30}
    console.log(set.delete(50));//false
   ```

### set.clear()清空set中的数据

   ```js
    let set = new Set([1,5,6,3,54,4,2,5]);
    console.log(set);//Set {1,5,6,3,54,4,2,5}
    set.clear()
    console.log(set)//Set { }
   ```

### ` [...set][索引]`获取索引上的元素

   ```js
    let set = new Set([1,5])
    console.log([...set][1])//Set{5}
   ```

### Array.from(new set([元素]))   转Array数组

```js
let set = new Set([5, 1, 56])
let arr = Array.from(set)
console.log(set)//Set { 5, 1, 56 }
console.log(arr)//[ 5, 1, 56 ]
```

## set中的遍历方法

```js
//遍历key  set.keys()
//定义数组
let set = new Set([1,2,3]);

for(let key of set.keys()){
    console.log(key);//遍历出1 2 3
}
//遍历value set.values()
for(let value of set.values()){
    console.log(value);//遍历出1 2 3
}

//遍历键值对 set.entries()
for(let item of set.entries()){
    console.log(item);
}
//遍历出
// [ 1, 1 ]
// [ 2, 2 ]
// [ 3, 3 ]
//这说明set里面的key和value是一样的

//forEach的方法遍历   第三个参数是map本身
set.forEach(function (value, key, map) {
    console.log(`${key}对应${value}`)
})
```



# Map字典和Objcet对象

- es5中对象有缺点,因此在es6中出现了map
- Object对象中,对象的键的名字的数据类型: 字符串, 为了解决只有字符串才能是键的问题 引入了map

## Map语法

```js
//语法1:

let map=new Map(
[
    [key,value],
    [key,value],
    [key,value]
])
//语法2:
let map=new Map();
```

##  map的属性和方法

### 字典名.size 返回字典中又几个键值对

```js
let map = new Map([
    ["name", "李四"],
    ["age", 10]
])
console.log(map.size);//2
```



### 字典名.set(key,value) 给字典添加键值对

```js
let map = new Map();
map.set("name", "穹妹");
map.set("age", 10)
console.log(map)//Map { 'name' => '穹妹', 'age' => 10 }
```



### 字典名.has(key) 判断key是否在字典中

```js
let map = new Map([
    ["name", "皇子"],
    ["age", 99]
]);
console.log(map.has("age"))//true
```



### 字典名.get(key) 得到key对应的value

```js
let map = new Map([
    ["name", "礼券"],
    [undefined, 50]
])
console.log(map.get(undefined));//50
```



### 字典名.delet(key) 删除字典中对应的那条数据

```js
let map = new Map([
    ["name", "开心"],
    [null, 100],
    [undefined,500]
])
map.delete(null);
console.log(map);//Map { 'name' => '开心', undefined => 500 }
console.log(map.delete(undefined));//true
```



### 字典名.clear()  无参数，直接清除所有数据

```js
let map = new Map([
    ["name", 5],
    ["age", 10]
])
console.log(map.clear())//undefined
console.log(map);// Map { }
```



## map遍历

```js
//遍历key   map.keys()
let map = new Map();
map.set("name", 50);
map.set("age", 5111);
for (let key of map.keys()) {
    console.log(key);//输出name age
}
//遍历value map.values()
for (let value of map.values()) {
    console.log(value);//输出50 5111
}

//遍历key和value  key+value=entries    map.entries();

for (let item of map.entries()) {
    console.log(item);
}
//输出
// ['name', 50]
// ['age', 5111]

//forEach的方法
map.forEach(function (value, key) {
    console.log(key + "===" + value);
})
//输出
// name===50
// age===5111
```

