function PriorityQueue() {
  // 用来存储优先级队列的数组
  this.items = []
  // 封装一个类来存储优先级和元素
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  // 入列
  PriorityQueue.prototype.enqueue = function (element, priority) {
    const queueElement = new QueueElement(element, priority)

    //#region 思考
    // 思考:如果第一次入列,那么因为里面是空的所以不用判断优先级所以我们可以直接放入
    // 如果不是第一次入列,那么我们需要判断优先级,将优先级大的放到优先级小的前面(数字小的放到数字大的前面)
    // 我们规定数字越小优先级越高  1的优先级就大于2的优先级
    //#endregion
    // 1.判断是否为空
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      // 6. 完成 5 之后发现如果添加的元素优先级数字全部大于 items 里面的元素那么就可以直接添加
      let apped = false

      // 2.判断优先级
      for (let i = 0; i < this.items.length; i++) {
        // 3.添加优先级数字小的到优先级数字大的前面
        if (queueElement.priority < this.items[i].priority) {
          // 4.splice 在 i 的下标处删除 0 个元素, 添加 queueElement 元素 -> 在 i 的位置之前添加元素
          this.items.splice(i, 0, queueElement)
          // 7.发现没有一个元素的优先级数字是小于 items 里面的元素设置 apped = true
          apped = true;
          // 5. 添加完成之后剩下的循环就没有必要执行了
          break;
        }
      }
      // 8.那么就以为这该元素可以直接添加到 items 的末尾
      if (!apped) {
        this.items.push(queueElement)
      }
    }
  }


  // 其他方法从队列的实现中复制过来

  // 出列
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 返回第一个元素
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }
  // 判断是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.size() === 0
  }
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  }
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue("A", 5)
priorityQueue.enqueue("B", 1)
priorityQueue.enqueue("C", 2)


console.log(priorityQueue.items)