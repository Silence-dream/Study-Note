## 使用的 gcc 版本

[MinGW-w64 - for 32 and 64 bit Windows download | SourceForge.net](https://sourceforge.net/projects/mingw-w64/)

![image-20210712203034718](https://gitee.com/qianshilei/test/raw/master/img/image-20210712203034718.png)

## 转义字符


| **转义字符** | **意义**                                                     | **ASCII码值（十进制）** |
| ------------ | ------------------------------------------------------------ | ----------------------- |
| \a           | 响铃(BEL)                                                    | 007                     |
| \b           | 退格(BS) ，将当前位置移到前一列                              | 008                     |
| \f           | 换页(FF)，将当前位置移到下页开头                             | 012                     |
| \n           | 换行(LF) ，将当前位置移到下一行开头                          | 010                     |
| \r           | 回车(CR) ，将当前位置移到本行开头                            | 013                     |
| \t           | 水平制表(HT) （跳到下一个TAB位置）                           | 009                     |
| \v           | 垂直制表(VT)                                                 | 011                     |
| \\           | 代表一个反斜线字符''\'                                       | 092                     |
| \'           | 代表一个单引号（撇号）字符                                   | 039                     |
| \"           | 代表一个[双引号](https://baike.baidu.com/item/双引号)字符    | 034                     |
| \0           | 空字符(NULL)                                                 | 000                     |
| \ddd         | 1到3位[八进制](https://baike.baidu.com/item/八进制)数所代表的任意字符 | 三位八进制              |
| \xhh         | 1到2位[十六进制](https://baike.baidu.com/item/十六进制)所代表的任意字符 | 二位十六进制            |