# 选择题

1. 下面关于获取表单的value值正确的写法是（C）
```html
 <input type="text" value="我是表单">
```
 A、document.querySelector('input').innerText

 B、document.querySelector('input').innerHTML

 C、document.querySelector('input').value

 D、document.querySelector('input').style.innerText

2. 在JavaScript中，下面关于表单的事件说法错误的是(C )

 A、onfocus是当获取到焦点时触发

 B、onblur是当表单失去焦点时触发

 C、onclick这个事件，表单元素是不具备的

 D、oninput是当用户在表单中输入值时触发


3. 要完成禁用按钮效果，补充1.处代码（B）

```js
<button id="btn">禁用文本框</button>

<input type="text" id="txt" value="你好">

<script>
var oBtn = document.getElementById('btn');

var oTxt = document.getElementById('txt');

oBtn.onclick = function () {

1.补充代码

}

</script>
```

A、oTxt.disabled = “”
B、oTxt.disabled = true	 
C、oTxt.disabled = disabled 
D、oTxt.disabled = false

4. 下面对于JavaScript中的复选框(checkbox)的说法不正确的是：(A)

A、如果需将一个复选框选中，可以将复选框的selected属性设为true

B、如果需将一个复选框选中，可以将复选框的checked属性设为true

C、如果需将一个复选框选中，可以将复选框的checked属性设为"true"

D、如果需将一个复选框选中，可以将复选框的checked属性设为checked


5. 	在JavaScript中，下面代码表示获取到文本框的值，则下列选项中验证文本框为空的条件表达式不正确的是 (  C )
```js
var usrName = document.getElementById("txtName").value;
```

A、usrName ==""

B、usrName.length<=0

C、usrName=""

D、usrName.length==0


# 简答题

第1题. 操作表单元素常用属性有哪些，分别说明作用是什么？
```js
value 		//显示的内容
type		//显示的类型
checked		//是否被选中
selected	//默认选中
disabled	//禁用
```
第2题. 操作元素显示和隐藏的方式有哪些?
```js
1.visibility    visible显示 hidden隐藏
2.display		block显示		none隐藏
```



# 编程题

需求1. 实现隔行变色的效果(效果在附件):
- 页面中有一个按钮和一个ul,ul里面有10个li元素
- 点击按钮，实现10个li的隔行变色效果，奇数行是红色，偶数行是黄色
- 鼠标经过li元素上面，当前的这个li就是绿色，鼠标离开这个li，这个li显示原来的颜色

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // 需求1.实现隔行变色的效果(效果在附件):

        //     -页面中有一个按钮和一个ul, ul里面有10个li元素 -
        //     点击按钮， 实现10个li的隔行变色效果， 奇数行是红色， 偶数行是黄色 -
        //     鼠标经过li元素上面， 当前的这个li就是绿色， 鼠标离开这个li， 这个li显示原来的颜色
    </script>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
    <button>按钮</button>
    <script>
        const lis = document.querySelector('ul').children;
        const btn = document.querySelector('button');
        let flag = true;
        btn.addEventListener("click", function () {
            console.log(flag)
            if (flag) {
                for (let i = 0; i < lis.length; i++) {
                    function green() {
                        lis[i].style.background = "green"
                    }

                    function red() {
                        if (i % 2 == 1) {
                            lis[i].style.background = "red";
                        } else {
                            lis[i].style.background = "yellow"
                        }
                    }
                    if (i % 2 == 1) {
                        lis[i].style.background = "red";
                    } else {
                        lis[i].style.background = "yellow"
                    }
                    lis[i].onmouseover = function () {
                        lis[i].style.background = "green"
                    }
                    lis[i].onmouseout = function () {
                        if (i % 2 == 1) {
                            lis[i].style.background = "red";
                        } else {
                            lis[i].style.background = "yellow"
                        }
                    }
                }
                flag = false;
                console.log(false);

            } else {
                for (let i = 0; i < lis.length; i++) {
                    lis[i].style.background = "#fff";
                }
                for (let i = 0; i < lis.length; i++) {
                    lis[i].onmouseover = null;
                    lis[i].onmouseout = null;
                }
                flag = true;
                console.log(flag);
            }
        })
    </script>
</body>

</html>
~~~



需求2. 简单js表单校验效果(素材和效果在附件里面)：布局和功能都需要自己完成
- 具体需求请看word里面。

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
        }



        span {
            color: #b3b3b3;
            font-size: 12px;
            /* background: url(./img/error.png) no-repeat; */
            padding-left: 16px;
        }

        /* 输入正确的样式 */
        .inputDui {
            border: 1px solid green;
        }

        .spanDui {
            color: green;
        }

        /* 输入错误的样式 */
        .inputCuo {
            border: 1px solid red;
        }

        .spanCuo {
            color: red;
        }
    </style>
</head>

<body>
    <label for="grade">
        您的成绩: <input type="text" id="grade" placeholder="请输入分数">
        <span>请输入您的成绩</span>
    </label>
    <script>
        const input = document.querySelector('#grade');
        const span = document.querySelector('span');
        console.log(input);

        input.addEventListener("blur", function () {
            let num = Number(input.value);
            let n = isNaN(num);
            console.log(num);
            console.log(isNaN(n));
            // 未点击效果和输入为空效果
            if (input.value.length == 0 || n == true) {
                // input.style.borderWidth = "1px";
                // input.style.borderStyle = "solid";
                // input.style.borderColor = "red";
                // span.style.background = "url(./img/error.png) no-repeat";
                // span.style.color = "red";
                input.className = "inputCuo";
                span.className = "spanCuo";
                span.innerHTML = "请您输入数字";
            } else {
                // input.style = null;
                // span.style = null;
                // 满足数字的范围效果
                if (num > 100) {
                    // input.style.borderWidth = "1px";
                    // input.style.borderStyle = "solid";
                    // input.style.borderColor = "red";
                    // span.style.background = "url(./img/error.png) no-repeat";
                    input.className = "inputCuo";
                    span.className = "spanCuo";
                    span.innerHTML = "成绩不能超出100";
                } else if (num < 0) {
                    // input.style.borderWidth = "1px";
                    // input.style.borderStyle = "solid";
                    // input.style.borderColor = "red";
                    // span.style.background = "url(./img/error.png) no-repeat";
                    input.className = "inputCuo";
                    span.className = "spanCuo";
                    span.innerHTML = "成绩不能小于0";
                } else if (num >= 0 && num <= 100) {
                    // input.style.borderWidth = "1px";
                    // input.style.borderStyle = "solid";
                    // input.style.borderColor = "green";
                    // span.style.background = "url(./img/right.png) no-repeat";
                    // span.style.color = "green";
                    input.className = "inputDui";
                    span.className = "spanDui";
                    span.innerHTML = "输入成绩正确";
                }
            }

        })
    </script>
</body>

</html>
~~~

