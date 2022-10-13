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
