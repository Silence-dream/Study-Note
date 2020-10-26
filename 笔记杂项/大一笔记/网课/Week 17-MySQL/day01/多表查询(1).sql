

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer`
(
  `cid` varchar
(50) NOT NULL DEFAULT '',
  `cname` varchar
(50) DEFAULT NULL,
  `sex` varchar
(2) DEFAULT NULL,
  `age` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `customer` */

insert  into `customer`(`
cid`,`cname
`,`sex`,`age`) values
('c001','刘二','男',43),
('c002','张三','男',28),
('c003','李四','女',30),
('c004','王五','男',20),
('c005','赵六','男',50),
('c006','丽丽','女',50);

/*Table structure for table `orderitem` */

DROP TABLE IF EXISTS `orderitem`;

CREATE TABLE `orderitem`
(
  `cid` varchar
(50) DEFAULT NULL,
  `pid` varchar
(50) DEFAULT NULL,
  `count` int
(11) DEFAULT NULL,
  `ordertime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orderitem` */

insert  into `orderitem`(`
cid`,`pid
`,`count`,`ordertime`) values
('c001','p001',5,'2018-04-01 00:00:00'),
('c001','p002',2,'2018-04-07 00:00:00'),
('c001','p004',2,'2018-04-07 00:00:00'),
('c002','p003',10,'2018-05-01 00:00:00'),
('c002','p005',5,'2018-05-01 00:00:00'),
('c003','p004',5,'2018-05-10 00:00:00'),
('c004','p001',5,'2018-05-10 00:00:00'),
('c004','p002',2,'2018-05-01 00:00:00'),
('c005','p003',10,'2018-05-01 00:00:00');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product`
(
  `pid` varchar
(50) NOT NULL DEFAULT '',
  `pname` varchar
(50) DEFAULT NULL,
  `pirce` double DEFAULT NULL,
  `stock` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `product` */

insert  into `product`(`
pid`,`pname
`,`pirce`,`stock`) values
('p001','计算机',5000,20),
('p002','空调',2400,60),
('p003','冰箱',1500,20),
('p004','沙发',800,10),
('p005','打印机',1100,50);

# 1.	统计订购了商品的总人数。
select count(DISTINCT cid) 订购商品总人数
from orderitem;

# 2.	统计顾客号和所订购商品总数量
select cid 顾客号 , SUM(count) 订购商品总数量
from orderitem
group by cid;

# 3.	查找没订购商品的顾客号和顾客名
select cid 顾客号 , cname 顾客名
from customer
where cid not in (select cid
from orderitem
group by cid);

# 4.	查找订购商品号'p001'商品数量最多的顾客号和顾客名

    # 查询p001商品最大数量
select max(count)
from orderitem
where pid = 'p001';
# 查询订购p001商品最大数量的cid
select cid
from orderitem
where pid = 'p001' and count = (select max(count)
  from orderitem
  where pid = 'p001');
# 查询订购商品号'p001'商品数量最多的顾客号和顾客名
select cid 顾客号 , cname 顾客名
from customer
where cid in (select cid
from orderitem
where pid = 'p001' and count = (select max(count)
  from orderitem
  where pid = 'p001'));

# 5.	统计至少订购2种商品的顾客id和顾客名

    # 统计 订购2种商品的顾客id
select cid , count(pid)
from orderitem
group by cid
having count(pid) >= 2;
# 统计至少订购2种商品的顾客id和顾客名
select cid 顾客id , cname 顾客名
from customer
where cid in (select cid
from orderitem
group by cid
having count(pid) >= 2);

# 6.	查找所有顾客号和顾客名以及他们购买的商品号

select c.cid 顾客号 , c.cname 顾客名 , o.pid
from customer c left outer join orderitem o on c.cid = o.cid;

# 7.	查找订购了商品"p001"的顾客号和顾客名

select cid , cname
from customer
where cid in (select cid
from orderitem
where pid = 'p001');

# 8.	找订购了商品号为"p001"或者"p002"的顾客号和顾客名

select cid , cname
from customer
where cid in (select cid
from orderitem
where pid = 'p001' or pid = 'p002');

# 9.	查找年龄在30至40岁的顾客所购买的商品名及商品单价

    # 查询30到40岁的顾客 id
select cid
from customer
where age between 30 and 40;
# 查询30到40岁的顾客 购买的商品 pid
select pid
from orderitem
where cid in (select cid
from customer
where age between 30 and 40);
# 查询年龄在30至40岁的顾客所购买的商品名及商品单价
select pname 商品名 , pirce 商品单价
from product
where pid = (select pid
from orderitem
where cid in (select cid
from customer
where age between 30 and 40));

# 10.	查找女顾客购买的商品号，商品名和价格

    # 查询女顾客的cid
select cid
from customer
where sex = '女';
# 查询女顾客购买的商品 pid
select pid
from orderitem
where cid in (select cid
from customer
where sex = '女');
# 查询女顾客购买的商品号，商品名和价格
select pid 商品id, pname 商品名 , pirce 商品单价
from product
where pid in (select pid
from orderitem
where cid in (select cid
from customer
where sex = '女'));

