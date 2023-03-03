// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ReferenceType {
    // 固定长度
    uint256[8] array1;
    bytes1[5] array2;
    address[100] array3;

    // 可变长度
    uint[] array4;
    bytes1[] array5;
    address[] array6;
    bytes array7;

    // memory动态数组
    function fn () public pure{
      uint[] memory array8 = new uint[](5);
      bytes memory array9 = new bytes(9);

      array8[0]=1;
      array9[0]=0x01;
    }

    function f() public pure {
        g([uint(1), 2, 3]);
    }
    function g(uint[3] memory) public pure {
      // ...
      uint[] memory x = new uint[](3);
      x[0] = 1;
      x[1] = 3;
      x[2] = 4;
    }
    
    function addArray() public {
      uint[2] memory array10=[uint(1),2];
      array4 = array10;
      array4.push(1);
    }
    
    // 结构体
    struct Student{
        uint256 id;
        uint256 score; 
    }
    Student student; // 初始一个student结构体

    //  给结构体赋值
    // 方法1:在函数中创建一个storage的struct引用
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }

    // 方法2:直接引用状态变量的struct
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }

}
