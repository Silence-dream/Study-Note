## js解答题

1. 字符串的特性是什么？

- 一旦创建，内容无法改变。(指的是字符串里面的某个字符)

2. 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

```js
var str = "123456";
// 1
console.log(str.indexOf(3));


// 2
for (let i = 0; i < str.length; i++) {
    if (str[i] == 2) {
        console.log(i);
        break;
    }
}
```

3. 查看某个字符串是否存在于字符串中的某个方法是？其返回值为-1或者0分别代表的是什么？

- indexOf(x)
- -1代表没有找到这个字符
- 0代表这个字符的索引

4. 截取字符的三种方法是什么，分别有什么不同？

```js
var str = "123456";
// 1        slice(截取开始的位置，截取结束的位置)   前闭后开,第二个参数不填默认截取到最后
console.log(str.slice(1, 3));

// 2         substr(截取开始的位置,截取的个数)   
console.log(str.substr(0, 5));

// 3        substring(截取开始的位置，截取结束的位置)   前闭后开,第二个参数不填默认截取到最后

console.log(str.substring(1, 3));
```



## js编程题

1. 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
```js


var str = "abcdefgh";
var strReverse = "";


for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i]
}

console.log(strReverse)
```

2. 截取字符串 “我爱中华人民共和国”  中 '中华' 输出到控制台中
```js
var str = "我爱中华人民共和国";

console.log(str.slice(2, 4))
```

3. 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

```js
var str = "www.test.com/login?name=zs&pwd=123";
// 分割成name和pwd
var a = str.split("?")[1].split("&");

// console.log(a);


var name = a[0].split("=")[1];
var pwd = a[1].split("=")[1];

function getUrl(name, pwd) {
    this.name = name;
    this.pwd = pwd;
}


let result = new getUrl(name, pwd);
console.log(result);
```
4. var str= 'qweqweoeqweroqweqweodfsfdo'
    1)查找字符串中所有字母 'o'出现的位置
    2)把字符串中的所有字母'o'替换成 '-';

  ```js
var str = 'qweqweoeqweroqweqweodfsfdo'

for (let i = 0; i < str.length; i++) {
    if (str[i] == "o") {
        // 1
        console.log(i);
        // 2
        var str = str.replace("o", "-");
    }
}
console.log(str);
  ```

2

```js
let str = 'qweqweoeqweroqweqweodfsfdo'
var stra = str.split("");
// console.log(stra);

for (let i = 0; i < str.length; i++) {
    if (stra[i] == "o") {
        // 1
        console.log(i);
        stra[i] = "-";
    }
}
console.log(stra.join(""));
```

