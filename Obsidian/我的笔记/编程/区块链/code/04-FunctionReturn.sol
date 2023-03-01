// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract FunctionReturn {
    // 返回多个变量
    function returnMultiple()
        public
        pure
        returns (
            uint256,
            bool,
            uint256[3] memory
        )
    {
        return (1, true, [uint256(1), 2, 5]);
    }

    /* 
      上面这段代码中，我们声明了returnMultiple()函数将有多个输出：
      returns(uint256, bool, uint256[3] memory)，
      接着我们在函数主体中用return(1, true, [uint256(1),2,5])确定了返回值。
     */

    // 命名式返回
    function returnNamed()
        public
        pure
        returns (
            uint256 _number,
            bool _bool,
            uint256[3] memory _array
        )
    {
        _number = 2;
        _bool = false;
        _array = [uint256(3), 2, 1];
    }

    /* 
    在上面的代码中，我们用returns(uint256 _number, bool _bool, uint256[3] memory _array)
    声明了返回变量类型以及变量名。这样，我们在主体中只需要给变量_number，_bool和_array赋值就可以自动返回了。
     */

    // 命名式返回,依然支持return
    function returnName2()
        public
        pure
        returns (
            uint256 _number,
            bool _boolm,
            uint256[3] memory _array
        )
    {
        return (1, true, [uint256(1), 2, 5]);
    }

    // 解构赋值
    function readReturn() public pure {
        // 先声明变量,接收函数的返回值
        uint256 number;
        bool _bool;
        uint256[3] memory _array;
        (number, _bool, _array) = returnNamed();
        // 不要的可以留空
        (, _bool, ) = returnNamed();
    }



    
}
