total = 0
lines = open('d3e.input').read().splitlines()
c = zip(*[iter(lines)]*3)
print(*[iter(lines)])
print(list(c))
