// 定义方法 判定直角三角形, isRightTriangle,参数为三角形的三条边，返回值为布尔值，是直角三角形为true，否则false  
// 直接三角形判断方法：最大边的长度平方 = 剩余两条边的平方和
// 示例：
// 输入: isRightTriangle(5,3,4)
// 返回：true
// 解释：最大边长度5,5*5 = 3*3+4*4

// 示例：
// 输入: isRightTriangle(3,6,4)
// 返回：false
// 解释：最大边长度6, 6*6=36 不等于 3*3+4*4



 // 方法一
function isRightTriangle(a,b,c){
  var m =  Math.max(a,b,c);
  if(m == a && a*a ==(c*c+b*b)){
     return true;
  }
  if(m == b && b*b==(c*c+a*a)){
    return true;
  }
  if(m ==c &&  c*c==(a*a+b*b)){
    return true;
  }
  return false;

}
console.log(isRightTriangle(3,6,4))



 /**  Math.pow(a,2) // 这个Math.pow是求某个数的几次方  
  *  b*b = a*c +c*c  可以写成 Math.pow(a,2) = Math.pow(b,2)+Math.pow(c,2)
  * 
  */


// 方法二
function isRightTriangle(a,b,c){
   if(a>b&&a>c&&a*a ==(c*c+b*b)){
     return true
   }else if(b>a&&b>c&& b*b==(c*c+a*a)){
     return true
   }else if(c>a&&c>b&&c*c==(a*a+b*b)){
     return true
   }else{
     return false;
   }
}

console.log(isRightTriangle(3,6,5))



// 1.使用javascript 编写代码，在控制台中输出字符串”assdfscfwssseeeztmsa”中出现次数最多的字符，并统计出现的次数（10分）

var str = "assdfscfwssseeeztmsa"
var obj = {}
for (var i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    obj[str[i]]++;
  } else {
    obj[str[i]] = 1;
  }
}

var maxTimes = 0
var alpha = ""
for (var key in obj) {
  if (maxTimes < obj[key]) {
    maxTimes = obj[key]
    alpha = key
  }
}
console.log(`出现次数最多的字母是${alpha},出现的次数是${maxTimes}`)


