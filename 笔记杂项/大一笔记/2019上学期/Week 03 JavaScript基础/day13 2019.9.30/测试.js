// 9. 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）（拔高题）
//         * 
//        * * 
//       * * * 
//      * * * * 

var row=4; // row表示总行数
for(var r=1;r<=row;r++){  //外层循环控制行数 r表示每次变化的行数
   var triangle="";   //triangle表示最后的三角形
   for(var space=r;space<row;space++){ //此循环控制空格数 space表示空格数
      triangle+=" ";
   }
   for(var star=1;star<=2*r-1;star++){ //此循环控制 * 数 star表示*数
      triangle+="*";
   }
console.log(triangle);
}