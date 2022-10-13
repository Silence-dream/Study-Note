"use strict";
exports.__esModule = true;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    LinkedList.prototype.addFirst = function (item) {
        var node = new Node(item);
        if (this.head == null) {
            this.head = node;
        }
        e;
    };
    return LinkedList;
}());
var Node = /** @class */ (function () {
    function Node(data) {
        this.node = data;
        this.next = null;
    }
    return Node;
}());
var linkedList = new LinkedList();
linkedList.addFirst(1);
console.log(linkedList);
