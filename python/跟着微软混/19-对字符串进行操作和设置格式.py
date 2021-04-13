''' 
    输出
       First Challenge        
Second challenge
               Third challenge
fourth#fifth#sixth!
        fourth
        fifth
        sixth
'''


first_value = '  FIRST challenge         '
second_value = '-  second challenge  -'
third_value = 'tH IR D-C HALLE NGE'

fourth_value = 'fourth'
fifth_value = 'fifth'
sixth_value = 'sixth'

# First challenge


# Second challenge


# Third challenge


print(first_value.strip().rjust(20))
print(second_value.replace("-","").strip().title())
print(third_value.lower().replace(" ","").title().rjust(20))
print(f"{fourth_value}#{fifth_value}#{sixth_value}")
# or
print(fourth_value, fifth_value, sixth_value, sep='#', end='!')
print(fourth_value.rjust(20))
print(fifth_value.rjust(20))
# or
print(f'\t{fourth_value}\n\t{fifth_value}\n\t{sixth_value}')
# Fourth challenge - use only the print() function (no f-strings)


# Fifth challenge - use only a single print() function.  Create tabs and new lines using f-strings.
