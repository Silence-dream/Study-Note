// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Funtion {
    // function <function name>(<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]

    function fn(int256 username) public payable returns (int256) {
        return username;
    }

    uint256 public number = 20220330;

    function add() external {
        number += number + 1;
    }

    // pure: 纯函数，不读写状态变量，不调用其他函数
    function addPure(uint256 _number)
        external
        pure
        returns (uint256 new_number)
    {
        new_number = _number + 1;
    }

    // view: 只读
    function addView() external view returns (uint256 new_number) {
        new_number = number + 1;
    }
}
