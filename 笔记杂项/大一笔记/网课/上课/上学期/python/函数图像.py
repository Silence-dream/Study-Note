# 从matplotlib中导入plot，plot主要用户绘制函数的图形
import matplotlib.pyplot as plot
import numpy as np
# 定义一个[-30, 30)的区间，区间内每个元素之间间隔0.1
x_interval = np.arange(-10, 10, 0.1, float)
# 定义函数 y = sin(x)，同时将x_interval区间内所有的元素通过函数计算出来
y_interval = np.sin(x_interval)
# 根据给定的自变量x和因变量y的值作图
plot.plot(x_interval, y_interval)
# 将图形显示出来
plot.show()
