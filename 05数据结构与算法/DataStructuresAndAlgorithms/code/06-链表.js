function LinkedList() {

  // 用来存放元素
  function Node(element) {
    this.element = element
    this.next = null
  }

  // 保存链表的长度
  let length = 0;
  // 第一个节点的引用
  let head = null;
  // 末尾添加元素
  LinkedList.prototype.append = function (element) {
    /* 
      添加元素的时候有两种情况:
      如果没有添加过元素那么就直接添加
      如果添加过了元素就让新添加的元素放到链表的最后面
    */
    let node = new Node(element)
    if (head == null) {
      // 直接添加
      head = node
    } else {
      // 获取第一个节点
      let current = head;
      // 从第一个节点开始找,一直找到 next 为null 的节点那就是最后一个节点
      while (current.next) {
        // 把下一个节点给到 current 
        current = current.next
      }
      // 现在 current 是最后一个元素,把新添加的元素只想最后一个元素
      current.next = node
    }
    // 添加完毕之后把链表的长度+1
    length += 1;
  };
  // 在特定的位置添加元素
  LinkedList.prototype.insert = function (position, element) {
    // 越界检查 传入的 position 必须是大于 0 小于等于 length 的数字
    if (position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head
      if (position === 0) {
        // 新添加的元素 指向 原来的第一个元素
        node.next = current
        // 然后让头指向新添加的元素
        head = node
      } else {
        // 找到要添加的位置的前一个位置
        let previous = null
        let index = 0;
        // 取得 添加位置的前一个元素 previous 
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 让新添加的元素指向 原来位置的元素; 让要添加的位置的前一个元素指向 新添加的元素 
        node.next = current;
        previous.next = node
        // console.log(index, position)
      }
      length += 1
    } else {
      console.log("越界了!!!!")
      return false
    }

  };
  // 从链表的特定位置移除
  LinkedList.prototype.removeAt = function (position) {};
  // 从链表中移除一项
  LinkedList.prototype.remove = function (element) {};
  // 返回元素在列表的索引,如果没有就返回 -1
  LinkedList.prototype.indexOf = function (element) {};
  // 如果链表为空 返回 true
  LinkedList.prototype.isEmpty = function () {};
  // 返回链表的元素个数
  LinkedList.prototype.size = function () {};
  // 输出链表
  LinkedList.prototype.toString = function () {
    let current = head;
    let result = ''
    // 如果链表里面有元素
    while (current) {
      result += current.element + "-"
      current = current.next
    }
    return result.slice(0, result.length - 1)
  };

  // 翻转链表
  LinkedList.prototype.reverse = function () {
    let pre = null;
    let current = head
    while (current) {
      const next = current.next
      current.next = pre
      pre = current
      current = next
    }
    return pre
  }
}

let linkedList = new LinkedList();

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.insert(0, 4)
linkedList.insert(1, 55)
console.log(linkedList.toString())

let reverse = linkedList.reverse()
console.log(reverse) // 3 2 1 55 4