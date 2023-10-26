<?php
/**
 * getimagesize --> https://www.php.net/manual/zh/function.getimagesize
 * getimagesize — 取得图像大小
 * 
 * imagecreatefrompng --> https://www.php.net/manual/zh/function.imagecreatefrompng
 * imagecreatefrompng — 由文件或 URL 创建一个新图象。
 * 
 * imagecopyresampled  --> https://www.php.net/manual/zh/function.imagecopyresampled
 * imagecopyresampled — 重采样拷贝部分图像并调整大小
 * 
 * imagecopyresized --> https://www.php.net/manual/zh/function.imagecopyresized
 * imagecopyresized — 拷贝部分图像并调整大小
 * 
 * imagecopymerge --> https://www.php.net/manual/zh/function.imagecopymerge
 * imagecopymerge — 拷贝并合并图像的一部分
 * 
 * imagerotate --> https://www.php.net/manual/zh/function.imagerotate
 * imagerotate — 用给定角度旋转图像
 * 
 */

//  **************************************获取图像尺寸*************************************************
//  1.准备一张图片
// $filename = 'aaa.png';

// // 2.取得源图片大小(宽高)
// list($width, $height) =getimagesize ($filename);
// // 3.使用该方法通过图片路径 产生一个resouce
// $src_image = imagecreatefrompng ($filename );

// // 4.设置响应头
// header('Content-Type: image/png');
// // 5.展示图片
// imagepng($src_image);

// // 6.销毁图片资源
// imagedestroy($src_image);

//  **************************************进行图片缩放*************************************************
// // 1.1准备一个源图像
// $filename = 'aaa.png';
// // 1.2取得源图片大小(宽高)
// list($width, $height) =getimagesize ($filename);
// // 1.3使用该方法通过图片路径 产生一个resouce
// $src_image = imagecreatefrompng ($filename );

// // 2.1 计算真彩色图像的宽高(目标图像)
// $dst_w = 0.5 * $width;
// $dst_h = 0.5 * $height;
// // 2.2 准备一个目标图像(真彩色图像)
// $dst_image = imagecreatetruecolor ( $dst_w  , $dst_h  );


// // 3.1 缩放图片
// imagecopyresampled ($dst_image , $src_image , 0, 0 , 0 , 0 , $dst_w ,$dst_h , $width , $height );





// // 4.设置响应头
// header('Content-Type: image/png');
// // 5.展示图片
// imagepng($dst_image);

// // 6.销毁图片资源
// imagedestroy($dst_image);



//  **************************************进行图片裁切*************************************************

// // 1.1准备一个源图像
// $filename = 'aaa.png';
// // 1.2取得源图片大小(宽高)
// list($width, $height) =getimagesize ($filename);
// // 1.3使用该方法通过图片路径 产生一个resouce
// $src_image = imagecreatefrompng ($filename );

// // 2.1 计算真彩色图像的宽高(目标图像)
// $dst_w = 0.5 * $width;
// $dst_h = 0.5 * $height;
// // 2.2 准备一个目标图像(真彩色图像)
// $dst_image = imagecreatetruecolor ( $dst_w  , $dst_h  );


// // 3.1 裁切图片
// imagecopyresized ($dst_image , $src_image , 0,0 , 300 , 300 , $dst_w , $dst_h ,$width, $height);


// // 4.设置响应头
// header('Content-Type: image/png');
// // 5.展示图片
// imagepng($dst_image);

// // 6.销毁图片资源
// imagedestroy($dst_image);



//  **************************************进行图片水印*************************************************
// 1.1准备一个源图像
 list($src_w, $src_h) =getimagesize ('bbb.png');
 $src_im = imagecreatefrompng ('bbb.png');
 $rotate = imagerotate( $src_im, 90 , 0);
// // 2.1 (目标图像)

// // 1.2取得源图片大小(宽高)
list($width, $height) =getimagesize ('aaa.png');
// 1.3使用该方法通过图片路径 产生一个resouce
$dst_im = imagecreatefrompng ('aaa.png');
// 3.1 裁切图片
imagecopymerge ( $dst_im ,$rotate  , 100, 100 , 0 , 0 , $src_w , $src_h , 50 );


// // 4.设置响应头
header('Content-Type: image/png');
// // 5.展示图片
imagepng($dst_im);

// // 6.销毁图片资源
imagedestroy($dst_im);


?>