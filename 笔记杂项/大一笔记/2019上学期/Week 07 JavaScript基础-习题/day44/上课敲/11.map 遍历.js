let newmap = new Map();
newmap.set("name", "王麻子");
newmap.set("married", false);
newmap.set("删除我", "哈哈哈");

//遍历newmap里面的key
for (let key of newmap.keys()) {
    console.log(key)
}

console.log(`------------------------------`)

//遍历newmap里面的value
for (let key of newmap.values()) {
    console.log(key)
}

console.log(`+++++++++++++++++++++++++++++++++++`)

//遍历key和value

for (let key of newmap.entries()) {
    console.log(key)
}