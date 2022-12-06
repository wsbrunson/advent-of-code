def t(s):
    if s in ('A', 'X'):
        return 'R'
    elif s in ('B', 'Y'):
        return 'P'
    else:
        return 'S'

with open('d2-1.input') as f:
    total = 0
    for line in f:
        a, b = line.replace('\n', '').split(' ')

        ta = t(a)
        tb = t(b)

        print(ta, tb)
        roundScore = 3 if ta == tb else 0

        if tb == 'R':
            roundScore += 1
            if ta == 'S':
                roundScore += 6
        elif tb == 'P':
            roundScore += 2
            if ta == 'R':
                roundScore += 6
        elif tb == 'S':
            roundScore += 3
            if ta == 'P':
                roundScore += 6

        print(a, b, roundScore)
        total += roundScore

print(total)
