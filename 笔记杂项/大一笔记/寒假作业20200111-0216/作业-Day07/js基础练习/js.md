## js简答题

 1. 网页的三种弹出框分别是什么？作用分别是什么？
- alert()警示框
- confirm()确认框
- prompt()提示框

 2. 用户输入框，获取到值的数据类型是什么？

- String


## js编程题
1. 打开网页时弹出：全栈牛逼！！！(只有确定键)

    ```html
    <srcipt>
        alert("全栈牛逼！！！");
    </srcipt>
    ```

2. 让用户可以在网页输入年龄

    ```html
    <script>
        prompt("请输入年龄");
    </script>
    ```

3. 打开网页弹出：您打开了一个网页，是否继续？（有确定键和取消键）

    ```html
    <script>
        confirm();
    </script>
    ```

4. 让用户输入一个数字，实现判断该数字是小数还是整数并告诉用户

    ```js
            var num = +prompt("请输入数字");
            var verdict = parseInt(num);
            if (num == verdict) {
                alert(num + "是整数");
            } else {
                alert(num + "是小数");
            }
    ```




 
