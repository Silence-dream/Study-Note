<!-- 1.查询Student表中Sname、Ssex和Class列的所有信息。（4分）

select Sname,Ssex,Class from Student;

2、 查询教师表中Depart列的所有信息并去除重复值。（4分）
SELECT  DISTINCT depart FROM teacher;
  
3、 查询Score表中成绩在60到80之间的所有信息。（4分）

SELECT * FROM score WHERE degree >= 60 && degree <= 80;  //李宇才
SELECT * FROM score WHERE degree >= 60 AND degree <= 80  // 曾晓峰
select * from score where degree between 60 and 80;  //曹洋

  
4、 查询Score表中成绩为85，86或88的所有信息。（4分）

SELECT * FROM Score WHERE  degree IN(85,86,88);  // 王亚亚

SELECT * FROM Score WHERE  degree =85||degree =86||degree =88;  // 孙宁阳


5、 查询成绩存在有85分以上的课程的Cno列信息，并对课程Cno去重. （4分）

select distinct cno from score where degree >85;   // 烟乐乐

    
6、查询“计算机系”与“电子工程系“所有教师的Tname和Prof列信息。（4分）

SELECT `tname`,`prof` FROM teacher WHERE depart IN('计算机系','电子工程系')   //蒲嘉玲
SELECT tname ,prof FROM teacher WHERE depart ='计算机系' || depart='电子工程系' //郑坤

    
7、 查询Student表中班级为“95031”班或性别为“女”的所有学生的信息。（4分）

select * from student where class="95031" ||(or) ssex="女"

     
8、 查询Score表的所有信息，查询结果按照Cno升序、Degree降序排列。（4分）  order by  desc降序 asc升序

select * from score order by cno,degree desc;

     
9、 查询“95031”班的学生人数。（4分）

SELECT COUNT(*) FROM  student WHERE class='95031';  // 徐玥

 
10、查询Score表中的最高分的学生学号和课程号。（用子查询）（4分）

select sno,cno from score where degree = (select max(degree) from score) 

     
11、查询每门课程的平均成绩。（4分） (group by 分组)
SELECT cno,AVG(degree) FROM score GROUP BY cno;  // 邓林洋
SELECT cno,AVG(degree) FROM score GROUP BY cno;  //徐启超 


12、查询Student表中不姓“王”的同学记录。（4分）  模糊查询， like  %匹配的是任意字符   _匹配的是单个字符
SELECT *FROM student WHERE NOT(sname LIKE'王%' ); // 胥永杰
SELECT * FROM student WHERE sname NOT LIKE '王%';  // 曹喜娟 

//left(code, 8)表示取code字段从左截取8位；
SELECT * FROM student WHERE LEFT(sname,1) <> '王';    //朱凤娇  
    

13、查询Student表中最大和最小的Sbirthday日期值。（4分）  max()  min()
SELECT MAX(sbirthday),MIN(sbirthday) FROM student; // 赵瑞轩
SELECT MIN(Sbirthday),MAX(Sbirthday) FROM student; // 康春龙

 
14、查询Student表中的所有学生的年龄（4分）
select year(now())-Year(sbirthday) as 年龄 from student   // 闫雨龙

SELECT sname, YEAR(NOW())-YEAR (sbirthday) AS 年龄 FROM student; // 曾鹏

 
15、 查询Student表中男、女各有多少人（4分） group by 分组
 
select ssex,count(*) as '人数' from student group by ssex;  // 殷鸿亮

SELECT ssex,COUNT(ssex) 人数 FROM student GROUP BY ssex;  // 黄选平


16、在Teacher表中查询年龄最大的老师的信息（4分）

select * from teacher order by tbirthday limit 1   // 第一种


select * from teacher where tbirthday = (select min(tbirthday) from teacher);---子查询  // 第二种


select * from teacher where  (YEAR(NOW())-YEAR (sbirthday)) = (select max(YEAR(NOW())-YEAR (sbirthday)) from teacher )


17、查询学生”王芳”没有选修的课程有哪些(子查询) （4分）

// 先找到学生"王芳"的sno
select sno from student  where sname="王芳"
// 先查询王芳选修的课程有哪些
select cno from score where sno = (select sno from student  where sname="王芳")
// 查询王芳没有选修的课程(not in 等价于 <>all)
select cno from course where cno not in (select cno from score where sno = (select sno from student  where sname="王芳"))
select cno from course where cno <>all(select cno from score where sno = (select sno from student  where sname="王芳"))


18、查询Teacher表中所在系别是”电子工程系”并且职位是“讲师”的老师的信息（4分）

 SELECT * FROM teacher WHERE depart='电子工程系' AND prof='讲师'  // 张建平
 SELECT * FROM teacher  WHERE depart = '电子工程系' AND prof = ‘讲师  //张元乙 


19、查询Score表中学号是103所选的课程，并按照成绩降序的方式排序（4分）
select * from score where sno = 103  order by degree desc;
SELECT * FROM score WHERE sno = 103 ORDER BY degree DESC;  // 吴鸿志
SELECT * FROM score WHERE sno = 103 ORDER BY degree DESC   // 庞健聪 

 
20、查询和“李军”同性别的所有同学的Sname列信息（4分）

// 要拿到李军的性别

 select ssex from student where sname="李军"

 select sname from student  where ssex = (select ssex from student where sname="李军")

SELECT  sname FROM student  WHERE  ssex=( SELECT ssex FROM  student  WHERE  sname='李军')  // 鲁正一
SELECT sname FROM student WHERE ssex=(SELECT ssex FROM student WHERE sname ='李军'); // 张黎业

21、查询”王萍”老师所教授的课程有哪些（两表连接实现）（4分）
// 隐式内连接
select tname,cname from teacher,course where teacher.tno = course.tno and tname="王萍"
//显示内连接
select tname,cname from teacher inner join course on teacher.tno = course.tno where tname="王萍"
// 左连接
select tname,cname from teacher left join course on teacher.tno = course.tno where tname="王萍"
 
22、查询Score表中每门课程的平均分数（要求查询的课程至少要有五个成绩）。（4分）

SELECT cno, AVG(degree) FROM score GROUP BY cno having count(*)>=5

SELECT cno,AVG(degree) FROM score GROUP BY cno HAVING COUNT(*)>=5;   // 韩月旗

 
23、查询所有学生的Sname、Cno和Degree列(两表内连接)。（4分）
SELECT sname,cno,degree FROM score,student WHERE score.sno=student.sno; //朱凤娇 
SELECT sname,cno,degree FROM student,score WHERE score.sno = student.sno;// 黎雪佳
    

24、查询“男”教师的名称及其所上的课程的名称（两表内连接）。（4分）
select tname,cname from course,teacher where course.tno = teacher.tno and tsex = "男"

25、查询学生”陆君”所选每门课的平均分（两表内连接）。（4分）
select sname,cno,avg(degree) from student,score where student.sno = score.sno and sname="陆君" group by cno


