
-- 1
SELECT sname,ssex,class FROM student;

-- 2
SELECT DISTINCT depart FROM teacher;

-- 3

SELECT sno,cno,degree FROM score WHERE degree>60 AND degree<80;

-- 4

SELECT sno,cno,degree FROM score WHERE degree IN (85,86,88)


-- 5

SELECT DISTINCT cno FROM score WHERE degree>85;


-- 6

SELECT tname,prof FROM teacher;


-- 7

SELECT * FROM student WHERE class='95031' OR ssex='女';


-- 8
SELECT * FROM score GROUP BY cno ASC,degree DESC;


-- 9 

SELECT COUNT(*) FROM student WHERE class='95031'


-- 10

SELECT sno,cno FROM score WHERE degree IN (SELECT MAX(degree) FROM score );


-- 11

SELECT cno,AVG(degree) FROM score GROUP BY cno;


-- 12

SELECT * FROM student WHERE sname NOT LIKE '王%'


-- 13 
SELECT MAX(sbirthday),MIN(sbirthday) FROM student;



-- 14
SELECT sname AS 姓名,YEAR(NOW())-YEAR(sbirthday) AS 年龄 FROM student;


-- 15

SELECT ssex,COUNT(ssex) as 人数 FROM student GROUP BY ssex;



-- 16 

SELECT * FROM teacher WHERE tbirthday in 	(SELECT MIN(tbirthday) FROM teacher);


-- 17

SELECT cno FROM course WHERE cno NOT IN( SELECT cno FROM score WHERE sno IN (SELECT sno) FROM student WHERE sname='王芳');


-- 18

SELECT * FROM teacher WHERE depart='电子工程系' AND prof='讲师';


-- 19

SELECT * FROM score WHERE sno='103' GROUP BY degree DESC;



-- 20

SELECT sname FROM student WHERE ssex=(SELECT ssex FROM student WHERE sname='李军');


-- 21

SELECT teacher.tname,course.cname FROM teacher,course WHERE teacher.tno=course.tno AND teacher.tname=='王萍';


-- 22

SELECT cno,AVG(degree) FROM score GROUP BY cno;



-- 23 


SELECT student.sname,score.cno,score.degree FROM student,score WHERE student.sno=score.sno;


-- 24

SELECT teacher.tname,course.cname FROM teacher,course WHERE teacher.tsex='男' AND teacher.tno=course.tno;

-- 25 

SELECT student.sname,score.cno,
AVG(score.degree)

FROM student,score
WHERE student.sname='陆君' AND student.sno = score.sno GROUP BY score.cno


