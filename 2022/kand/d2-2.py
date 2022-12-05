def t(s):
    if s == 'A':
        return 'R'
    elif s == 'B':
        return 'P'
    else:
        return 'S'

def w(s):
    if s == 'X':
        return 2
    elif s == 'Y':
        return 1
    else:
        return 0

m = {
    'R': [8, 4, 3],
    'P': [9, 5, 1],
    'S': [7, 6, 2],
}

with open('d2-1.input') as f:
    total = 0
    for line in f:
        a, b = line.replace('\n', '').split(' ')

        ta = t(a)
        tb = w(b)

        roundScore = m[ta][tb]
        total += roundScore

print(total)
