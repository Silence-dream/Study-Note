num = 233
# 记录余数
s = ""
# 先判断是否为0，如果为0，直接输出0
if num == 0:
    print(0)
# 判断正负性，如果为正数，不记录，如果为负数，记录为负号
elif num > 0:
    a = ''
else:
    a = '-'
 # 当num为0时，循环结束
while abs(num):
	# 倒叙记录余数，注意，是倒叙记录
	# num板砖除进制数
    s, num = str(abs(num) % 2333) + s, abs(num) // 2333
# 先将符号位和余数进行合并，在转换为int类型
print(int(a+s))
