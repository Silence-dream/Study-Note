function push(arr, element) {
  let newArr = new Array(arr.length + 1);
  newArr[arr.length + 1] = element;
  // 移动元素
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr
}

let arr = new Array(3).fill(0);

console.log(push(arr, 1));