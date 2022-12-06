with open('d6.in') as f:
    pos = -1
    s = []
    while (c := f.read(1)):
        pos += 1
        s.append(c)
        if len(set(s[-4:])) == 4:
            print(pos + 1)
            break

with open('d6.in') as f:
    pos = -1
    s = []
    while (c := f.read(1)):
        pos += 1
        s.append(c)
        if len(set(s[-14:])) == 14:
            print(pos + 1)
            break
