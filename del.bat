@echo off
cls
set /p var="ȷ��ɾ�� [ %1 ]�� Yɾ�� N���ˣ�"
if /i "%var%"=="y" goto :delete
if /i "%var%"=="n" goto :exit
:exit
exit
:delete
rmdir %1 /S /Q