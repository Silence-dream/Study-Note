<?php

// imagecreatetruecolor --> https://www.php.net/manual/zh/function.imagecreatetruecolor.php
// 新建一个真彩色图像

// imagepng-->  https://www.php.net/manual/zh/function.imagepng.php
// 以 PNG 格式将图像输出到浏览器或文件

// imagedestroy --> https://www.php.net/manual/zh/function.imagedestroy
// imagedestroy — 销毁一图像

// imagecolorallocate --> https://www.php.net/manual/zh/function.imagecolorallocate
// imagecolorallocate — 为一幅图像分配颜色

// imagefill --> https://www.php.net/manual/zh/function.imagefill
// imagefill — 区域填充

// imagechar --> https://www.php.net/manual/zh/function.imagechar
// magechar — 水平地画一个字符

// imagestring --> https://www.php.net/manual/zh/function.imagestring
// imagestring — 水平地画一行字符串

// imagettftext --> https://www.php.net/manual/zh/function.imagettftext
// imagettftext — 用 TrueType 字体向图像写入文本

// imagesetpixel --> https://www.php.net/manual/zh/function.imagesetpixel
//  imagesetpixel — 画一个单一像素

// imageline --> https://www.php.net/manual/zh/function.imageline
// imageline — 画一条线段

// 1.创建一张画布
$resource = imagecreatetruecolor ( 500 , 500 );
// 颜色
$background_color = imagecolorallocate ( $resource , 255,255,255);
// echo $background_color;
imagefill ( $resource , 0 , 0 , $background_color);
$color = imagecolorallocate ( $resource , 0,255,0);

// 写字
// imagechar ( $resource, 50 , 30 , 30 , 'P' , $color );

// imagestring ($resource , 200 , 120 , 120, 'PHP' , $color );
// $image 画布
// $size 字的大小
// $angle 字体的旋转角度
// $x,$y 字的位置
// $color  字的颜色
// $fontfile 字体文件
// $test 写什么字
// imagettftext ( $resource  , 30 , 0 , 200 , 200 , $color , './fff.ttf', "PHP" );

// 画图

// imagesetpixel ( $resource , 100 , 100 , $color );

// imageline ( $resource , 15, 15 , 150 , 150 , $color );

// 2.输出图像
header("Content-Type: image/png");
imagepng($resource);
// 3.摧毁图像
imagedestroy($resource);

?>