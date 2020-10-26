let obj = {
    1: "a",
    "2": "b",
    true: "c",
    undefined: "d",
    null: "e"
}
console.log(obj)

for (const key in obj) {
    console.log(typeof key);//发现key都是string类型
}
console.log(`=====================`)

// 其他数据类型作为key本该是合理的，这时候就出现了map

// // map语法:
// // 1.
// let map = new Map()
// // 2.
// let map = new Map([
//     [key, value],
//     [key, value],
//     [key, value]
//         .
//         .
//         .
// ])


let map = new Map([
    ["name", "张三"],
    ["age", 15],
    [true, "boolean"]
])
console.log(map);
console.log(map.size)//3



let newmap = new Map();
newmap.set("name", "王麻子");
newmap.set("married", false);
newmap.set("删除我", "哈哈哈");

console.log(newmap)//Map { 'name' => '王麻子' ,'married' => false}//


//has方法
//看看key=>name是否在newmap里面
console.log(newmap.has("name"))//true
console.log(newmap.has("name541654"))//false



// get 方法
//get得到key对应的value值
console.log(newmap.get('name'))

//delete
//delet删除key.value
console.log(newmap.delete("删除我"))//true
console.log(newmap)//验证是否删除









