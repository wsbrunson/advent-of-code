with open('d3.input') as f:
    total = 0
    for l in f:
       mi = int(len(l) / 2)
       sc = None
       for c in l[:mi]:
           for c2 in l[mi:]:
               if c == c2:
                   sc = c
                   break
       #97 a
       #65 A
       o = ord(sc)
       if o > 96:
           total += o - 96
       else:
           total += o - 65 + 27
    print(total)
