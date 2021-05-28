<?php
/**
 * 2.文件操作
 * PHP 中提供了一套函数，可以用来操作电脑上的文件和目录。
 * 
 * 2.01 打开文件: fopen --> https://www.php.net/manual/zh/function.fopen
 * fopen — 打开文件或者 URL
 * √
 * 
 * 
 * 2.02 文件打开的方式
 * 
 * 2.03 读文件: fread --> https://www.php.net/manual/zh/function.fread
 * fread — 读取文件（可安全用于二进制文件）
 * √
 * 
 * 2.04 写文件: fwrite --> https://www.php.net/manual/zh/function.fwrite
 * fwrite — 写入文件（可安全用于二进制文件）
 * 
 * 
 * 2.05 重置文件指针: rewind --> https://www.php.net/manual/zh/function.rewind
 * rewind — 倒回文件指针的位置
 * 
 * 
 * 
 * 2.06 返回当前指针位置: ftell --> https://www.php.net/manual/zh/function.ftell
 * ftell — 返回文件指针读/写的位置
 * 
 * 
 * 
 * 2.07 移动文件指针: fseek --> https://www.php.net/manual/zh/function.fseek
 * fseek — 在文件指针中定位
 * 
 * 
 * 
 * 2.08 获取文件信息: fstat --> https://www.php.net/manual/zh/function.fstat
 * fstat — 通过已打开的文件指针取得文件信息
 * √
 * 
 * 
 * 2.09 关闭文件: fclose --> https://www.php.net/manual/zh/function.fclose
 * fclose — 关闭一个已打开的文件指针
 * √
 * 
 * 
 * 2.10 删除文件: unlink --> https://www.php.net/manual/zh/function.unlink
 * unlink — 删除文件
 * 
 * 
 * 
 * 2.11 文件尺寸: filesize --> https://www.php.net/manual/zh/function.filesize
 * filesize — 取得文件大小
 * √
 * 
 * 
 */

// 打开文件
 $txt=fopen("./1.txt","r");
 var_dump($txt);

//  获得统计信息
 $fstat = fstat($txt);
 var_dump($fstat);
//  获得文件大小
 $size = filesize("./1.txt");
 var_dump($size);
// 读取文件内容
 $context = fread($txt,filesize("./1.txt"));
 var_dump($context);
// 关闭文件获取
 fclose($txt);


//  写文件
// 打开文件
$fl = fopen("./2.txt",'r+');
fwrite($fl,"123");
fclose($fl);
$fq = fopen("./2.txt",'r+');
$fcontext = fread($fq,filesize("./2.txt"));
var_dump($fcontext);
fclose($fq);


// 删除文件
unlink('./aa.txt');