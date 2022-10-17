var arr=new Array(5,19,23,6,14,8);

//语法:   数组名.splice(开始索引，要删除的数量，[增加元素])     // []表示可写可不写


//添加
arr.splice(0,0,500);//从下标是2的开始，删除0个，添加一个500进去
console.log('添加'+arr);


//删除
arr.splice(0,1)
console.log('删除:'+arr)


//修改(删除一个增加一个)
// 把23换成852

arr.splice(2,1,852);
console.log(`修改:${arr}`);

