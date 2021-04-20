"use strict";
function add(x1, x2) {
    if (typeof x1 == "number" && typeof x2 == "number") {
        return x1 + x2;
    }
    else if (typeof x1 == "string" && typeof x2 == "string") {
        return x1 + x2;
    }
}
let result = add(1, 2);
console.log(result);
