---
tags : 
- 拖拽
---

##  document.elementFromPoint 
 使用 `document.elementFromPoint` 检测鼠标指针下的 “droppable” 的元素。

#### 拖拽事件

| 事件        | 事件处理程序  | 事件主体 | 触发时机                                  |
| ----------- | ------------- | -------- | ----------------------------------------- |
| `dragstart` | `ondragstart` | 源元素   | 当源元素开始被拖拽。                      |
| `drag`      | `ondrag`      | 源元素   | 当源元素被拖拽（持续触发）。              |
| `dragend`   | `ondragend`   | 源元素   | 当源元素拖拽结束（鼠标释放或按下`esc`键） |
| `dragenter` | `ondragenter` | 目标元素 | 当被拖拽元素进入该元素。                  |
| `dragover`  | `ondragover`  | 目标元素 | 当被拖拽元素停留在该元素（持续触发）。    |
| `dragleave` | `ondragleave` | 目标元素 | 当被拖拽元素离开该元素。                  |
| `drop`      | `ondrop`      | 目标元素 | 当拖拽事件在合法的目标元素上释放。        |
对于被拖拽元素，事件触发顺序是 **dragstart**->**drag**->**dragend**；对于目标元素，事件触发的顺序是 **dragenter**->**dragover**->**drop/dropleave**。









## 参考
[鼠标拖放事件](https://zh.javascript.info/mouse-drag-and-drop#tuo-fang-suan-fa)
[【React】从零实现基于React框架的组件拖拽功能_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV14t4y1u7Pr/?spm_id_from=..search-card.all.click&vd_source=f98b43858b5992ffd82a2a5cf18fe873)
[看完就懂的前端拖拽那些事 - 掘金](https://juejin.cn/post/7075918201359433758)