with open('d10.in') as f:
    c = 0
    x = 1
    ss = 0
    cbuf = []
    for l in f:
        ins = l[:4]

        if ins == 'addx':
            cbuf.extend([0, int(l[5:])])
        else:
            cbuf.append(0)

        while len(cbuf) > 0:
            c += 1

            if c == 20 or (c > 0 and (c - 20) % 40 == 0):
                ss += c * x

            x += cbuf.pop(0)

print(ss)

with open('d10.in') as f:
    c = 0
    x = 1
    cbuf = []
    crt = [['.'] * 40 for _ in range(6)]
    for l in f:
        ins = l[:4]

        if ins == 'addx':
            cbuf.extend([0, int(l[5:])])
        else:
            cbuf.append(0)

        while len(cbuf) > 0:
            print(int(c/40), c%40, c, x, x-1<= c % 40<=x+1)
            crt[int(c / 40)][c % 40] = '#' if x - 1 <= c % 40 <= x + 1 else '.'
            c += 1
            x += cbuf.pop(0)

print('\n'.join(map(lambda r: ''.join(r), crt)))
