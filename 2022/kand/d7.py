with open('d7.in') as f:
    t = {}
    cd = []
    for l in f:
        if (fc := l[0]) == '$':
            if l[2:4] == 'cd':
                d = l[5:-1]
                if d == '..':
                    cd.pop()
                else:
                    cd.append(d)

                if not t.get((k := tuple(cd))):
                    t[k] = 0
        elif fc.isdigit():
            for i in range(len(cd)):
                t[tuple(cd[:i+1])] += int(l.split(' ')[0])

print(sum([s for s in t.values() if s < 100000]))
print(sorted([s for s in t.values() if s > 30000000 - (70000000 - t[('/',)])])[0])
