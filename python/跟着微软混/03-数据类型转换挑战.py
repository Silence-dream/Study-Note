""" 
在此挑战中，你将生成卡路里计数器用于提示用户：

当前日期（任何格式）
早餐摄入的卡路里数
午餐摄入的卡路里数
晚餐摄入的卡路里数
通过零食摄入的卡路里数
该程序随后对所有卡路里数求和并将其格式化为消息
"""

print("当前的日期")
date = input()
print("请输入早餐卡路里")
breakfast = int(input())
print("请输入午餐卡路里")
lunch = int(input())
print("请输入晚餐卡路里")
supper = int(input())
a = sum([breakfast, lunch, supper])
print(a)
