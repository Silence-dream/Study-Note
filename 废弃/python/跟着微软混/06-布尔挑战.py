"""
首先，提示用户选择是否要继续操作。

如果用户以 no 或 n 进行响应，则打印短语 Exiting。

在此 no 情形中与以下输出匹配。 出现提示时，用户输入了 no。 

如果用户以 yes 或 y 进行响应，则打印短语 Continuing ... 和 Complete!。

在此 yes 情形中与以下输出匹配。 出现提示时，用户输入了 yes。

如果用户以任何其他内容进行响应，则打印短语 Please try again and respond with yes or no.

在这最后一个情形中与以下输出匹配。 出现提示时，用户输入了 bob。
"""

print("你要继续操作吗?")
user_input = input()

if user_input == "n" or user_input == "no":
    print("Exiting")
elif user_input == "y" or user_input == "yes":
    print("Continuing ...\nComplete!")
else:
    print("Please try again and respond with yes or no.")