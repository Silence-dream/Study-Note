## js解答题

1. 数组的两种定义方式是什么
- var arr = [ ];
- var arr = new Array();

2. 什么是元素下标(索引)，简述在数组中如何使用

- 数组中元素所对应的位置
- 可以通过索引查找数组中对应的元素,数组名[索引]。

3. 数组中索引的范围是多少？

- 数组的长度-1

4. 如何知道一个数组的长度，其长度代表的是什么？

- 数组名.length
- 代表数组里面有多少个元素。


## js编程题

1. 使用两种定义方式将【true,全栈,666,Full_Stack,{name:"杨"},[1,2]】存入数组

   ```js
   //1
   var arr = [true,"全栈",666,"Full_Stack",{name:"杨"},[1,2]];
   
   //2
   var arr = new Array(true,"全栈",666,"Full_Stack",{name:"杨"},[1,2]);
   ```

2. 分别打印数组var arr = ['金','木','水']中的每个元素

   ```js
   var arr = ['金','木','水']
   
   for(var i = 0 ; i < arr.length; i++){
       console.log(arr[i]);
   }
   ```

3. 操作数组var arr = [1,2,[3,4,5,6],7,[8,9,10]]

   ```js
   //1) 打印元素2
   console.log(arr[1]);
   //2) 打印元素5
   console.log(arr[2][2]);
   //3) 打印元素7
   console.log(arr[3]);
   //4) 打印元素10
   console.log(arr[4][2]);
   ```

4.  操作数组var arr = [1,[2,3,4],[5,[6,7]],{name:"杨"},true,false]

    ```js
    //1) 打印出[6,7]
    console.log(arr[2][1]);
    //2) 打印数组中的对象
    console.log(arr[3]);
    //3) 打印该对象的属性值
    console.log(arr[3].name);
    //4) 将数组中的true和false互换位置
    var c = arr[4];
    arr[4] = arr[5];
    arr[5] = c;
    console.log(arr);
    ```

