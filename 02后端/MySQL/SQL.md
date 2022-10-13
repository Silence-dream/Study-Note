## 学习之前的建表

```sql
create database demo #创建数据库 demo
use demo # 使用 demo 数据库

create table class (
  id int(11) not null auto_increment comment '班级id',
  name varchar(50) not null comment '班级名',
  primary key (id)
) comment '班级表';

create table student (
  id int(11) not null auto_increment comment '学生id',
  name varchar(50) not null comment '学生姓名',
  age tinyint unsigned default 20 comment '学生年龄',
  sex enum('male', 'famale') comment '性别',
  score tinyint comment '入学成绩',
  class_id int(11) comment '班级',
  createTime timestamp default current_timestamp comment '创建时间',
  primary key (id),
  foreign key (class_id) references class (id)
) comment '学生表';

insert into class (name) values ('软件工程'), ('市场营销');

insert into student (name, age, sex, score, class_id) values ('张三', 21, 'male', 100, 1);
insert into student (name, age, sex, score, class_id) values ('李四', 22, 'male', 98, 1);
insert into student (name, age, sex, score, class_id) values ('王五', 22, 'male', 99, 1);
insert into student (name, age, sex, score, class_id) values ('燕七', 21, 'famale', 34, 2);
insert into student (name, age, sex, score, class_id) values ('林仙儿', 23, 'famale', 78, 2);
```



## SQL 概念(以MySql 为例)

- DBMS

  数据库指一系列有关联数据的集合，而操作和管理这些数据的是DBMS，包括MySQL，PostgreSQL，MongoDB，Oracle，SQLite等等。 RDBMS 是基于关系模型的数据库，使用 `SQL` 管理和操纵数据。另外也有一些 `NoSQL` 数据库，比如 MongoDB。 因为`NoSQL`为非关系型数据库，一般不支持join操作，因此会有一些非正则化(denormalization)的数据，查询也比较快。

- Database

  数据库指一系列有关联数据的集合，如以上通过 `create datebase demo` 新建的 `demo` 数据库。

![image-20210611081922589](https://gitee.com/qianshilei/test/raw/master/img/image-20210611081922589.png)



- Table

  具有特定属性的结构化文件。比如学生表，学生属性有学号，年龄，性别等。schema (模式) 用来描述这些信息。 `NoSQL` 不需要固定列，一般没有 schema，同时也利于垂直扩展。

  ![image-20210611082056222](https://gitee.com/qianshilei/test/raw/master/img/image-20210611082056222.png)

- Column

  表中的特定属性，如学生的学号，年龄。每一列都具有数据类型。

- Row

  数据表的每一行记录。如学生张三。

- Data Type

  每一列都具有数据类型，如 char, varchar，int，text，blob, datetime，timestamp。 根据数据的粒度为列选择合适的数据类型，避免无意义的空间浪费。如下有一些类型对比

  - char, varchar 需要存储数据的长度方差小的时候适合存储`char`，否则`varchar`。 `varchar` 会使用额外长度存储字符串长度，占用存储空间较大。 两者对字符串末尾的空格处理的策略不同，不同的DBMS又有不同的策略，设计数据库的时候应当注意到这个区别。
  - datetime, timestamp `datetime` 存储时间范围从1001年到9999年。 `timestamp` 保存了自1970年1月1日的秒数，因为存储范围比较小，自然存储空间占用也比较小。 日期类型可以设置更新行时自动更新日期，建议日期时间类型根据精度存储为这两个类型。 如今 DBMS 能够存储微秒级别的精度，比如 `mysql` 默认存储精度为秒，但可以指定到微秒级别，即小数点后六位小数
  - enum 对于一些固定，不易变动的状态码建议存储为 `enum` 类型，具有更好的可读性，更小的存储空间，并且可以保证数据有效性。

- 数据定义语言： 简称`DDL` (Data Definition Language)，用来定义数据库对象:数据库、表、列等；

- 数据操作语言： 简称`DML` (Data Manipulation Language)，用来对数据库中表的记录进行更新。关键字： insert、update、delete等
- 数据控制语言： 简称`DCL`(Data Control Language)，用来定义数据库访问权限和安全级别，创建用户等。关键字： grant等
- 数据查询语言： 简称`DQL`(Data Query Language)，用来查询数据库中表的记录，关键字： select from where等



## 增删改查

### 查

```sql
-- 检索单列
select name from student;
-- 检索多列
SELECT name,age,class_id FROM student;
-- 检索所有列
select * from student;
```

























