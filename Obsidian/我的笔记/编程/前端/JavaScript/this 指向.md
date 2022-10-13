---
tags : 
- JavaScript
---

普通函数中的this

谁调用了函数或者方法，那么这个函数或者对象中的this就指向谁

```js
let getThis = function () {
    console.log(this);
}

let obj={
    name:"Jack",
    getThis:function(){
        console.log(this);
    }
}
//getThis()方法是由window在全局作用域中调用的，所以this指向调用该方法的对象，即window
getThis();//window
//此处的getThis()方法是obj这个对象调用的，所以this指向obj
obj.getThis();//obj
```

匿名函数中的this：匿名函数的执行具有全局性，则匿名函数中的this指向是window，而不是调用该匿名函数的对象；

```js
let obj = {
    getThis: function () {
        return function () {
            console.log(this);
        }
    }
}
obj.getThis()(); //window
```

箭头函数中的this

1. 箭头函数中的this是在函数定义的时候就确定下来的，而不是在函数调用的时候确定的；
2. 箭头函数中的this指向父级作用域的执行上下文；（技巧：**因为javascript中除了全局作用域，其他作用域都是由函数创建出来的，所以如果想确定this的指向，则找到离箭头函数最近的function，与该function平级的执行上下文中的this即是箭头函数中的this**）
3. 箭头函数无法使用apply、call和bind方法改变this指向，因为其this值在函数定义的时候就被确定下来。