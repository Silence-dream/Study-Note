/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 80100
 Source Host           : localhost:3306
 Source Schema         : nest_zero_to_one

 Target Server Type    : MySQL
 Target Server Version : 80100
 File Encoding         : 65001

 Date: 18/10/2023 15:26:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `user_id` smallint NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `account_name` varchar(24) NOT NULL COMMENT '用户账号',
  `real_name` varchar(20) NOT NULL COMMENT '真实姓名',
  `passwd` char(32) NOT NULL COMMENT '密码',
  `passwd_salt` char(6) NOT NULL COMMENT '密码盐',
  `mobile` varchar(15) NOT NULL DEFAULT '0' COMMENT '手机号码',
  `role` tinyint NOT NULL DEFAULT '3' COMMENT '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
  `user_status` tinyint NOT NULL DEFAULT '0' COMMENT '状态：0-失效|1-有效|2-删除',
  `create_by` smallint NOT NULL COMMENT '创建人ID',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` smallint NOT NULL DEFAULT '0' COMMENT '修改人ID',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`user_id`),
  KEY `idx_m` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3 COMMENT='后台用户表';

-- ----------------------------
-- Records of admin_user
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` (`user_id`, `account_name`, `real_name`, `passwd`, `passwd_salt`, `mobile`, `role`, `user_status`, `create_by`, `create_time`, `update_by`, `update_time`) VALUES (1, 'javascript', 'script', '0', '0', '0', 3, 0, 0, '2023-10-10 16:28:57', 0, '2023-10-10 16:29:04');
INSERT INTO `admin_user` (`user_id`, `account_name`, `real_name`, `passwd`, `passwd_salt`, `mobile`, `role`, `user_status`, `create_by`, `create_time`, `update_by`, `update_time`) VALUES (2, 'typescript', 'script', '0', '0', '0', 3, 0, 0, '2021-08-05 16:28:57', 0, '2022-10-10 16:29:04');
INSERT INTO `admin_user` (`user_id`, `account_name`, `real_name`, `passwd`, `passwd_salt`, `mobile`, `role`, `user_status`, `create_by`, `create_time`, `update_by`, `update_time`) VALUES (18, 'java', 'kid', 'WNPwi+ITHevx6c+2T13lUA==', 'D5WH', '17777777', 3, 1, 0, '2023-10-11 15:09:22', 0, '2023-10-11 15:09:22');
INSERT INTO `admin_user` (`user_id`, `account_name`, `real_name`, `passwd`, `passwd_salt`, `mobile`, `role`, `user_status`, `create_by`, `create_time`, `update_by`, `update_time`) VALUES (19, 'nodejs', 'kid', 'zJohlYVlQv9mXvaXSe7p7w==', 'Npnc', '17777777', 2, 1, 0, '2023-10-11 18:12:36', 0, '2023-10-16 17:12:26');
COMMIT;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `ccolumn_id` smallint NOT NULL COMMENT '商品_栏目ID',
  `commodity_name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '商品_名称',
  `commodity_desc` varchar(20) NOT NULL COMMENT '商品_介绍',
  `market_price` decimal(7,2) NOT NULL DEFAULT '0.00' COMMENT '市场价',
  `sale_money` decimal(7,2) NOT NULL DEFAULT '0.00' COMMENT '销售价',
  `c_by` varchar(24) NOT NULL COMMENT '创建人',
  `c_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `u_by` varchar(24) NOT NULL DEFAULT '0' COMMENT '修改人',
  `u_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_ccid` (`ccolumn_id`),
  KEY `idx_cn` (`commodity_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COMMENT='商品表';

-- ----------------------------
-- Records of commodity
-- ----------------------------
BEGIN;
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (1, 614, 'Sakamoto Daichi', '5wyzxEpi4v', 922.88, 522.20, 'ege0tjiqxI', '2018-12-19 14:42:19', '8eYhAzrpjv', '2008-06-10 10:52:41');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (2, 472, 'Yang Zhiyuan', 'jfLNG2vev1', 561.88, 827.71, 'NTGMxD0Ytv', '2019-12-08 06:45:50', 'Rl1TZupJTI', '2006-07-03 00:08:22');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (3, 222, 'Lei Lan', 'FSI7Pl2kGK', 86.07, 935.31, 'R83CMVYZnM', '2000-01-20 07:00:34', 'eP5WEZCgMf', '2023-03-02 16:04:26');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (4, 297, 'Ruby Jimenez', 'PoBe0rkIhE', 489.32, 498.49, 'zADuRIXq3o', '2000-07-22 15:19:13', 'BIJInINoKg', '2010-03-06 03:39:01');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (5, 96, 'Tanaka Miu', '5vnthX1L2j', 262.19, 757.05, 'AgBjk4uFKx', '2009-10-29 02:59:25', 'Hpda7QfXEp', '2013-08-24 06:10:18');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (6, 532, 'Ogawa Ayato', 'vfpi4z1oWR', 631.47, 62.87, 'B3RjHYITw5', '2007-07-25 17:40:30', 'oXm5FhT2Hc', '2020-09-06 00:26:41');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (7, 100, 'Joyce Bennett', 'amPfIZt34R', 477.49, 79.94, '3gmyD6Fouh', '2011-12-20 18:05:08', 'FzfSaHDxZe', '2014-08-15 00:04:31');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (8, 444, 'Zhou Jialun', 'hZ41bcjVxY', 597.93, 891.09, 'TqhTufoqko', '2001-04-14 18:54:37', 'pOB8z8qU5P', '2018-07-07 02:12:13');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (9, 409, 'Mike Jackson', 'wYWa7uYy2m', 369.45, 110.07, 'FWYmBbdc0w', '2007-07-18 12:26:11', 'zkGJMM2x7t', '2006-12-13 05:22:24');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (10, 676, 'Lam Ling Ling', 'crpTsUU5cb', 528.87, 376.80, 'bDvh3fvDbo', '2003-07-14 11:18:06', 'nLcg18HvlT', '2021-10-20 09:09:52');
INSERT INTO `commodity` (`id`, `ccolumn_id`, `commodity_name`, `commodity_desc`, `market_price`, `sale_money`, `c_by`, `c_time`, `u_by`, `u_time`) VALUES (11, 0, '麦林炮手', '我好像设点什么', 4800.00, 4800.00, 'nodejs', '2023-10-16 17:12:47', '0', '2023-10-16 17:12:47');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
