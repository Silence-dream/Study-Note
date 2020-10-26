# 数据类型 
-- ################################
# 数值型(整数、小数:浮点数 定点数)
# 整数
-- 数据类型 解释      取值范围.    占用空间 
-- tinyint 微整型    0-255       1字节  无符号 -1 1 
-- smallint 小整型   0-6535      2
-- Mediumint 中整型              3
-- int 整型                      4
-- bigint 大整型                 8
-- 删除表 
drop TABLE t_num;
-- 创建表 
create table t_num(
	numtiny tinyint UNSIGNED,
	numint int(4) ZEROFILL
);
-- 0 - 255.  为-128,127
INSERT INTO t_num(numtiny,numint) VALUES (250, 2523423);
INSERT INTO t_num(numtiny,numint) VALUES (251, 21);

-- int(10)代表显示数字多少位  在数字类型这里 显示多少位数字只和数字的大小有关系 
-- 如果你想展示的数字是 0001  你写的是 1 那就需要zerofill 用0填充 
-- 只要是zerofill 必然是 unsigned 


# 小数
-- M代表整个数字有多少位,D代表小数部分有多少位 
-- float(M,D) 浮点数 
-- double 双浮点数(双精度)
-- DECIMAL 定点数(比较精确)
CREATE TABLE t_float (
	numfl FLOAT(5,3),
	numdo DOUBLE(5,3),
	numde DECIMAL(5,3)
);

INSERT INTO t_float VALUES(12.345,12.345,14.345);
INSERT INTO t_float VALUES(12.3457,12.3457,14.3457);
INSERT INTO t_float VALUES(99.999,99.999,99.999);
desc t_float;

-- ################################
# 字符型(较短的字符串char varchar、较长的字符串text blob)
-- char(M)     短的字符串     M代表字符串的长度 	 (10)如果里面存5个 字符串长度规定了10依然占10个字符的空间                 执行效率高一些  男/女
-- varchar(M)   短的字符串     M代表字符串的长度  (10)可变 如果里面存5个 字符串长度规定了10根据具体的内容可以给予合适的空间    执行效率低一些 


-- ################################
# 日期型()

-- date 日期 
-- time 时间 
-- datetime 日期时间 
-- timestamp时间戳 
-- year 年 

CREATE TABLE t_date(
ddate date,
dtime time,
ddatetime datetime,
dtimestamp TIMESTAMP,
dyear year
);

INSERT INTO t_date VALUES(NOW(),NOW(),NOW(),NOW(),NOW());
INSERT INTO t_date VALUES('2020-07-03',null,null,NOW(),null);
desc t_date;
SHOW VARIABLES like '%time_zone%'


-- #############################
-- 枚举 enum
CREATE TABLE t_enum(
el ENUM('a','b','c')
);

INSERT INTO t_enum VALUES('a');
INSERT INTO t_enum VALUES('b');
INSERT INTO t_enum VALUES('f');
SELECT * from t_enum;


-- #############################
-- 集合 SET 
CREATE TABLE t_set(
cs SET('a','b','c','d')
);

INSERT into t_set VALUES('a');
INSERT into t_set VALUES('a,b');
INSERT into t_set VALUES('a,b,c');
SELECT * from t_set;




# 约束 