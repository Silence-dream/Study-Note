num = 233
s = ""
if num == 0:
    print(0)
elif num > 0:
    a = ''
else:
    a = '-'
while abs(num):
    s, num = str(abs(num) % 2333) + s, abs(num) // 2333
print(int(a+s))
