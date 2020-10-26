-- user
create table users(
  `id` int(11) not null auto_increment primary key comment '主键',
  `email` varchar(200) not null comment '邮箱',
  `password` varchar(200) not null comment '密码',
  `nickname` varchar(100) default null  comment '昵称',
  `slug`  varchar(200) not null comment '别名',
  `avatar` varchar(200) default null comment '头像',
  `status` varchar(20) not null comment '状态(未激活(unactivated)、已激活(activated)、无权限(forbidden)、禁用(trashed))',
  `bio` varchar(250) default null comment '个人简介'
) charset=utf8mb4;

insert into users(email,password,nickname,slug,avatar,status,bio) values (
  'admin','123456','admin','admin','/img/default.png','activated','一切开始于迅速的行动'
);

-- posts

create table posts (
    `id` int(11) not null auto_increment primary key comment '主键',
    `slug`  varchar(200) not null comment '别名',
    `title` varchar(200) not null comment '文章标题',
    `feature` varchar(200) default null comment '文章特色图像',
    `created` datetime not null comment '发表时间',
    `content` text comment '内容',
    `views` int(10) comment '浏览量',
    `likes` int(10) comment '点赞量',
    `status` varchar(20) not  null  comment '草稿（drafted）/ 已发布（published）/ 回收站（trashed）',
    `user_id`  int(11) not null  comment '用户ID',
    `category_id` int(11) not null  comment '分类ID'
)  charset=utf8mb4;

-- category

 create table categories (
   `id` int(11) not null auto_increment primary key comment '主键',
    `slug`  varchar(200) not null comment '别名',
    `name` varchar(200) not null comment  '分类名称'
 ) charset=utf8mb4;


--  comments

CREATE TABLE comments(
`id` INT(10) NOT NULL auto_increment PRIMARY KEY comment '主键',
`author` VARCHAR(200) NOT NULL COMMENT'作者',
`email` VARCHAR(200) NOT NULL COMMENT'邮箱',
`created` DATETIME COMMENT'创建时间',
`content` TEXT COMMENT'内容',
`status` varchar(20) not null COMMENT'状态:待审核（held）/ 准许（approved）/ 拒绝（rejected）/ 回收站（trashed）',
`post_id` INT(11) COMMENT'文章ID',
`parent_id` INT(11) COMMENT'父级ID'
)charset=utf8mb4;


-- OPTION
   create table options (
   `id` int(11) not null auto_increment primary key comment '主键',
    `key`  varchar(200) not null comment '属性键',
    `value` text  not null comment  '属性值'
 ) charset=utf8mb4;
