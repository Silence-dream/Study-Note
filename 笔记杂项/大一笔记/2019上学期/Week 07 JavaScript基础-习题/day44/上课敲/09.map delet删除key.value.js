let newmap = new Map();
newmap.set("name", "王麻子");
newmap.set("married", false);
newmap.set("删除我", "哈哈哈");


//delete
//delet删除key.value

// console.log(newmap.delete("删除我"))//true
// 不想看见true
newmap.delete("删除我");
console.log(newmap)//验证是否删除