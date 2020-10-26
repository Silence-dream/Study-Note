let map = new Map([
    ["name", "开心"],
    [null, 100],
    [undefined, 500]
])
map.delete(null);
console.log(map);
console.log(map.delete(undefined));//true