medicine = 'Coughussin'
dosage = 5
duration = 4.5

# 在 Python 3.6 版本中，开发人员将 format() 方法简化为字符串前缀，即字母 f。 这几乎可执行所有相同的功能，但键入的内容更少。
# 可以理解为 JavaScript 模板字符串
instructions = '{} - Take {} ML by mouth every {} hours'.format(medicine, dosage, duration)
print(instructions)

instructions = '{2} - Take {1} ML by mouth every {0} hours'.format(medicine, dosage, duration)
print(instructions)

instructions = '{medicine} - Take {dosage} ML by mouth every {duration} hours'.format(medicine = 'Sneezergen', dosage = 10, duration = 6)

print(instructions)


print(f"{dosage}")