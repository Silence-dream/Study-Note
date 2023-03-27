// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Mapping {
    mapping(uint256 => address) public idToAddress; // id映射到地址
    mapping(address => address) public swapPair; // 币对的映射，地址到地址

    // 我们定义一个结构体 Struct
    struct Student {
        uint256 id;
        uint256 score;
    }
    /* 
      Error
      DeclarationError: Identifier not found or not unique.
     */
    // mapping(Student => uint256) public testVar;

    function writeMap(uint256 _Key, address _Value) public {
        idToAddress[_Key] = _Value;
    }
}
