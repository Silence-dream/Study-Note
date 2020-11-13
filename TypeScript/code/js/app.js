/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-11 11:41:53
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 16:51:52
 * @FilePath: \code\js\app.js
 */
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.get("/", function (req, res) {
  res.send("hellop");
});
app.listen(port, function () {
  console.log("http://localhost:3000");
});
