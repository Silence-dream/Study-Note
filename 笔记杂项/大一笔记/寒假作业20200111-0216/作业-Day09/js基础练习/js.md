## js编程题

 1. 根据要求完成下面操作

    ```js
    1) var a = 1, b = 1
       if (a > b) {
           console.log(a > b);
       } else {
           console.log(a > b);
       }
    // 将上述代码转换为三元运算符，并说明if和else里面的相同代码块有什么不同？
    
    //答案
    //if里面的是满足条件才执行的语句;else是不满足上述条件才执行的语句
    var a = 1, b = 1
    a > b ? console.log(a > b) : console.log(a > b);
    
    2) var a = 10,
          b = 11,
          c = [0]
      if (a > b || c) {
          console.log(a > b || c);
      } else {
          console.log(false);
      }
    // 将上述代码转换为三元运算符，并解释说明打印结果
    //答案
    2) var a = 10,
          b = 11,
          c = [0]
     a > b || c ? console.log(a > b || c) : console.log(false);
    ```

2. 使用 `if分支` 实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js
    
    
    function getGrade(grade) {
        if (grade >= 90) {
            return grade + '分对应的段位是' + 'A';
        } else if (grade >= 80) {
            return grade + '分对应的段位是' + 'B';
        } else if (grade >= 70) {
            return grade + '分对应的段位是' + 'C';
        } else if (grade >= 60) {
            return grade + '分对应的段位是' + 'D';
        } else {
            return grade + '分对应的段位是' + 'E';
        }
    }
    let result = getGrade(81);
    console.log(result);
    ```

3. 使用 `switch` 分支实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js
    function getGrade(grade) {
        let a = parseInt(grade / 10);
        switch (a) {
    
            case 10:
                return grade + "分对应的段位是" + "A";
    
            case 9:
                return grade + "分对应的段位是" + "A";
    
            case 8:
                return grade + "分对应的段位是" + "B";
    
            case 7:
                return grade + "分对应的段位是" + "C";
    
            case 6:
                return grade + "分对应的段位是" + "D";
    
            default:
                return grade + "分对应的段位是" + "E";;
        }
    }
    let result = getGrade(50);
    console.log(result);
    ```

4. 使用`if分支`通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），

    ```js
    function getAge(age) {
        if (age >= 60) {
            return age + "岁是老年";
        } else if (age >= 40 && age < 60) {
            return age + "岁是中年";
        } else if (age >= 24 && age < 40) {
            return age + "岁是青年";
        } else if (age >= 14 && age < 24) {
            return age + "岁是青少年";
        } else if (age < 14) {
            return age + "岁是儿童";
        }
    }
    
    let result = getAge(3);
    console.log(result);
    ```


5. 获取当前时间，判断今年是否为闰年(判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除)
   ```js
    var date = new Date();
   var year = date.getFullYear();
   if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
       console.log(year + "是闰年");
   } else {
       console.log(year + "不是闰年");
   }
   ```