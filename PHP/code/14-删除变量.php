<?php

/**
 * 4.变量
 * unset 删除变量。 --> https://www.php.net/manual/zh/function.unset
 * isset 判断是否设置了哪个变量。 --> https://www.php.net/manual/zh/function.isset.php
 * empty 判断变量是否为空。 --> https://www.php.net/manual/zh/function.empty.php
 * 
 */


$num=10;
$flag=false;
echo $num."\n";

echo isset($num)."\n";
printf(isset($num)."\n");
var_dump(isset($flag));

var_dump(empty($num));

unset($num);

echo $num."\n";