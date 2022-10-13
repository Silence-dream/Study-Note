<?php

/**
 * 6.数组  --> https://www.php.net/manual/zh/book.array.php
 * count 数组元素个数。 --> https://www.php.net/manual/zh/function.count
 * implode 数组转字符串。 --> https://www.php.net/manual/zh/function.implode
 * array_push 数组最后追加数据。 --> https://www.php.net/manual/zh/function.array-push.php
 * array_pop 弹出数组最后数据。--> https://www.php.net/manual/zh/function.array-pop.php
 * array_unshift 向数组最前追加数据。 --> https://www.php.net/manual/zh/function.array-unshift.php
 * array_shift 弹出数组最前数据。 --> https://www.php.net/manual/zh/function.array-shift
 * array_keys 返回数组中所有的键，组成新的数组。 --> https://www.php.net/manual/zh/function.array-keys.php
 * array_values 返回数组中所有的值，组成新的数组。--> https://www.php.net/manual/zh/function.array-values
 * array_merge 合并多个数组。 --> https://www.php.net/manual/zh/function.array-merge.php
 * array_search 在数组中搜索数据，并返回对应的键。 --> https://www.php.net/manual/zh/function.array-search.php
 * array_reverse 反转数组中的元素。 --> https://www.php.net/manual/zh/function.array-reverse
 * sort 排序数组中元素。 --> https://www.php.net/manual/zh/function.sort
 * rsort 反向排序数组中元素。 --> https://www.php.net/manual/zh/function.rsort
 * ksort 根据键值排序数组元素。--> https://www.php.net/manual/zh/function.ksort
 * asort 对数组进行排序并保持索引关系。 --> https://www.php.net/manual/zh/function.asort.php
 * 
 */


$arr = array(1,2,3,4);
$arr2 = array("name"=>"梨花","age"=>18);

var_export($arr)."\n";
var_export($arr2)."\n";

echo "\n";
printf(count($arr)."\n");



var_export(implode($arr));
echo "\n";
var_export(implode($arr2));


array_push($arr,90);
echo "\n";
var_export($arr);
echo "\n";
printf(array_pop($arr));
echo "\n";
var_export(array_keys($arr2));

echo "\n";
var_export(array_merge($arr,$arr2));
echo "\n";
var_export(array_search("梨花",$arr));
echo "\n";
var_export(array_search("梨花",$arr2));
echo "\n";
var_export(array_reverse($arr));
echo "\n";