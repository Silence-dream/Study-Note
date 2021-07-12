<?php

// var_dump($_FILES);

// echo $_FILES['file']['name'];

// $filename 临时文件的路径及名称 
// $destination 文件的路径及名称
// $tmp_name =  $_FILES['file']['tmp_name'];
// // upload上传完,存储用户上传的文件路径 
// // var_dump($_SERVER['DOCUMENT_ROOT']); // E:/PHPCourse
// $upload_file = $_SERVER['DOCUMENT_ROOT'].'/upload/';// E:/PHPCourse/upload/
// move_uploaded_file ( $tmp_name , $upload_file.$_FILES['file']['name']);



// 多文件上传
// var_dump($_FILES);

$length = count($_FILES['file']['name']);

// echo $length;
$a = 0;
while ($a < $length) {
  // $filename 临时文件的路径及名称 
// $destination 文件的路径及名称
$tmp_name =  $_FILES['file']['tmp_name'][$a];
// upload上传完,存储用户上传的文件路径 
// var_dump($_SERVER['DOCUMENT_ROOT']); // E:/PHPCourse
$upload_file = $_SERVER['DOCUMENT_ROOT'].'/upload/'; // E:/PHPCourse/upload/
move_uploaded_file ( $tmp_name , $upload_file.'A'.$_FILES['file']['name'][$a]);

$a++;
}




?>