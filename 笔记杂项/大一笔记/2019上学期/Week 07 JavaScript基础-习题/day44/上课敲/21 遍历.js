

let arr = [1, 2, 5, 3];

for (let key in arr) {
    console.log(key);
}
for (let item of arr.entries()) {
    console.log(item);
}
console.log(`======================================`);
let set = new Set([654, 0, 654, 6]);

for (let key of set) {
    console.log(key)
}
console.log(`======================================`);
let map = new Map([
    ['a', 21],
    ['b', 212],
    ['c', 2331]
])
for (let key of map) {
    console.log(key)
}
console.log(`======================================`);