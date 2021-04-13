package com.demo.类;


public class TestStudent {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "张三";
        student.age = 19;
        student.study();
        System.out.println(student.name);
        System.out.println(student.age);
    }
}
