#建学生信息表student
create table student
(
sno varchar(20) not null primary key,
sname varchar(20) not null,
ssex varchar(20) not null,
sbirthday datetime,
class varchar(20)
);


#建立教师表
create table teacher
(
tno varchar(20) not null primary key,
tname varchar(20) not null,
tsex varchar(20) not null,
tbirthday datetime,
prof varchar(20),
depart varchar(20) not null

);

#建立课程表course
create table course
(
cno varchar(20) not null primary key,
cname varchar(20) not null,
tno varchar(20) not null,
foreign key(tno) references teacher(tno)

);


#建立成绩表


CREATE TABLE score (
	sno VARCHAR (20) NOT NULL ,
	FOREIGN KEY (sno) REFERENCES student (sno),
	cno VARCHAR (20) NOT NULL,
	FOREIGN KEY (cno) REFERENCES course (cno),
	degree DECIMAL
);


#添加学生信息
insert into student values('108','曾华','男','1977-09-01','95033');
insert into student values('105','匡明','男','1975-10-02','95031');
insert into student values('107','王丽','女','1976-01-23','95033');
insert into student values('101','李军','男','1976-02-20','95033');
insert into student values('109','王芳','女','1975-02-10','95031');
insert into student values('103','陆君','男','1974-06-03','95031');


#添加教师信息
insert into teacher values('804','李诚','男','1958-12-02','副教授','计算机系');
insert into teacher values('856','张旭','男','1969-03-12','讲师','电子工程系');
insert into teacher values('825','王萍','女','1972-05-05','助教','计算机系');
insert into teacher values('831','刘冰','女','1977-08-14','助教','电子工程系');



#添加课程信息
insert into course values('3-105','计算机导论','825');
insert into course values('3-245','操作系统','804');
insert into course values('6-166','数字电路','856');
insert into course values('9-888','高等数学','831');

#添加成绩信息
insert into score values('103','3-245','86');
insert into score values('105','3-245','75');
insert into score values('109','3-245','68');
insert into score values('103','3-105','92');
insert into score values('105','3-105','88');
insert into score values('109','3-105','76');
insert into score values('103','3-105','64');
insert into score values('105','3-105','91');
insert into score values('109','3-105','78');
insert into score values('103','6-166','85');
insert into score values('105','6-166','79');
insert into score values('109','6-166','81');

-- 1.查询student表中的所有记录的sname、ssex和class列。

SELECT sname,ssex,class FROM student;


-- 2、 查询教师所有的单位即不重复的depart列

SELECT DISTINCT depart FROM teacher;

-- 3、 查询student表的所有记录

SELECT * FROM student;
 
--  4、 查询score表中成绩在60到80之间的所有记录。

SELECT * FROM score WHERE degree>60 AND  degree<80;

-- 5、 查询score表中成绩为85，86或88的记录。

SELECT * FROM score WHERE degree IN (85,86,88);


-- 6、  查询存在有85分以上成绩的课程cno.

SELECT cno FROM score WHERE degree>85;

-- 7、查询“计算 机系”与“电子工程系“不同职称的教师的tname和prof。

SELECT tname,prof FROM teacher WHERE depart IN('计算机系','电子工程系');

-- 8、 查询student表中“95031”班或性别为“女”的同学记录。

SELECT * FROM student WHERE class='95031' OR ssex='女';

-- 9、 以class降序查询student表的所有记录

SELECT * FROM student GROUP BY class DESC,sno;


-- 10、 以cno升序、degree降序查询score表的所有记录

SELECT * FROM score GROUP BY cno ASC,degree DESC;

-- 11、 查询“95031”班的学生人数。

SELECT COUNT(*) FROM student WHERE class='95031';

-- 12、查询分数大于70，小于90的sno列。

SELECT * FROM score WHERE degree>70 AND degree<90;


-- 13、查询score表中的最高分的学生学号和课程号。（如果还没有学过子查询,则用排序查）

SELECT MAX(sno),MAX(cno) FROM score;

-- 14、查询每门课的平均成绩。

SELECT cno,AVG(degree) FROM score GROUP BY cno;


-- 15、查询95033班和95031班全体学生的记录。

SELECT * FROM student WHERE class IN('95033','95031');

-- 16、查询student表中不姓“王”的同学记录。

