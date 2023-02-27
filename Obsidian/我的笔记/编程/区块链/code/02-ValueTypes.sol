// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HelloWeb3 {
    bool public flag1 = true;
    bool public flag2 = false;

    int256 public num1 = -10; // 整数
    uint256 public num2 = 10; // 正整数
    uint256 public _number = 20220330; //

    // 地址
    address public _address = 0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71;
    address payable public _address1 = payable(_address); // payable address，可以转账、查余额
    // 地址类型的成员
    uint256 public balance = _address1.balance; // balance of address

}
