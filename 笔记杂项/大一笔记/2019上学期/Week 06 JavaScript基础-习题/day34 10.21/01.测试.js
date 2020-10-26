function a() {
    var n = 90;
    sum = n++;
    return a;
}
console.log(a())