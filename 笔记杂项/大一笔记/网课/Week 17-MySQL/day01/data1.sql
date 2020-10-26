/*
SQLyog Ultimate v8.32 
MySQL - 5.5.49 : Database - day05
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`day05` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `day05`;

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `cid` varchar(50) NOT NULL DEFAULT '',
  `cname` varchar(50) DEFAULT NULL,
  `sex` varchar(2) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `customer` */

insert  into `customer`(`cid`,`cname`,`sex`,`age`) values ('c001','刘二','男',43),('c002','张三','男',28),('c003','李四','女',30),('c004','王五','男',20),('c005','赵六','男',50),('c006','丽丽','女',50);

/*Table structure for table `orderitem` */

DROP TABLE IF EXISTS `orderitem`;

CREATE TABLE `orderitem` (
  `cid` varchar(50) DEFAULT NULL,
  `pid` varchar(50) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `ordertime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orderitem` */

insert  into `orderitem`(`cid`,`pid`,`count`,`ordertime`) values ('c001','p001',5,'2018-04-01 00:00:00'),('c001','p002',2,'2018-04-07 00:00:00'),('c001','p004',2,'2018-04-07 00:00:00'),('c002','p003',10,'2018-05-01 00:00:00'),('c002','p005',5,'2018-05-01 00:00:00'),('c003','p004',5,'2018-05-10 00:00:00'),('c004','p001',5,'2018-05-10 00:00:00'),('c004','p002',2,'2018-05-01 00:00:00'),('c005','p003',10,'2018-05-01 00:00:00');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `pid` varchar(50) NOT NULL DEFAULT '',
  `pname` varchar(50) DEFAULT NULL,
  `pirce` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `product` */

insert  into `product`(`pid`,`pname`,`pirce`,`stock`) values ('p001','计算机',5000,20),('p002','空调',2400,60),('p003','冰箱',1500,20),('p004','沙发',800,10),('p005','打印机',1100,50);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
