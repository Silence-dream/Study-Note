interface node<T> {
  node: node<T> | null;
  next: T | null;
}

class LinkedList<T> {
  // 链表头部
  private head: node<T> | null;
  // 链表长度
  private size: number;
  // 链表尾部
  private tail: node<T> | null;
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  addFirst(item: T) {
    let node = new Node(item);
    if (this.head == null) {
      this.head = node;
    }
  }
}

class Node<T> implements node<T> {
  node: node<T> | null;
  next: T | null;

  constructor(data: node<T>) {
    this.node = data;
    this.next = null;
  }
}

let linkedList = new LinkedList();
linkedList.addFirst(1);
console.log(linkedList);

export {};
