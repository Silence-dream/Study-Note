package com.demo.类;

/**
 * 定义一个手机类
 * 它有品牌、型号和名称
 * 它可以打电话、发短信和玩游戏
 */
public class 手机 {
    // 成员变量 : 定义在类中，方法wait的变量

    String 品牌;
    String 型号;
    String 名称;

    // 成员方法
    public void 打电话(String name) {
        System.out.println("给" + name + "打电话");
    }

    public void 发短信() {
        System.out.println("发短信");
    }

    public void 玩游戏() {
        System.out.println("玩游戏");
    }
}
