
-- 创建表
create table goods
(
  goods_id mediumint(8)
  unsigned primary key auto_increment,
  goods_name varchar
  (120) not null default '',
  cat_id smallint
  (5) unsigned not null default '0',
  brand_id smallint
  (5) unsigned not null default '0',
  goods_sn char
  (15) not null default '',
  goods_number smallint
  (5) unsigned not null default '0',
  shop_price decimal
  (10,2) unsigned not null default '0.00',
  market_price decimal
  (10,2) unsigned not null default '0.00',
  click_count int
  (10) unsigned not null default '0'
) engine=myisam default charset=utf8;

  -- 导入数据
  insert into `
  goods`
  values
    (1, 'kd876', 4, 8, 'ecs000000', 1, 1388.00, 1665.60, 9),
    (4, '诺基亚n85原装充电器', 8, 1, 'ecs000004', 17, 58.00, 69.60, 0),
    (3, '诺基亚原装5800耳机', 8, 1, 'ecs000002', 24, 68.00, 81.60, 3),
    (5, '索爱原装m2卡读卡器', 11, 7, 'ecs000005', 8, 20.00, 24.00, 3),
    (6, '胜创kingmax内存卡', 11, 0, 'ecs000006', 15, 42.00, 50.40, 0),
    (7, '诺基亚n85原装立体声耳机hs-82', 8, 1, 'ecs000007', 20, 100.00, 120.00, 0),
    (8, '飞利浦9@9v', 3, 4, 'ecs000008', 1, 399.00, 478.79, 10),
    (9, '诺基亚e66', 3, 1, 'ecs000009', 4, 2298.00, 2757.60, 20),
    (10, '索爱c702c', 3, 7, 'ecs000010', 7, 1328.00, 1593.60, 11),
    (11, '索爱c702c', 3, 7, 'ecs000011', 1, 1300.00, 0.00, 0),
    (12, '摩托罗拉a810', 3, 2, 'ecs000012', 8, 983.00, 1179.60, 13),
    (13, '诺基亚5320 xpressmusic', 3, 1, 'ecs000013', 8, 1311.00, 1573.20, 13),
    (14, '诺基亚5800xm', 4, 1, 'ecs000014', 1, 2625.00, 3150.00, 6),
    (15, '摩托罗拉a810', 3, 2, 'ecs000015', 3, 788.00, 945.60, 8),
    (16, '恒基伟业g101', 2, 11, 'ecs000016', 0, 823.33, 988.00, 3),
    (17, '夏新n7', 3, 5, 'ecs000017', 1, 2300.00, 2760.00, 2),
    (18, '夏新t5', 4, 5, 'ecs000018', 1, 2878.00, 3453.60, 0),
    (19, '三星sgh-f258', 3, 6, 'ecs000019', 12, 858.00, 1029.60, 7),
    (20, '三星bc01', 3, 6, 'ecs000020', 12, 280.00, 336.00, 14),
    (21, '金立 a30', 3, 10, 'ecs000021', 40, 2000.00, 2400.00, 4),
    (22, '多普达touch hd', 3, 3, 'ecs000022', 1, 5999.00, 7198.80, 16),
    (23, '诺基亚n96', 5, 1, 'ecs000023', 8, 3700.00, 4440.00, 17),
    (24, 'p806', 3, 9, 'ecs000024', 100, 2000.00, 2400.00, 35),
    (25, '小灵通/固话50元充值卡', 13, 0, 'ecs000025', 2, 48.00, 57.59, 0),
    (26, '小灵通/固话20元充值卡', 13, 0, 'ecs000026', 2, 19.00, 22.80, 0),
    (27, '联通100元充值卡', 15, 0, 'ecs000027', 2, 95.00, 100.00, 0),
    (28, '联通50元充值卡', 15, 0, 'ecs000028', 0, 45.00, 50.00, 0),
    (29, '移动100元充值卡', 14, 0, 'ecs000029', 0, 90.00, 0.00, 0),
    (30, '移动20元充值卡', 14, 0, 'ecs000030', 9, 18.00, 21.00, 1),
    (31, '摩托罗拉e8 ', 3, 2, 'ecs000031', 1, 1337.00, 1604.39, 5),
    (32, '诺基亚n85', 3, 1, 'ecs000032', 4, 3010.00, 3612.00, 9);


  -- 标量子查询
  -- 标量子查询：子查询得到结果是一个数据（一行一列）
  -- 基本语法：select * from 数据源 where 条件判断 =/<> (select 字段名 from 数据源 where 条件判断); //子查询得到的结果只有一个值

  SELECT *
  FROM goods
  WHERE goods_name=(SELECT goods_name
  FROM goods
  WHERE  goods_name='kd876')
  ;


  -- 列子查询
  -- 列子查询：子查询得到的结果是一列数据（一列多行）
  -- 主查询 where 条件 in (列子查询);
  SELECT
    goods_id,
    goods_name
  FROM
    goods
  WHERE
	goods_number IN ( SELECT goods_number
  FROM goods );



  -- 
  -- 行子查询：子查询返回的结果是一行多列
  -- 行元素：字段元素是指一个字段对应的值，行元素对应的就是多个字段：多个字段合起来作为一个元素参与运算，把这种情况称之为行元素。
  -- 主查询 where 条件[（构造一个行元素）] = (行子查询);


  SELECT *
  FROM goods
  WHERE (goods_id,cat_id) = (SELECT MAX(goods_id), MAX(cat_id)
  FROM goods);


  -- 表子查询
  -- 表子查询：子查询返回的结果是多行多列，表子查询与行子查询非常相似，只是行子查询需要产生行元素，而表子查询没有。
  -- 行子查询是用于where条件判断：where子查询
  -- 表子查询是用于from数据源：from子查询
  -- 
  -- Select 字段表 from (表子查询) as 别名 [where] [group by] [having] [order by] [limit];


  SELECT *
  FROM (SELECT *
    FROM goods
    ORDER BY goods_id DESC) AS temp
  GROUP BY goods_id;




  -- Exists子查询
  -- 
  -- Exists子查询：查询返回的结果只有0或者1，1代表成立，0代表不成立
  -- 基本语法：where exists(查询语句); //exists就是根据查询得到的结果进行判断：如果结果存在，那么返回1，否则返回0
  -- Where 1：永远为真

  SELECT *
  FROM goods
  WHERE EXISTS(SELECT goods_id
  FROM goods
  WHERE goods_id=goods_id);


  



