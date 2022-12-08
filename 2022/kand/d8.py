with open('d8.in') as f:
    v = 0
    rs = f.read().splitlines()
    for i, r in enumerate(rs):
        if i == 0 or i == len(rs) -1:
            v += len(r)
        else:
            v += 2
            for j, t in enumerate(r[1:-1]):
                tv = int(t)
                ja = j + 1
                n = all([int(rt[ja]) < tv for rt in rs[:i]])
                s = all([int(rt[ja]) < tv for rt in rs[i+1:]])
                e = all([int(st) < tv for st in r[ja+1:]])
                w = all([int(st) < tv for st in r[:ja]])
                v += 1 if any([n, s, e, w]) else 0

print(v)

with open('d8e.in') as f:
    ssmax = 0
    rs = f.read().splitlines()
    for i, r in enumerate(rs):
        if i != 0 and i != len(rs) -1:
            for j, t in enumerate(r[1:-1]):
                tv = int(t)
                ja = j + 1
                n = max([k + 1 for k, rt in enumerate(rs[:i]) if int(rt[ja]) < tv], default=1)
                s = max([k + 1 for k, rt in enumerate(rs[i+1:]) if int(rt[ja]) < tv], default=1)
                e = max([k + 1 for k, st in enumerate(r[ja+1:]) if int(st) < tv], default=1)
                w = max([k + 1 for k, st in enumerate(r[:ja]) if int(st) < tv], default=1)
                if (ss := n * s * e * w) > ssmax:
                    ssmax = ss

                print(ja, t, n, s, e, w, ss, ssmax)

print(ssmax)
