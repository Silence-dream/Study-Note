---
tags : 
- JavaScript
---



```js
call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。
他们俩之间的差别在于参数的区别，call和apply的第一个参数都是要改变上下文的对象，
而call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

1、判断变量类型：
 <script>

    let arr1 = [1, 2, 3];
    let str1 = 'string';
    let obj1 = { name: 'thomas' };
    function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }
    console.log(fn1(arr1)); // true // 判断类型的方式，这个最常用语判断array和object，null(因为typeof null等于object)
    console.log(Object.prototype.toString.call(arr1)); // [object Array]
    console.log(Object.prototype.toString.call(str1)); // [object String]
    console.log(Object.prototype.toString.call(obj1)); // [object Object]
    console.log(Object.prototype.toString.call(null)); // [object Null]
  </script>
  2、利用call和apply做继承
    function Animal(name){
      this.name = name;
      this.showName = function(){
          console.log(this.name);
      }
  }

  function Cat(name){
      Animal.call(this, name);
  }

  // Animal.call(this) 的意思就是使用this对象代替Animal对象，那么
  // Cat中不就有Animal的所有属性和方法了吗，Cat对象就能够直接调用Animal的方法以及属性了
  var cat = new Cat("TONY");
  cat.showName();   //TONY

```