package com.baidu.www;

import java.util.Scanner;

public class ScannerDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入数字");
        int x = sc.nextInt();
        System.out.println("x = " + x);
    }
}
