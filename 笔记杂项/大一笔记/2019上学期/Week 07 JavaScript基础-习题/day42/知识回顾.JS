let arr = [4868, 4, 16, 54, 13, 1, 1, 1, 1, 2, 3, 3, 5, 65, 5]
let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }
}
console.log(obj)
