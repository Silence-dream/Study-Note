
CREATE TABLE emp
(
  empno INT,
  -- 员工号
  ename VARCHAR(50),
  -- 员工姓名
  job VARCHAR(50),
  -- 员工职位
  mgr INT,
  -- 管理者工号
  hiredate DATE,
  -- 入职时间
  sal DECIMAL(7,2),
  -- 薪水
  comm DECIMAL(7,2),
  -- 奖金
  deptno INT
  -- 部门编号
)
;

CREATE TABLE dept
(
  deptno INT,
  -- 部门编号
  dname VARCHAR(14),
  -- 部门名称
  loc VARCHAR(13)
  -- 部门位置       
);



INSERT INTO emp
VALUES(7369, 'SMITH', 'CLERK', 7902, '1980-12-17', 800, NULL, 20);
INSERT INTO emp
VALUES(7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600, 300, 30);
INSERT INTO emp
VALUES(7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250, 500, 30);
INSERT INTO emp
VALUES(7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975, NULL, 20);
INSERT INTO emp
VALUES(7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30);
INSERT INTO emp
VALUES(7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850, NULL, 30);
INSERT INTO emp
VALUES(7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450, NULL, 10);
INSERT INTO emp
VALUES(7788, 'SCOTT', 'ANALYST', 7566, '1987-04-19', 3000, NULL, 20);
INSERT INTO emp
VALUES(7839, 'KING', 'PRESIDENT', NULL, '1981-11-17', 5000, NULL, 10);
INSERT INTO emp
VALUES(7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500, 0, 30);
INSERT INTO emp
VALUES(7876, 'ADAMS', 'CLERK', 7788, '1987-05-23', 1100, NULL, 20);
INSERT INTO emp
VALUES(7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950, NULL, 30);
INSERT INTO emp
VALUES(7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000, NULL, 20);



INSERT INTO emp
VALUES(7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300, NULL, 10);

