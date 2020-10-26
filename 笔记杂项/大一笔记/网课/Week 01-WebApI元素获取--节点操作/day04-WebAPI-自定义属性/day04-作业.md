

# 选择题

1. 下列关于传统自定义属性的操作说法错误的是(B)

   A、元素.setAttribute("属性名","值")无返回值，可以实现给元素添加自定义属性

   B、元素.removeAttribute("属性名")会将自定义属性删除

   C、元素.getAttribute("属性名")的返回值是自定义属性的值

   D、元素.setAttribute("属性名","值")只可以实现自定义属性的添加，不能实现自定义属性的修改

2. 关于属性值的获取或设置说法错误的是(A)

    A、 document.getElementById(id).属性=新值

    B、 document.getAttribute(‘属性名’)

    C、 setAttribute()不允许对属性节点值做修改

    D、 document.setAttribute(‘属性名’,'值')

3. 下列通过H5自定义属性获取`my-index`的值正确的写法是(D)
```html
 <div id="dv" data-my-index = "1">我是盒子</div>
 <script>
     var dvObj = document.querySelector('div')

 </script>
```
   A、dvObj.dataset.my-index

   B、dvObj.dataset["my-index"]

   C、dvObj.dataset[myIndex]

   D、dvObj.dataset.myIndex


4. 下列通过H5自定义属性说法不正确的是(A)

  A、元素.dataset.自定义属性名= "值"只能给元素添加一个自定义属性，不能修改自定义属性

  B、delete 元素.dataset.自定义属性名是将对应的自定义属性删除

  C、元素.dataset可以获取某个标签上面的所有自定义属性，返回值是一个对象

  D、元素.dataset.自定义属性，在获取自定义属性的时候需要采用驼峰命名法获取

5. 补充代码，当失去焦点清空input中的value值（B）
```html
  <input type="text" id="search" value="在Google中搜索，或输入网址">
    <script>
    var oInput = document.querySelector('#search');
    oInput.onfocus = function() {
    1.补充代码
    }
    oInput.onblur = function() {
    if (this.value.length == 0) {
    this.value = "在Google中搜索，或输入网址";
    }
    }
    </script>
```

A、 value = "";	 

B、 this.value = "";	 
C、 this.value == "";	 
D、 value =="";	

# 简答题

第1题. 请简述一下排他思想的核心？
```js
干掉别人，留下自己
```
第2题. 请简述传统自定义属性的相关操作(增加、删除、修改、获取)？
```js
//添加
element.className = "className";
//删除
element.classList.remove('要删除的类的名字')
//修改
element.className = "className";
//获取
element.attribute
```
第3题. 请简述H5自定义属性的语法，和相关的操作(增加、删除、修改、获取)？
```js
//添加
element.dataset.自定义属性的名字="值";
//删除
delete 元素.dataset.自定义属性的名字;
//修改
element.dataset.自定义属性的名字="值";
//获取
element.getAttribute("自定义属性的名字");
```


# 编程题

需求1. 突出显示效果实现(素材在附件中):
-  布局和功能都需要自己完成
-  当鼠标移入对应的小方格图片上面，当前的图片高亮显示，其余的图片变暗
-  当鼠标离开整个大方格内，所有的图片都变亮

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: #000000;
        }

        .box {
            width: 622px;
            margin: 100px auto;
            border: 1px solid #fff;
            padding: 10px;

        }

        img {
            margin: 2px;
            opacity: 1;

        }

        .ming {
            opacity: 1;
        }

        .hui {
            opacity: 0.5;
        }
    </style>
</head>

<body>
    <div class="box">
        <img src="./images/01.jpg" alt="">
        <img src="./images/02.jpg" alt="">
        <img src="./images/03.jpg" alt="">
        <img src="./images/04.jpg" alt="">
        <img src="./images/05.jpg" alt="">
        <img src="./images/06.jpg" alt="">
    </div>
    <script>
        const imgs = document.querySelectorAll('img');
        const box = document.querySelector('.box');


        // 鼠标移入全部变灰
        box.addEventListener("mouseover", () => {
            for (let i = 0; i < imgs.length; i++) {
                // imgs[i].classList.add("hui");
                imgs[i].className = "hui"
            }
        })
        // 鼠标移出全部变亮
        box.addEventListener("mouseout", () => {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].className = "ming"
            }
        })

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener("mouseenter", function () {
                imgs[i].className = "ming"
                console.log(i);
            })
        }
    </script>
</body>

</html>
~~~



需求2. 全选、反选、取消全选效果实现(素材在案例中):
- 布局已经给了，直接完成功能就可以
- 勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
- 点击全选按钮，列表中的选项都被选中
- 点击取消全选按钮，列表中的选项都被取消选中
- 点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）
- 点击列表中的复选框(备注：中间那四个复选框)，当列表中的复选框全部选中，上面的全选复选框也选中，反之不选中

