"use strict";
class GenericNumber {
    constructor() {
        this.zeroValue = 0;
    }
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
