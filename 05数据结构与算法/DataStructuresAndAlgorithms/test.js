// 时间复杂度 O(n^2) 太高了 70866 116922
var lastRemaining = function (n, m) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }

  while (arr.length > 1) {
    for (let i = 0; i < m - 1; i++) {
      arr.push(arr.shift())
    }
    arr.shift()
  }
  return arr.join()
};

let result = lastRemaining(70866, 116922)
console.log(result)
// 输入: n = 5, m = 3
// 输出: 3
// 70866
// 116922


/* 
var lastRemaining = function(n, m) {
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
  }
  return pos;
};
*/
