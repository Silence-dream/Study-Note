package com.test.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Ryan on 2017/11/14/0014.
 */
@Controller //这个注解标注这个类是一个controller，用来接收请求和响应response
public class HelloController {


    @ResponseBody //这个注解标注这个API的返回值是json，
    // 其实就是再response的header里塞入了contentType,
    // 当然，在这里还涉及到class转json的问题。那么，回到开始的问题，json是什么东西
    @GetMapping("/hello") //标注这个方法是一个路由请求实现，括号里就是我们的路由
    public String hello(){
        return "HelloJava";
    }
}