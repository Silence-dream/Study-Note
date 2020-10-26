let newmap = new Map();
newmap.set("name", "王麻子");
newmap.set("married", false);
newmap.set("删除我", "哈哈哈");



newmap.forEach(function (value, key) {
    console.log(key + "*****" + value)
})

console.log(`--------------`)
newmap.forEach(function (value, key, map) {
    console.log(map)
})

console.log(`=============`)
newmap.forEach(function (value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});
