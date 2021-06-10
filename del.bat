@echo off
cls
set /p var="È·¶¨É¾³ý [ %1 ]£¿ YÉ¾³ý NËãÁË£º"
if /i "%var%"=="y" goto :delete
if /i "%var%"=="n" goto :exit
:exit
exit
:delete
rmdir %1 /S /Q