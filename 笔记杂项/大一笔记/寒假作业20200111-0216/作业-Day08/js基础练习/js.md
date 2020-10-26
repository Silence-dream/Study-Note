## js简答题
1. 什么是单向分支、双向分支和多向分支？
- if判断语句 if(条件表达式){ }
- if(条件表达式){ 	}else{	}
- if(条件表达式){	}else if(条件表达式){	}else if(	){条件表达式}...else{	}
2. 三元运算符简化的是什么？简化后是什么？
- 简化判断语句

-  (表达式1)?(表达式2):(表达式3)
3. switch中的关键字有哪些？
-  case 
-  break 
-  default
4. switch中的 `default` 的作用是什么？

- 不满意所有条件后执行的语句

## js编程题
1. 让用户输入一个数字，实现判断该数是奇数还是偶数并告诉用户

    ```js
    var num = +parseInt(prompt("请输入一个数字"));
    if(num % 2 == 0){
    alert("是偶数");
}else{
    alert("是奇数");
}
    ```
2. 让用户输入任意内容，随后弹出对应内容

    ```js
    var a = prompt("请输入内容");
    
    alert(a);
    ```
3. 让用户输入一个数字，判断该数字是否大于10，并告知用户结果，如果输入的非数字告知用户输入错误

    ```html
    var num = +parseInt(prompt("请输入一个数字"));
    
    if(num > 10){
        alert(num+"大于10");
    }else if(num < 10){
        alert(num+"小于10");
    }else{
        alert("输入错误");
    }
    ```

4. 让用户输入年龄，并判断该用户年龄是否成年，如果成年并告知：恭喜你已成年，如果还未成年需告知用户还有多少年就成年了，如果用户输入的不是年龄数字提示输入错误

    ```html
    var num = +parseInt(prompt("请输入年龄"));
    
    if(num >= 18){
        alert("恭喜你已成年");
    }else if(num < 18){
        var age = 18-num;
        alert("还有"+age+"年就成年了");
    }else{
        alert("输入错误");
    }
    ```
