def mt(h, t):
    dx = h[0] - t[0]
    dy = h[1] - t[1]

    if abs(dx) < 2 and abs(dy) < 2:
        return t

    sx = -1 if dx < 0 else 1
    sy = -1 if dy < 0 else 1

    if dx == 0:
        return (t[0], t[1] + sy)

    if dy == 0:
        return (t[0] + sx, t[1])

    return (t[0] + sx, t[1] + sy)


with open('d9.in') as f:
    mat = {}
    hc = (0,0)
    tc = (0,0)
    for l in f:
        d = l[0]
        m = int(l[2:])

        for mc in range(m):
            if d == 'U':
                hc = (hc[0], hc[1] + 1)
            elif d == 'R':
                hc = (hc[0] + 1, hc[1])
            elif d == 'D':
                hc = (hc[0], hc[1] - 1)
            elif d == 'L':
                hc = (hc[0] - 1, hc[1])

            tc = mt(hc, tc)
            mat[tc] = True

print(mat[tc], len(mat))

with open('d9.in') as f:
    mat = {}
    r = [(0,0)] * 10
    for l in f:
        d = l[0]
        m = int(l[2:])

        for mc in range(m):
            if d == 'U':
                r[0] = (r[0][0], r[0][1] + 1)
            elif d == 'R':
                r[0]= (r[0][0] + 1, r[0][1])
            elif d == 'D':
                r[0] = (r[0][0], r[0][1] - 1)
            elif d == 'L':
                r[0] = (r[0][0] - 1, r[0][1])

            tc = mt(hc, tc)
            for i, knot in enumerate(r):
                if i == 0:
                    continue

                r[i] = mt(r[i - 1], r[i])

            mat[r[-1]] = True

print(mat[r[-1]], len(mat))
