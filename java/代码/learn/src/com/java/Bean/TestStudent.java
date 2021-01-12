package com.java.Bean;

public class TestStudent {
    public static void main(String[] args) {
        /*-------------------------------*/
        //Student student = new Student();
        //student.setName("123");
        //System.out.println(student.getName());

        /*--------------------------*/
        Student student = new Student("李四", 19);
        System.out.println(student.getName());
    }
}
