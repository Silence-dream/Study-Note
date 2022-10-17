<?php

/**
 * 5.字符串 --> https://www.php.net/manual/zh/book.strings.php
 * strlen 字符串长度。  --> https://www.php.net/manual/zh/function.strlen
 * trim 去掉字符串左右空格。 -->https://www.php.net/manual/zh/function.trim.php
 * ltrim 去掉字符串左空格。 --> https://www.php.net/manual/zh/function.ltrim
 * rtrim 去掉字符串右空格。 --> https://www.php.net/manual/zh/function.rtrim.php
 * str_replace 字符串替换。 --> https://www.php.net/manual/zh/function.str-replace
 * substr 字符串截取。 --> https://www.php.net/manual/zh/function.substr
 * mb_substr 考虑编码的字符串截取。 --> https://www.php.net/manual/zh/function.mb-substr.php
 * str_repeat 重复一个字符串。 --> https://www.php.net/manual/zh/function.str-repeat
 * strpos 获取一个字符串在另一个字符串中的位置。 --> https://www.php.net/manual/zh/function.strpos.php
 * strtoupper 字符串转换成大写字母。 --> https://www.php.net/manual/zh/function.strtoupper.php
 * strtolower 字符串转换成小写字母。 --> https://www.php.net/manual/zh/function.strtolower.php
 * md5 md5 算法加密。 --> https://www.php.net/manual/zh/function.md5
 * sha1 sha1 算法加密。 --> https://www.php.net/manual/zh/function.sha1
 */


$str="  繁华   ";


echo strlen($str)."\n";
echo trim($str)."\n";
echo str_replace("繁","繁华之年",$str)."\n";