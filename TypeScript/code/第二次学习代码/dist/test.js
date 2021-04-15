"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 1;
        this.name = name;
    }
    Person.prototype.fn = function () {
        console.log(this.age);
    };
    Object.defineProperty(Person.prototype, "setage", {
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setname", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super.call(this, "李四") || this;
    }
    Son.prototype.fn = function () {
        console.log(this.name);
    };
    return Son;
}(Person));
var person = new Person("李四");
person.setage = 123;
person.setname = "刘德华";
console.log(person);
