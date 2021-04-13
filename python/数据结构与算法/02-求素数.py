# 求素数
# 只有1和它本身两个因数的自然数
from math import sqrt

# 请输入一个数字

# 转换成数字类型
user_number=int(input("请输入一个数字"));

for i in range(2,int(sqrt(user_number))):
    # 如果一个数求余等于0那么它就不是一个素数
    if(user_number % i == 0):
        print(f"{user_number}不是一个素数")
        break
else:
    print(f"{user_number}是一个素数")