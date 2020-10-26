CREATE TABLE IF NOT EXISTS `small_classify`(
   `id` INT(10) UNSIGNED AUTO_INCREMENT COMMENT  '自增的id',
	 `goods_id` INT(10) unsigned COMMENT  '大商品分类id',
	 `small_goods_id` INT(10) unsigned COMMENT  '小商品分类id',
	 	`small_goods_name` VARCHAR(10) COMMENT  '小商品名字',
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','01','连衣裙');
INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','02','半身裙');
INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','03','毛针织衫');
INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','04','T恤');
INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','05','短外套');
INSERT INTO `small_classify` (goods_id,small_goods_id,small_goods_name) VALUES ('01','05','短外套');




