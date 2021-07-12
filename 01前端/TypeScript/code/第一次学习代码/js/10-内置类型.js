"use strict";
//global objects
var a = [1, 2, 3];
var date = new Date();
date.getTime();
var reg = /abc/;
reg.test('abc');
//build-in object
Math.pow(2, 2);
//DOM and BOM
var body = document.body;
var allLis = document.querySelectorAll('li');
allLis.keys();
document.addEventListener('click', function (e) {
    e.preventDefault();
});
var viking = { name: 'viking', age: 20 };
var viking2 = { name: 'viking' };
var viking3 = { age: 20 };
