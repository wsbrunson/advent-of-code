print(sum([1 if not (r1 := set(range(int((r1s := (ag := l.split(','))[0].split('-'))[0]), int(r1s[1]) + 1))) - (r2 := set(range(int((r2s := ag[1].split('-'))[0]), int(r2s[1]) + 1))) or not r2 - r1 else 0 for l in open('d4.in')]))

print(sum([1 if set(range(int((r1s := (ag := l.split(','))[0].split('-'))[0]), int(r1s[1]) + 1)) & set(range(int((r2s := ag[1].split('-'))[0]), int(r2s[1]) + 1)) else 0 for l in open('d4.in')]))
