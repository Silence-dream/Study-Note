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

// console.log("5. 利用对象的属性不能相同的特点进行去重", objArr(arr))  //两个true直接去掉了，NaN和{}去重


/**6. 利用includes
 * 
 * @param {Array} arr 
 */
function includesArr(arr) {
  let brr = []
  for (let i = 0; i < array.length; i++) {
    if (!brr.includes(arr[i])) {
      brr.push(arr[i])
    }
  }
  return brr;
}

// console.log("6. 利用includes",indexOfArr(arr))

/**7.利用 hasOwnProperty
 * 
 * @param {Array} arr 
 */
function hasOwnPropertyArr(arr) {
  let obj = {}
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })

}

// console.log("7.利用 hasOwnProperty", hasOwnPropertyArr(arr))  // //所有的都去重了

/**8.利用filter
 * 
 * @param {Array} arr 
 */
function filterArr(arr) {
  return arr.filter(function(item, index) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

console.log(filterArr(arr))