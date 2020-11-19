# 这一章会通过type()获取变量的数据类型
""" 
    Python 具有许多不同的数据类型。 
    在前面的模块中，你使用了字符串数据类型以及称为整数的数值数据类型。
    可以使用名为 type() 的内置函数来显示任何值的数据类型。 
    此函数可帮助你了解所使用的数据的类型，以及可以对该数据执行的操作。
"""

print(type('Hello world'))
print(type(7))

print(type(True))
print(type(False))

print(type('True'))
print(type('False'))
""" 
bool() 函数的工作方式类似于我们在前面模块中了解到的 str() 和 int() 函数。 
该函数可接受任何值，并尝试将其转换为布尔值。
有时结果是可预测的。 其他时候，发生的事情可能并不明显。
"""
print("字符串转换的布尔值")
print(" 'True' 转换成 bool =", bool('True'))
print(" 'False' 转换成 bool =", bool('False'))
print(" 空字符串 转换成 bool =", bool(''))
print(" '空' 转换成 bool =", bool(' '))
print(" 'Hello world!' 转换成 bool =", bool('Hello world!'))

print("数字转换成布尔值")
print("7 转换成bool =", bool(7))
print("1 转换成bool =", bool(1))
print("0 转换成bool =", bool(0))
print("-1转换成 bool =", bool(-1))

# 布尔表达式
print("1 + 1 == 3", 1 + 1 == 3)
print("1 + 1 == 2", 1 + 1 == 2)
