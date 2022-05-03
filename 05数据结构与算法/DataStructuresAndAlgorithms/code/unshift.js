function unshift(arr, element) {
  let newArr = new Array(arr.length + 1);
  newArr[0] = element;
  // 移动元素
  for (let i = 0; i < arr.length; i++) {
    newArr[i+1]=arr[i];
  }
  return newArr
}

let arr = new Array(3).fill(0);

console.log(unshift(arr, 1));
