function Queue() {
  this.items = []
  // 入列
  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }
  // 出列
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 返回第一个元素
  Queue.prototype.front = function () {
    return this.items[0]
  }
  // 判断是否为空
  Queue.prototype.isEmpty = function () {
    return this.size() === 0
  }
  Queue.prototype.size = function () {
    return this.items.length;
  }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3) // [1,2,3]

// 出列
queue.dequeue() // [2,3]

let first = queue.front()
console.log(first) // 2

let isEmpty = queue.isEmpty()
console.log(isEmpty) //false
console.log(queue.items) // [2.3]


function passGame(nameList, num) {
  let queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])

  }

  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  return `下标${nameList.indexOf(queue.front())}, 名字${queue.front()}`
}


function ysf(arr, num) {
  /*
    第一轮 A B C D
    第二轮 C D A
    第三轮 A C
    第四轮 A
  逆推导
    最后一轮剩下的元素的下标肯定是0,那么在倒数第二轮中它的下标为

    (此轮过后的 num 下标 + 数到几淘汰的数) % 上轮元素个数 = 上轮 num 的下标
    
   */
  let pos = arr.length
  // 倒数第二轮肯是有两个元素的所以 i 从 2 开始
  for (let i = 2; i <= num; i++) {
    pos = (pos + num) % i
  }
  return pos
}
console.log(passGame(["A", "B", "C", "D"], 2))
console.log(ysf(["A", "B", "C", "D"], 2))