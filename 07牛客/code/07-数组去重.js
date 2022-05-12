// 1 new Set

var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

function fnArr(arr) {
  return [...new Set(arr)];
}

let rfnArr = fnArr(arr); // 这种方式无法去掉 {}
// console.log("new Set去重", rfnArr);

/**2 splice 去重
 *
 * @param {Array} arr
 * @returns {Array}
 */
function spliceArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i + 1); j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
// console.log("splice 去重", spliceArr(arr)) // 这种无法去掉 NaN {}  而 null 直接没了

/** 3.indexOf 去重
 *
 * @param {Array} arr
 * @returns {Array}
 */
function indexOfArr(arr) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// console.log("indexOf去重", indexOfArr(arr)) // 无法去掉 NaN {} 

/**4. 利用sort()
 * 
 * @param {Array} arr 
 */
function sortArr(arr) {
  arr = arr.sort();
  let newArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
// console.log('4. 利用sort()去重', sortArr(arr))

/**5. 利用对象的属性不能相同的特点进行去重
 * 
 * @param {Array} array 
 * @returns {Array}
 */

function objArr(array) {
  let obj = {}

  let newArr = []

  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      newArr.push(array[i])
      obj[array[i]] = 1
    } else {
      obj[array[i]]++
    }
  }
  console.log(obj)
  return newArr
}

console.log("5. 利用对象的属性不能相同的特点进行去重", objArr(arr))