let str = 'hello-word';

// 1
let strArr = str.split("")
for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == "h") {
        strArr[i] = "H";
    }
    if (strArr[i] == "w") {
        strArr[i] = "W";
    }
}
// console.log(strArr);

str = String(strArr.join(""));
console.log(str);


// 2

strArr = str.split("-");
console.log(strArr);


// 3

str = String(strArr[0] + "_" + strArr[1])
console.log(str);
console.log(typeof str);