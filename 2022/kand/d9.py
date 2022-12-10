def mt(h, t):
    if abs((x := h[0] - t[0])) < 2 \
            and abs((y := h[1] - t[1])) < 2:
        return t

    if x == 0:
        return (t[0], t[1] + (-1 if y < 0 else 1))
    elif y == 0:
        return (t[0] + (-1 if x < 0 else 1), t[1])

    return (
        t[0] + (-1 if x < 0 else 1),
        t[1] + (-1 if y < 0 else 1)
    )


with open('d9e.in') as f:
    mat = {}
    hc: tuple[int, int] = (0,0) 
    tc: tuple[int, int] = (0,0) 
    for l in f:
        d = l[0]
        m = int(l[2:-1])

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
