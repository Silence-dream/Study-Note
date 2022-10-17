// 链表    1-->2-->3-->4-->null
// 翻转后  4-->3-->2-->1-->null


/* 
  第一次翻转   定义 current = head  prev = null  next = null

  null<--1  2-->3-->4

  步骤:
    next = current.next  // 暂存 2-->3-->4
    current.next = prev  // 把 1 指向 null

    prev = current    // 保存 1
    current = next    // 保存 2-->3-->4


  第二次翻转

  null<--1<--2   3-->4

  步骤:
    next = current.next // 暂存 3-->4
    current.next = prev // 把 
*/