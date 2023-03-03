// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Variables {
    uint256 public x = 1;
    uint256 public y = 2;
    string public z;

    function foo() external {
        x = 5;
        y = 10;
        z = "0x0011";
    }

    // 局部变量
    function bar() external pure returns(uint){
        uint xx = 1;
        uint yy = 3;
        uint zz = xx + yy;
        return(zz);
    }

    // 全局变量
    function global() external view returns(address, uint, bytes memory){
      address sender = msg.sender; // 请求发起地址
      uint blockNum = block.number; // 当前区块高度
      bytes memory data = msg.data; // 请求数据
      return(sender, blockNum, data);
    }

}
