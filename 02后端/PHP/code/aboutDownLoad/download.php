<?php
// 1.准备一个文件--> 随便一张图片
$file_name ="aaa.png";
$file_size = filesize($file_name);

$is_login = true;

if (!$is_login) { // 没有登录不让下载

  echo '您还没有登录，点击这里去登录 <a href="http://www.baidu.com">点我去登录</a>';

} else { // 登录了 可以下载
  // 3.服务器返回文件--> 设置响应头
Header("Content-Type: application/octet-stream");
Header("Accept-Length:".$file_size);
Header("Content-Disposition: attachment; filename=".$file_name);

// 4.把文件输出给浏览器(读文件--> fopen 打开文件 读取文件 关闭文件)

// 打开
$handle  = fopen($file_name,'r');
// 读取文件
echo fread($handle,$file_size);
// 关闭我呢见
fclose($handle);
}


?>