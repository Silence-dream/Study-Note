let set = new Set([10, 20, 30]);
set.delete(10);
console.log(set);//20,30
console.log(set.delete(20));//true
console.log(set)//30
console.log(set.delete(50))//false