~~~html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Untitled Document</title>


  <style type="text/css">
    .one {
      background-color: #9bf7d5;
    }

    .two {
      background-color: #f3e99a;
    }

    .over {
      background-color: #ef7125;
    }

    table {
      border: #249bdb 1px solid;
      width: 500px;
      border-collapse: collapse;
    }

    table td {
      border: #249bdb 1px solid;
      padding: 10px;
    }

    table th {
      border: #249bdb 1px solid;
      padding: 10px;
      background-color: rgb(200, 200, 200);
    }
  </style>
</head>

<body>

  <table id="mailtable">
    <tr>
      <th>
        <input type="checkbox" name="all" />全选
      </th>
      <th>
        发件人
      </th>
      <th>
        邮件名称
      </th>
      <th>
        邮件附属信息
      </th>
    </tr>

    <tr class="one">
      <td>
        <input type="checkbox" name="mail" class="list-btn" />
      </td>
      <td>
        张三11
      </td>
      <td>
        我是邮件11
      </td>
      <td>
        我是附属信息11
      </td>
    </tr>
    <tr class="two">
      <td>
        <input type="checkbox" name="mail" class="list-btn" />
      </td>
      <td>
        张三22
      </td>
      <td>
        我是邮件22
      </td>
      <td>
        我是附属信息22
      </td>
    </tr>
    <tr class="one">
      <td>
        <input type="checkbox" name="mail" class="list-btn" />
      </td>
      <td>
        张三33
      </td>
      <td>
        我是邮件33
      </td>
      <td>
        我是附属信息33
      </td>
    </tr>
    <tr class="two">
      <td>
        <input type="checkbox" name="mail" class="list-btn" />
      </td>
      <td>
        张三44
      </td>
      <td>
        我是邮件44
      </td>
      <td>
        我是附属信息44
      </td>
    </tr>

    <tr>
      <th>

      </th>
      <th colspan="3">
        <input type="button" value="全选" class="btn" />
        <input type="button" value="取消全选" class="btn" />
        <input type="button" value="反选" class="btn" />

      </th>
    </tr>
  </table>
  <script>
    // 1.勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
    // 2.点击全选按钮，列表中的选项都被选中
    // 3.点击取消全选按钮，列表中的选项都被取消选中
    // 4.点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）


    // 获取顶部全选
    const top_all = document.querySelector('#mailtable').children[0].children[0].children[0].children[0];
    // console.log(top_all);
    // 列表里面的复选框
    const list_btn = document.querySelectorAll('.list-btn');
    console.log(list_btn);



    // 获取全选按钮
    const all_btn = document.querySelectorAll('.btn')[0];
    // 获取取消全选按钮
    const deselect_btn = document.querySelectorAll('.btn')[1];
    // 获取反选按钮
    const none_btn = document.querySelectorAll('.btn')[2];
    // console.log(all_btn);
    // console.log(deselect_btn);
    // console.log(none_btn);

    // 全选
    all_btn.addEventListener("click", function () {
      top_all.checked = true;
      for (let i = 0; i < list_btn.length; i++) {
        list_btn[i].checked = true;
      }
    })
    // 取消全选
    deselect_btn.addEventListener("click", function () {
      top_all.checked = false;
      for (let i = 0; i < list_btn.length; i++) {
        list_btn[i].checked = false;
      }
    })
    //反选
    let flag = true;
    none_btn.addEventListener("click", function () {
      if (top_all.checked == true) {
        top_all.checked = false;
      } else {
        top_all.checked = true;
      }
      for (let i = 0; i < list_btn.length; i++) {
        if (list_btn[i].checked == true) {
          list_btn[i].checked = false;

        } else {
          list_btn[i].checked = true;
        }
      }
    })


    // 如果下面的复选框全部选中顶部复选框就被选中
    let count = 0;
    for (let i = 0; i < list_btn.length; i++) {
      list_btn[i].addEventListener("click", function () {
        // let flag = true
        if (list_btn[i].checked == true) {
          count++;
          // console.log(1);
        } else {
          count--;
        }
        if (count == list_btn.length) {
          top_all.checked = true;
        } else {
          top_all.checked = false;
        }
      })
    }



    // 如果顶部全选按钮被选中下面的都被选中
    top_all.addEventListener("click", function () {
      console.log(top_all.checked);
      if (top_all.checked == true) {
        console.log(1);

        for (let i = 0; i < list_btn.length; i++) {
          list_btn[i].checked = true;
        }
        // list_btn[0].checked = true;
      } else {
        for (let i = 0; i < list_btn.length; i++) {
          list_btn[i].checked = false;
        }
      }
    })
  </script>
</body>

</html>
~~~



