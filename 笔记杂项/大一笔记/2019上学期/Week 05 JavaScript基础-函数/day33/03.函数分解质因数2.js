// .写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5

// 写一个函数，判单一个数是否是素数，并返回结果true或者是fasle(除了1和本身的数叫做素数)
 function isSuShu(num) {
   // 给一个判断素数的标识
   var flag = false;
   for (var i = 2; i < num; i++) {
     if (num % i == 0) {
       // 如果能被整除说明不是素数，就把flag置为false
       flag = true
     }
   }
   if (flag) {
     return true
   } else {
     return false
   }
 }
 // console.log(isSuShu(9))//测试是否正确输出

 // 写一个函数，将一个正整数分解质因子，例如:输入90,打印出90= 2*3*3*5
 function apartShu(num) {
   var str = ""
   var num1 = num // 记录一开始num的值
   var arr = []
   for (var i = 2; i < num; i++) {
     for (var j = 2; j <= i; j++) {
       if (num % j == 0 && !isSuShu(j)) {
         var s = num / j;
         if (!isSuShu(s)) {
           // 判断s是否是素数
           arr.push(s)
         }
         arr.push(j)
         // 在这里将商赋值给num
         num = s;
       }
     }

   }
   // console.log(arr)
   // 将数组由小到大排列起来
   arr.sort()
   var str = ""
   for (var k = 0; k < arr.length; k++) {
     str += arr[k] + "*"
   }
   console.log(num1 + '=' + str.slice(0, -1))

 }
 //调用函数
 apartShu(20)


//方法二
function prime(maxValue) {
    var minPrime = 2;
    var primes = [minPrime];
    for (var i = 3; i <= maxValue; i++) {
        var isPrime = true;
        for (var p = 0; p < primes.length; p++) {
            if (i % primes[p] == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    } return primes;
}
function decomposition(v) {
    var results = [];
    var primes = prime(v);
    var tmp = v;
    for (var i = 0; i < primes.length; i++) {
        if (tmp == primes[i]) {
            results.push(primes[i]);
            break;
        }
        while (tmp % primes[i] == 0) {
            tmp /= primes[i];
            results.push(primes[i]);
        }
    }
    if (results.length == 1) {
        results = [];
        results.push(1);
        results.push(v);
    }
    return results;
}
console.log(decomposition(20))



//3.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5
function fenJie(num) {
      var x = num
      var arr = []
      //循环求素数i
      for (var i = 2; i <= num; i++) {
        var result = true
        for (var j = 2; j < i; j++) {
          if (i % j == 0) {
            result = false;
            break;
          }
        }
        if (result) {
          arr.push(i)
        }
      }
      console.log(arr);
      //求质因数
      //定义一个满足的质因数的储存数组
      var str = []
      while (num != 1) {
        for (var k = 0; k < arr.length; k++) {
          if (num % arr[k] == 0) {
            num /= arr[k];
            str.push(arr[k]);
            break;
          }
        }
      }
      return (x + '=' + str.join('*'));
    }
    console.log(fenJie(55));