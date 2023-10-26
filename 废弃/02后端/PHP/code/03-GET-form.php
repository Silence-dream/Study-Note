<?php
// 解决中文乱码
header("Content-Type: text/html;charset=utf-8");
// 输出 GET 获取的值
var_dump($_GET);
echo($_GET["username"]);
echo($_GET['passworld']);

?>