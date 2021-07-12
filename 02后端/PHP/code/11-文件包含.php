<?php
/**
 * 1.文件包含
 * include
 * include 使用include引用外部文件时，当引用的文件发生错误时，系统只会给出个警告错误，而整个php文件会继续执行
 * 。
 * 
 * 
 * include_once
 * include_once() 语句在脚本执行期间包含并运行指定文件。
 * 此行为和 include() 语句类似，唯一区别是include_once()会先判断一下这个文件在之前是否已经被包含过，如已经包含，则忽略本次包含。
 * 
 * 
 * require
 * 使用require语句调用文件时，有返回值且会发生错误
 * 
 * 
 * require_once
 * require_once() 语句在脚本执行期间包含并运行指定文件。
 * 此行为和 require() 语句类似，唯一区别是require_once()会先判断一下这个文件在之前是否已经被包含过，如已经包含，则忽略本次包含。
 * 
 * 
 */


// include("./11-被包含的文件.php");

// 已经引入就不执行了
// include_once("./11-被包含的文件.php");

// require("./11-被包含的文件.php");
// require "./11-被包含的文件.php";

echo $color;
