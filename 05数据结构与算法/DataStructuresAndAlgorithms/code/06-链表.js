//#region test
// function LinkedList() {

//   // 用来存放元素
//   function Node(element) {
//     this.element = element
//     this.next = null
//   }

//   // 保存链表的长度
//   let length = 0;
//   // 第一个节点的引用
//   let head = null;
//   // 末尾添加元素
//   LinkedList.prototype.append = function (element) {
//     /* 
//       添加元素的时候有两种情况:
//       如果没有添加过元素那么就直接添加
//       如果添加过了元素就让新添加的元素放到链表的最后面
//     */
//     let node = new Node(element)
//     if (head == null) {
//       // 直接添加
//       head = node
//     } else {
//       // 获取第一个节点
//       let current = head;
//       // 从第一个节点开始找,一直找到 next 为null 的节点那就是最后一个节点
//       while (current.next) {
//         // 把下一个节点给到 current 
//         current = current.next
//       }
//       // 现在 current 是最后一个元素,把新添加的元素只想最后一个元素
//       current.next = node
//     }
//     // 添加完毕之后把链表的长度+1
//     length += 1;
//   };
//   // 在特定的位置添加元素
//   LinkedList.prototype.insert = function (position, element) {
//     // 越界检查 传入的 position 必须是大于 0 小于等于 length 的数字
//     if (position >= 0 && position <= length) {
//       let node = new Node(element);
//       let current = head
//       if (position === 0) {
//         // 新添加的元素 指向 原来的第一个元素
//         node.next = current
//         // 然后让头指向新添加的元素
//         head = node
//       } else {
//         // 找到要添加的位置的前一个位置
//         let previous = null
//         let index = 0;
//         // 取得 添加位置的前一个元素 previous 
//         while (index++ < position) {
//           previous = current
//           current = current.next
//         }

//         // 让新添加的元素指向 原来位置的元素; 让要添加的位置的前一个元素指向 新添加的元素 
//         node.next = current;
//         previous.next = node
//         // console.log(index, position)
//       }
//       length += 1
//     } else {
//       console.log("越界了!!!!")
//       return false
//     }

//   };
//   // 从链表的特定位置移除
//   LinkedList.prototype.removeAt = function (position) {
//     if (position < 0 || position >= length) return false

//     let current = head

//     if (position === 0) {
//       head = head.next
//     } else {
//       let index = 0
//       let previous = null
//       while (index++ < position) {
//         previous = current
//         current = current.next
//       }
//       previous.next = current.next
//     }
//     length--
//     return current.element;

//   };
//   // 从链表中移除一项
//   LinkedList.prototype.remove = function (element) {
//     let index = this.indexOf(element)
//     return this.removeAt(index)
//   };
//   // 返回元素在列表的索引,如果没有就返回 -1
//   LinkedList.prototype.indexOf = function (element) {
//     let current = head
//     let index = 0
//     while (index++ < length) {
//       if (current.element === element) {
//         return index - 1
//       }
//       current = current.next
//     }
//     return -1
//   };
//   // 如果链表为空 返回 true
//   LinkedList.prototype.isEmpty = function () {
//     return length === 0
//   };
//   // 返回链表的元素个数
//   LinkedList.prototype.size = function () {
//     return length
//   };
//   // 输出链表
//   LinkedList.prototype.toString = function () {
//     let current = head;
//     let result = ''
//     // 如果链表里面有元素
//     while (current) {
//       result += current.element + "-"
//       current = current.next
//     }
//     return result.slice(0, result.length - 1)
//   };

//   // 翻转链表
//   LinkedList.prototype.reverse = function () {
//     let pre = null;
//     let current = head
//     while (current) {
//       const next = current.next
//       current.next = pre
//       pre = current
//       current = next
//     }
//     return pre
//   }
// }

// let linkedList = new LinkedList();

// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)
// linkedList.insert(0, 4)
// linkedList.insert(1, 55)
// console.log("结果", linkedList.toString()) // 4-55-1-2-3
// console.log("求值 55 的索引", linkedList.indexOf(55)) // 1
// console.log("移除下标 1", linkedList.removeAt(1)) // 1
// console.log("移除元素 2", linkedList.remove(2))
// console.log("结果", linkedList.toString()) // 4-55-1-2-3

// let reverse = linkedList.reverse()
// console.log(reverse) // 3 2 1 55 4
//#endregion


function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;
  LinkedList.prototype.append = function (element) {
    let node = new Node(element)

    if (head === null) { // 如果 head === null 那么列表就是空的所以直接把 node 赋值给 head 就行
      head = node
    } else { // 如果不为空，只需要找到最后的节点将 next 指向 node 就行了
      let current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++ // 记得最后维护 length 的长度
  };
  LinkedList.prototype.insert = function (position, element) {
    let current = head;
    let index = 0;
    let prev = null;
    let node = new Node(element)
    // 判断传入的索引位置是否非法  切记索引从 0 开始
    if (position < 0 || position > length - 1) {
      throw "请传入合法的索引值"
    } else {
      // 1. 插入在头部直接将新节点的 next 指向第一个节点，然后将 head 指向 node，这样就完成了元素的添加
      // 2. 插入在其他位置，找到要插入的位置，将插入位置的前一个节点指向新节点，将新节点指向原位置的节点
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          prev = current
          current = current.next
        }
        node.next = current
        prev.next = node
      }
      length++;
    }
  };
  LinkedList.prototype.removeAt = function (position) {
    let current = head;
    let index = 0;
    let prev = null
    // 判断传入的索引位置是否非法  切记索引从 0 开始
    if (position < 0 || position > length - 1) {
      throw "请传入合法的索引值"
    } else {
      // 合法的值有两种情况
      // 如果移除的是第一个元素 直接让 head = head.next就行
      // 如果移除的其他元素需要将 移除位置节点的前一个节点的 next 指向移除位置节点的 next
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          prev = current.next // 获得当前索引的前一个节点
          current = current.next // 获得当前索引位置的节点
        }
        prev.next = current.next // 把前一个节点的 next 指向 当前节点的下一个
      }
      length--;
      return current.element
    }
  };
  LinkedList.prototype.remove = function (element) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        this.removeAt(index)
      }
      current = current.next
      index++
    }
  };
  LinkedList.prototype.indexOf = function (element) {
    let current = head;
    let index = 0
    while (current) {
      if (current.element === element) {
        return index; // 找到了就返回索引
      }
      // 直到 current
      current = current.next
      index++;
    }
    return -1; // 不存在返回 -1
  };
  LinkedList.prototype.isEmpty = function () {
    return length === 0
  };
  LinkedList.prototype.size = function () {
    return length
  };
  LinkedList.prototype.toString = function () {
    console.log(head, "长度", length)
    let str = "" //用来拼接字符串
    let current = head // 保存第一个元素
    while (current) { // 如果存在元素那么就开始拼接
      str += current.element + " "
      current = current.next
    }
    return str
  };
}

let linkedList = new LinkedList();
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.append(40)
linkedList.removeAt(0)
linkedList.insert(0, 666)
linkedList.insert(1, 777)
let a = linkedList.indexOf(30)
console.log(a)
linkedList.remove(666)
let result = linkedList.toString()
console.log(result)