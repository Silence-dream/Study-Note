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