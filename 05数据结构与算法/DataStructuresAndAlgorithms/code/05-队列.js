function Queue() {
  this.items = []
  // 入列
  Queue.prototype.enqueue = function (element) {
    // this.items[this.size()] = element
    this.items.push(element)
  }
  // 出列
  Queue.prototype.dequeue = function () {
    return this.items.shift()
    // let newArr = [];
    // for (let i = 1; i < this.items.length; i++) {
    //   newArr.push(this.items[i])
    // }
    // this.items.length--;
    // this.items = newArr;
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

  return queue.front();
}

console.log(passGame(["lily","lucy","tom","lilei","why"],3))