//遍历key  set.keys()
//定义数组
let set = new Set([1, 2, 3]);

for (let key of set.keys()) {
    console.log(key);
}


for (let value of set.values()) {
    console.log(value)
}

for (let item of set.entries()) {
    console.log(item);
}

set.forEach(function (value, key, map) {
    console.log(`${key}对应${value}`)
})