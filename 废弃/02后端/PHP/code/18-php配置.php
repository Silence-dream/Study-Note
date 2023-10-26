<?php

/**
 * 1.PHP配置
 * 
 * 1.1 查看当前 PHP 配置(https://www.php.net/manual/zh/function.phpinfo)
 * PHP中提供了phpinfo()函数可以查看当前PHP的配置项。
 * 语法: phpinfo();
 * 1.2 PHP 配置文件
 * php.ini 为 PHP 的配置文件，修改这个文件可以修改 PHP 的配置。这个文件所在的位置可以通过 phpinfo 函数来查看:
 * 语法: 搜索php.ini
 * 
 * 2.错误处理
 * 错误处理: 指的是系统(或者用户)在对某些代码进行执行的时候，发现有错误，就会通过错误处理的形势告知开发者。
 * 
 * 2.0 错误分类
 * 语法错误: 用户书写的代码不符合PHP的语法规范，语法错误会导致代码在编译过程中不通过，所以代码不会执行(Parse error)
 * 运行时错误: 代码编译通过，但是代码在执行过程中会出现一些条件不满足导致的错误(runtime error)
 * 逻辑错误: 程序员在写代码的时候，因为逻辑的不严密，出现了一些逻辑性的错误，导致代码虽然正常执行，但是得不到想要的结果
 * 
 * 
 * 2.1 错误级别
 * 系统错误: E_ERROR E_WARNing E_PARSE E_NOTICE
 * 用户错误: E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE
 * 其他: E_ALL代表所有错误
 * 
 * 2.2 显示错误
 * 可以通过 php.ini中的display_errors 来配置是否显示错误。on 代表显示，OFF 代表不显示
 * 
 * 2.3 设置显示错误的级别
 * 可以在 php.ini中的error_reporting设置显示哪种级别的错误:
 * 提示和警告 error_reporting=E_NOTICE & E_WARNING
 * 不显示警告级别的错误，其他都显示  error_reporting=~E_WARNING
 * 显示所有错误  error_reporting=~E_ALL
 * 
 * 2.4 设置显示错误级别的另一种方式
 * 除了修改配置文件，我们还可以在程序中使用 error_reporting 来设置显示的级别
 * error_reporting(0);
 * 
 * 2.5 自定义错误信息处理函数--> https://www.php.net/manual/zh/function.set-error-handler
 * 在实际开发中，不会直接让错误赤裸裸的展示给用户，但是不可能避免出现错误(测试没有发现的),这个时候不希望看到，
 * 但是有希望捕捉到可以让后台程序员去修改
 * 我们可以自己设置一个函数，当程序出错时，PHP 不显示错误信息，
 * 而是调用我们写的这个函数来处理出错信息。出错时 PHP 就不管了它只调用这个函数。
 * 具体怎么处理这个错误由程序员决定。
 */

 phpinfo();