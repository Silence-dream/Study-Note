-- 1.	查询出只选修了一门课程的全部学生的学号和姓名
-- 都选修了至少两门课啊
SELECT student.sname,student.sid FROM student,sc GROUP BY student.sid HAVING NOT COUNT(sc.sid)>1;

-- 2.	查询不同课程成绩相同的学生的学号、课程号、学生成绩

SELECT DISTINCT
	a.sid,
	a.score,
	a.cid 
FROM
	sc AS a
	INNER JOIN sc AS b ON a.sid = b.sid 
WHERE
	a.score = b.score 
	AND a.cid != b.cid;
	
-- 	3.	查询平均成绩大于70 的所有学生的学号、姓名和平均成绩

SELECT sc.sid,student.sname,SUM(sc.score)/COUNT(sc.score) AS avgs FROM sc,student WHERE student.sid=sc.sid GROUP BY sid;

-- 4.	查询所有学生的选课情况

SELECT sc.sid,student.sname,course.cid,course.cname FROM sc,student,course WHERE student.sid=sc.sid AND course.cid=sc.cid;

-- 5.	查询课程名称为“数据库”，且分数低于60的学生姓名和分数;

SELECT student.sid,student.sname FROM sc,student,course WHERE course.cid=sc.cid AND sc.sid=student.sid AND sc.score<60;

-- 6.	查询任何一门课程成绩在70分以上的姓名、课程名称和分数

SELECT student.sname,course.cname,sc.score FROM student,sc,course WHERE course.cid=sc.cid AND sc.sid=student.sid AND sc.score>70; 

SELECT student.sname,course.cname,sc.score FROM course INNER JOIN sc ON course.cid=sc.cid INNER JOIN student ON sc.sid=student.sid AND  sc.score>70; 


-- 7.	查询有不及格的课程的课程编号，课程名称，成绩，并按课程号从大到小排列

SELECT course.cid,course.cname,sc.score FROM course INNER JOIN sc ON sc.cid=course.cid AND sc.score<60 GROUP BY sc.score DESC;

-- 8.	查询选了课程编号为003且课程成绩在70分以上的学生的学号和姓名

SELECT student.sid,student.sname from sc,student where student.sid=sc.sid AND sc.cid='003' AND sc.score>70;

-- 9.	查询选修“叶平”老师所授课程的学生中，成绩最高的学生姓名及其成绩

-- 10.	查询没学过“叶平”老师讲授的任一门课程的学生姓名


-- 11.	查询两门以上不及格课程的同学的学号及其平均成绩

SELECT sid,avg(score),COUNT(*) from sc WHERE score<60 GROUP BY sid HAVING COUNT(*)>2;




