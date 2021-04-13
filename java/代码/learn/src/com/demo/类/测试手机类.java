package com.demo.类;

public class 测试手机类 {
    public static void main(String[] args) {
        手机 p = new 手机();

        p.品牌 = "小米牛逼";

        System.out.println(p.品牌);
        System.out.println(p.型号);
        System.out.println(p.名称);

        p.打电话("雷军");
        p.发短信();
        p.玩游戏();
    }
}
