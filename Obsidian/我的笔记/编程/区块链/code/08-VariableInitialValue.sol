// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Variable{
  // 值类型初始值
  bool public _bool; // false
  string public _string; // ""
  uint public _uint; // 0
  address public _address; // 0x0000000
  enum ActionSet { Buy, Hold, Sell}
  ActionSet public _enum; // 第一个元素是 0

  function fi() internal{} // internal 空白方程
  function fe() external{} // external 空白方程

  // 引用类型初始值
  uint[8] public _staticArray; // 所有成员设为默认值的静态数组[0,0,0,0,0,0,0,0]
  uint[] public _dynamicArray; // 空的动态数组
  mapping(uint => address) public _mapping; // 所有元素都为其默认值的mapping
  // 所有成员设为其默认值的结构体 0,0
  struct Student{
    uint256 id;
    uint256 score;
  }
  Student public student;
}