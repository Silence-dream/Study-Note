"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义一个装饰器
function say(params) {
    console.log(params);
    params.prototype.haha = "你好啊装饰器扩展的属性";
    params.prototype.fn = function () {
        return "我是扩展的方法啦O(∩_∩)O哈哈~";
    };
}
// 定义一个类
// 把装饰器给这个Hello类
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.Hi = function () {
        console.log("hi");
    };
    Hello = __decorate([
        say
    ], Hello);
    return Hello;
}());
var result1 = new Hello();
console.log(result1.haha);
console.log(result1.fn());
