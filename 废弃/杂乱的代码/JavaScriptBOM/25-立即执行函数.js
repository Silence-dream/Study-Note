(function (params) {
    console.log(1);
}());

(function (a, ...test) {
    console.log(2)
    console.log(test)
    console.log(arguments)
})(800, 6, 6, 6, 6, 6);