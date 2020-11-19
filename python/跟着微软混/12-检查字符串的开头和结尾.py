message = 'racecar'
print(message)                          # racecar
print("r",message.startswith('r'))      # r True
print("a",message.startswith('a'))      # a False
print("ra",message.startswith('ra'))    # ra True

print("r",message.endswith('r'))        # r True
print("a",message.endswith('a'))        # a False
print("ar",message.endswith('ar'))      # ar True