SELECT * FROM student WHERE sname NOT LIKE '王%';

-- 17、查询student表中最大和最小的sbirthday日期值。

SELECT MAX(sbirthday),MIN(sbirthday) FROM student;

-- 18、以班号和年龄从大到小的顺序查询student表中的全部记录。

SELECT * FROM student GROUP BY sno DESC,sbirthday ASC;

-- 19、查询score表中至少有5个成绩记录的课程的平均分数。

SELECT AVG(degree) FROM score WHERE cno=(SELECT cno FROM score GROUP BY cno HAVING COUNT(cno)>=5);


-- 20、查询所有学生的sname、cno和degree列(两表连接)。

SELECT student.sname,score.cno,score.degree FROM student,score WHERE student.sno=score.sno;

-- 21、查询“男”教师及其所上的课程。

SELECT teacher.tname,course.cname FROM teacher,course WHERE teacher.tsex='男' AND teacher.tno=course.tno;

-- 22、查询所有学生的sno、cname和degree列。

SELECT  score.sno,course.cname,score.degree  FROM score,course,student WHERE student.sno=score.sno;

-- 23、查询所有学生的sname、cname和degree列。

SELECT student.sname,course.cname,score.degree  FROM score,course,student;

-- 24、查询“95031”班学生的平均分。

SELECT AVG(score.degree) FROM student,score WHERE student.class='95031';

-- 25、查询最高分同学的sno、cno和degree列。
select sno,cno,degree from Score where degree=(select MAX(degree) from score);

-- 26、查询和“李军”同性别的所有同学的sname.
select sname from student where ssex=(select ssex from student where sname='李军') and sname not in ('李军');

-- 27、查询和“李军”同性别并同班的同学sname.
select sname from student where ssex=(select ssex from student where sname='李军') and sname not in ('李军') and class=(select class from student where sname='李军');

-- 28、查询所有选修“计算机导论”课程的“男”同学的成绩表。

select sno,degree from score where sno in (select sno from student where ssex='男') and cno in (select cno from course where cname='计算机导论');


-- 41、查询student表中每个学生的姓名和年龄。
select sname,year(NOW())-year(sbirthday) from student;


-- 30、查询选修“3-105”课程的成绩高于“109”号同学成绩的所有同学的记录。

select sno,MAX(degree) from score where cno in ('3-105') group by sno having MAX(degree)>(select MAX(degree) from score where cno in ('3-105') and sno in ('109'));

-- 31、查询成绩高于学号为“109”、课程号为“3-105”的成绩的所有记录

select sno,MAX(degree) from score where cno in ('3-105') group by sno having MAX(degree)>(select MAX(degree) from score where cno in ('3-105') and sno in ('109'));

-- 32、查询和学号为108、101的同学同年出生的所有学生的sno、sname和sbirthday列。

select * from student where  year(sbirthday) in (select  year(sbirthday) from student where sno in ('108','101'));

-- 33、查询“张旭“教师任课的学生成绩。

select degree from score,teacher,course where teacher.tname='张旭' and teacher.tno=course.tno and course.cno=score.cno;

-- 34、查询某课程的成绩记录多于5个的教师姓名。

select teacher.* from course,teacher where course.cno=(select cno from score having COUNT(cno)>=5) and course.tno=teacher.tno;

-- 35、查询出“计算机系“教师所教课程的成绩表。

select sno,cno ,degree from score where cno in (select cno from course where tno in (select tno from teacher where depart='计算机系'));

-- 36、查询选修编号为“3-105“课程且成绩至少高于选修编号为“3-245”的同学的cno、sno和degree,并按degree从高到低次序排序


-- 37、查询选修编号为“3-105”且成绩高于选修编号为“3-245”课程的同学的cno、sno和degree.


-- 38、查询所有任课教师的tname和depart.

select tname,depart from teacher where tname in (select distinct tname from teacher,course,score where teacher.tno=course.tno and course.cno=score.cno);

-- 39、 查询所有未讲课的教师的tname和depart.
select tname,depart from teacher where tname not in (select distinct tname from teacher,course,score where teacher.tno=course.tno and course.cno=score.cno);

-- 40、查询至少有2名男生的班号。
select class from student where ssex='男' group by class having count(*)>1;