INSERT INTO dept
VALUES(10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept
VALUES(20, 'RESEARCH', 'DALLAS');
INSERT INTO dept
VALUES(30, 'SALES', 'CHICAGO');
INSERT INTO dept
VALUES(40, 'OPERATIONS', 'BOSTON');


-- 1.列出至少有4个员工的所有部门

SELECT *
FROM dept
WHERE deptno IN(SELECT deptno
FROM emp
GROUP BY deptno
HAVING COUNT(*) >4);

-- 2.列出薪金比“SMITH”多的所有员工。

SELECT *
FROM emp
WHERE sal>(SELECT sal
FROM emp
WHERE ename='SMITH');

-- 3.列出所有员工的姓名及其直接上级的姓名

SELECT e.ename, e2.ename AS mgr_name
FROM emp e INNER JOIN emp e2 ON e.mgr=e2.empno;

-- 4.列出受雇日期早于其直接上级的所有员工

SELECT e.ename, e2.ename AS mgr_name
FROM emp e INNER JOIN emp e2 ON e.mgr=e2.empno
WHERE e.hiredate<e2.hiredate;

-- 5.列出部门名称和这些部门的员工信息，同时列出那些没有员工的部门

SELECT dept.*, emp.*
FROM emp, dept;

--  6.列出所有“CLERK”（办事员）的姓名及其部门名称

SELECT e.*, d.*
FROM emp e, dept d
WHERE e.deptno=d.deptno AND job='CLERK'
;

--  7.列出最低薪金大于1500的各种工作
SELECT job
FROM emp
GROUP BY job
HAVING MIN(sal)>1500;

--  8.列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号

SELECT e.*, d.*
FROM emp e JOIN dept d ON e.deptno=d.deptno
WHERE dname='SALES';

-- 9.列出薪金高于公司平均薪金的所有员工

SELECT *
FROM emp
WHERE sal>(SELECT AVG(sal)
FROM emp);

-- 10.列出与“SCOTT”从事相同工作的所有员工

SELECT *
FROM emp
WHERE job=(SELECT job
FROM emp
WHERE ename='SCOTT');

-- 11.列出薪金等于部门30中任意一个员工的薪金的所有员工的姓名和薪金

SELECT *
FROM emp
WHERE sal IN(SELECT sal
FROM emp
WHERE deptno='30');

-- 12.列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金

SELECT *
FROM emp
WHERE sal >(SELECT MAX(sal)
FROM emp
WHERE deptno='30');

-- 13.列出在每个部门工作的员工数量、平均工资

SELECT deptno, COUNT(*), AVG(sal)
FROM emp
GROUP BY deptno;

-- 14.列出所有员工的姓名、部门名称和工资

SELECT ename, dname, sal
FROM emp e JOIN dept d ON e.deptno=d.deptno;

-- 15.列出所有部门的详细信息和部门人数

SELECT d.*, COUNT(*) rs
FROM emp e JOIN dept d ON e.deptno=d.deptno
GROUP BY deptno;

-- 16.列出各种工作的最低工资

SELECT job, MIN(sal)
FROM emp
GROUP BY job;

-- 17.列出各个部门的MANAGER（经理）的最低薪金

SELECT m.deptno, MIN(m.sal)
FROM emp e JOIN emp m ON e.mgr=m.empno
GROUP BY deptno;

-- 18.列出所有员工的年工资,按年薪从低到高排序

SELECT ename, sal*12
FROM emp
ORDER BY sal*12
;

-- 19.查出emp表中薪水在3000以上（包括3000）的所有员工的员工号、姓名、薪水

SELECT empno, ename, sal
FROM emp
WHERE sal>=3000;

-- 20.查询出所有薪水在'ALLEN'之上的所有人员信息

SELECT *
FROM emp
WHERE sal>(SELECT sal
FROM emp
WHERE ename='ALLEN');

-- 21.查询出emp表中部门编号为20，薪水在2000以上（不包括2000）的所有员工，显示他们的员工号，姓名以及薪水，以如下列名显示：员工编号 员工名字 薪水

SELECT empno 员工编号, ename 员工姓名, sal 薪水
FROM emp
WHERE deptno='20' AND sal>2000;

-- 22.查询出emp表中所有的工作种类（无重复）

SELECT DISTINCT job
FROM emp;

-- 23.查询出所有奖金（comm）字段不为空的人员的所有信息

SELECT *
FROM emp
WHERE comm  IS NOT NULL;

-- 24.查询出薪水在800到2500之间（闭区间）所有员工的信息。（注：使用两种方式实现AND以及BETWEEN AND）

SELECT *
FROM emp
WHERE sal >=800 AND sal<=2500;

SELECT *
FROM emp
WHERE sal BETWEEN 800 AND 2500;


-- 25.查询出员工号为7521，7900，7782的所有员工的信息。（注：使用两种方式实现，OR以及IN）

SELECT *
FROM emp
WHERE empno='7521' OR empno='7900' OR empno='7782';

SELECT *
FROM emp
WHERE empno IN ('7521' ,'7900' ,'7782');


-- 26.查询出名字中有“A”字符，并且薪水在1000以上（不包括1000）的所有员工信息

SELECT *
FROM emp
WHERE ename LIKE '%A%' AND sal>1000;

-- 27.查询出名字第三个字母是“M”的所有员工信息

SELECT *
FROM emp
WHERE ename LIKE '__M%'
;

-- 28.将所有员工按薪水升序排序，按照入职时间降序排序

SELECT *
FROM emp
ORDER BY sal,hiredate DESC;

-- 29.查询出最早工作的那个人的名字、入职时间和薪水
--      分析：入职日期最小的 ---查询最小的入职日期

SELECT *
FROM emp
WHERE hiredate=(SELECT MIN(hiredate)
FROM emp);

-- 30.显示所有员工的名字、薪水、奖金，如果没有奖金，暂时显示100

SELECT ename, sal, IFNULL(comm,100)
FROM emp;

-- 31.显示出薪水最高人的职位
-- 分析：查询最高的薪水

SELECT job
FROM emp
WHERE sal=(SELECT MAX(sal)
FROM emp);

-- 32.查出emp表中所有部门的最高薪水和最低薪水，部门编号为10的部门不显示
-- 分析：按照部门分组，条件部门编号不等于10

SELECT deptno, MAX(sal), MIN(sal)
FROM emp
GROUP BY deptno
HAVING deptno !='10';


-- 33.删除10号部门薪水最高的员工

SELECT
  MAX( sal )
FROM
  emp
WHERE
	deptno = '10';
DELETE 
FROM
	emp 
WHERE
	sal =(
	SELECT
    *
  FROM
    ( SELECT MAX( sal )
    FROM emp
    WHERE deptno = '10' ) AS a 
	)
  AND deptno = '10';

-- 34.将薪水最高的员工的薪水降30%
SELECT MAX(sal)
FROM emp

UPDATE emp SET sal=sal*0.7 WHERE sal=(SELECT *
FROM (SELECT MAX(sal)
  FROM emp) AS a);

-- 35.查询员工姓名，工资和 工资级别(工资>=3000 为3级，工资>2000 为2级，工资<=2000 为1级)
-- 提示: CASE WHEN THEN 介绍

SELECT
  ename,
  sal,
  CASE
		
		WHEN sal >= 3000 THEN
		'三级' 
		WHEN sal > 2000 THEN
		'二级' 
		WHEN sal <= 2000 THEN
		'一级' 
	END AS 工资级别
FROM
  emp;


