<?php

/**
 * 2. 时间
 * time 当前时间戳。 --> https://www.php.net/manual/zh/function.time.php
 * 
 * 
 * date 格式化一个本地时间／日期 --> https://www.php.net/manual/zh/function.date.php
 * 语法: date ( string $format , int $timestamp = ? ) : string
 * 
 * 
 * date_default_timezone_set 设置时区。 -->https://www.php.net/manual/zh/function.date-default-timezone-set.php  Asia/Shanghai
 * strtotime 将任何英文文本的日期时间描述解析为 Unix 时间戳。
 * 
 * strtotime 将任何英文文本的日期时间描述解析为 Unix 时间戳
 * 
 */

// 获取当前时间戳
echo time()."\n";

echo date("H:i:s");