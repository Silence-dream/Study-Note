""" 
学习目标
在本模块中，将执行以下操作：

在文本字符串中使用转义字符添加换行符和制表符。
使用 print() 函数的功能设置字符串格式以进行显示。
调用许多内置函数之一来去除空格、添加填充以及查找和替换子字符串。
使用 format() 函数创建包含一系列替换字段的格式字符串。

先决条件：
应了解如何创建工作文件夹和添加代码文件。
应了解如何使用 Visual Studio Code 或命令行中的工具支持运行 Python 代码文件。
应了解如何将值作为参数传递给函数。
应使用过 print() 函数、变量和文本字符串以及数值数据。
应了解如何对数据类型、文本值和变量调用帮助程序函数。
"""
# first_string = 'A literal string'
# second_string = "A literal string"
# print(second_string == first_string)

# 在其他引号内使用引号的代码
# third_string = 'A single quoted literal string with a " double quote'
# fourth_string = "A double quoted literal string with a ' single quote"
# print(third_string)
# print(fourth_string)

# 使用转义序列的代码
# fifth_string = 'A single quoted literal string with an \' escaped single quote'
# sixth_string = "A double quoted literal string with a \" double quote"
# seventh_string = 'A literal string with a \n new line character'
# eighth_string = 'A literal string with a \t tab character'

# print(fifth_string)
# print(sixth_string)
# print(seventh_string)
# print(eighth_string)

# 显示原始字符串的代码
# ninth_string = r"A literal string with a \n new line character printed raw"
# print(ninth_string)

# 使用多行字符串的代码
# tenth_string = '''A literal string
# on more than one line
# sometimes known as a verbatim string'''

# eleventh_string = """Another literal string
#      on more than one line
# using double quotes"""

# print(tenth_string)
# print(eleventh_string)

# 使用 print() 函数设置字符串格式的代码
first = 'Conrad'
second = 'Grant'
third = 'Bob'
print(first, second)
print(first, second, third)
""" 
print() 函数的第三次调用添加一个可选命名参数 sep。 这会定义在将字符串串联在一起进行显示时要用于分隔它们的字符。

print() 函数的第四次调用添加另一个可选命名参数 end。 这会定义要在序列的最末尾使用的字符。
"""
print(first, second, third, sep='-')
print(first, second, third, sep='-', end='.')